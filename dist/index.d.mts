#!/usr/bin/env node
const path = require("path");
const { spawnSync } = require("child_process");
const {
  copySync,
  existsSync,
  readJSONSync,
  writeJSONSync,
  readdirSync,
} = require("fs-extra");
const chalk = require("chalk");
const { prompt } = require("enquirer");
const fs = require("fs");

async function main() {
  try {
    const projectName = process.argv[2];
    if (!projectName) {
      console.error(chalk.red("Please specify a project directory:"));
      console.log(
        `  ${chalk.cyan("npx create-crossfi-appkit")} ${chalk.green("<project-directory>")}`
      );
      process.exit(1);
    }

    const projectPath = path.resolve(projectName);
    const templateBase = path.join(__dirname, "templates");

    if (existsSync(projectPath)) {
      console.error(chalk.red(`Directory ${projectName} already exists!`));
      process.exit(1);
    }

    fs.mkdirSync(projectPath, { recursive: true });

    const hardhatTemplatePath = path.join(templateBase, "hardhat");
    readdirSync(hardhatTemplatePath).forEach((file) => {
      copySync(
        path.join(hardhatTemplatePath, file),
        path.join(projectPath, file)
      );
    });

    const { framework } = await prompt([
      {
        type: "select",
        name: "framework",
        message: "Choose your frontend framework:",
        choices: ["react-app", "next-app"],
      },
    ]);

    const frontendTemplate = path.join(templateBase, framework);
    const frontendPath = path.join(projectPath, framework);
    copySync(frontendTemplate, frontendPath, { overwrite: true });

    const hardhatPkg = readJSONSync(
      path.join(templateBase, "hardhat", "package.json")
    );
    const frontendPkg = readJSONSync(
      path.join(frontendTemplate, "package.json")
    );

    const mergedPackage = {
      ...hardhatPkg,
      ...frontendPkg,
      scripts: { ...hardhatPkg.scripts, ...frontendPkg.scripts },
      dependencies: { ...hardhatPkg.dependencies, ...frontendPkg.dependencies },
      devDependencies: {
        ...hardhatPkg.devDependencies,
        ...frontendPkg.devDependencies,
      },
    };

    writeJSONSync(path.join(projectPath, "package.json"), mergedPackage, {
      spaces: 2,
    });

    const hardhatConfigPath = path.join(projectPath, "hardhat.config.ts");
    const artifactPath =
      framework === "react-app"
        ? "paths: { artifacts: './src/contracts/artifacts' }"
        : "paths: { artifacts: './app/contracts/artifacts' }";

    if (fs.existsSync(hardhatConfigPath)) {
      const configContent = fs.readFileSync(hardhatConfigPath, "utf-8");
      fs.writeFileSync(
        hardhatConfigPath,
        configContent.replace("// {{ARTIFACT_PATH}}", artifactPath)
      );
    } else {
      console.warn(
        chalk.yellow(
          "⚠️ Warning: hardhat.config.ts not found, skipping modification."
        )
      );
    }

    console.log(chalk.blue("\nInstalling dependencies..."));
    spawnSync("npm", ["install"], {
      cwd: projectPath,
      stdio: "inherit",
      shell: true,
    });

    console.log(chalk.greenBright("\n✅ Project setup completed!"));
    console.log(
      chalk.cyan(
        `\nTo get started:\n  cd ${projectName}\n  cd ${framework}\n npm install\n  npm run dev`
      )
    );
  } catch (error) {
    console.error(chalk.red("\n⚠️  Setup error:"), error);
    process.exit(1);
  }
}

main();
