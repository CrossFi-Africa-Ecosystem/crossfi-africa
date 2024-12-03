#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs-extra');

// Directory where the templates are stored
const templatesDir = path.join(__dirname, 'templates');

async function main() {
    try {
        const projectName = 'crossfi-project-kit'; 

        // Set up the project directory
        const projectPath = path.join(process.cwd(), projectName);
        fs.ensureDirSync(projectPath);

        // Setup Hardhat project
        console.log('Setting up Hardhat project...');
        fs.copySync(path.join(templatesDir, 'hardhat'), projectPath);
        console.log('Hardhat project created.');

        // Setup React project
        console.log('Setting up React project...');
        const reactPath = path.join(projectPath, 'react-app');
        fs.copySync(path.join(templatesDir, 'react'), reactPath);
        console.log('React project created.');

        // Install dependencies for both Hardhat and React projects
        console.log('Installing dependencies for Hardhat...');
        execSync('npm install', { cwd: projectPath, stdio: 'inherit' });

        console.log('Installing dependencies for React...');
        execSync('npm install', { cwd: reactPath, stdio: 'inherit' });

        console.log('All done! 🚀');
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
}

main();
