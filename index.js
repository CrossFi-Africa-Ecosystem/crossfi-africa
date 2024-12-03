#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const inquirer = require('inquirer');

const templatesDir = path.join(__dirname, 'templates');

async function main() {
    try {
        // Prompt the user for project type and name
        const { projectType, projectName } = await inquirer.prompt([
            {
                type: 'list',
                name: 'projectType',
                message: 'Which project do you want to create?',
                choices: ['Hardhat', 'React', 'Both'],
            },
            {
                type: 'input',
                name: 'projectName',
                message: 'Enter your project name:',
                default: 'crossfi-project',
            },
        ]);

        const projectPath = path.join(process.cwd(), projectName);
        fs.ensureDirSync(projectPath);

        // Setup Hardhat project if selected
        if (projectType === 'Hardhat' || projectType === 'Both') {
            console.log('Setting up Hardhat project...');
            fs.copySync(path.join(templatesDir, 'hardhat'), projectPath);
            console.log('Hardhat project created.');
        }

        // Setup React project if selected
        if (projectType === 'React' || projectType === 'Both') {
            console.log('Setting up React project...');
            const reactPath = projectType === 'Both' ? path.join(projectPath, 'frontend') : projectPath;
            fs.copySync(path.join(templatesDir, 'react'), reactPath);
            console.log('React project created.');
        }

        // Install dependencies for the selected project
        console.log('Installing dependencies...');
        execSync('npm install', { cwd: projectPath, stdio: 'inherit' });
        console.log('All done! 🚀');
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
}

main();
