# CrossFi Chain Starter Kit

A CLI tool to help developers kickstart their CrossFi projects with pre-configured Hardhat and React templates.

## Features

- Quickly set up a Hardhat project.
- Easily create a React frontend.
- Option to generate both Hardhat and React projects in a single directory.
- Hassle-free dependency installation.

## Installation

You can use `npx` to run the tool without installation:

Run the command and follow the prompts:


```bash
npx crossfi-chain-cli
```

## Options

- Select the type of project you want: Hardhat, React, or Both.
- Provide a name for your project directory.

## Example

1. Run the tool:

```bash
npx crossfi-chain-cli
```

2. Choose "Both" to generate a full-stack project:

```bash

? Which project do you want to create? (Use arrow keys)
  Hardhat
  React
> Both
```

Enter your project name:

````bash
? Enter your project name: my-crossfi-app
The tool sets up the project and installs dependencies automatically:

```bash
Setting up Hardhat project...
Setting up React project...
Installing dependencies...
All done! 🚀
````

- Your project is ready to go:

```bash
my-crossfi-app/
├── contracts/ # Hardhat backend
├── frontend/ # React frontend
```

## License

[MIT](https://github.com/CrossFi-Africa-Ecosystem/crossfi-africa/blob/main/LICENSE)
