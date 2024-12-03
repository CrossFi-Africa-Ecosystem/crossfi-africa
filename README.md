<!-- TITLE -->
<p align="center">
  <img width="100px" src="https://miro.medium.com/v2/resize:fit:400/1*mb6-NZ7xv2HQmX29Kl_wPA.jpeg" align="center" alt="CrossFi" />
 <h2 align="center">CrossFi Africa</h2>
 <p align="center">Build, deploy, and iterate quickly on decentralized applications using CrossFi Africa Template.</p>
</p>


<!-- TABLE OF CONTENTS -->

<div> 
    <summary>Table of Contents</summary> 
        <ol> 
            <li><a href="#about-the-project">About The Project</a></li> 
            <ol> 
                <li><a href="#built-with">Built With</a></li> 
                <li><a href="#prerequisites">Prerequisites</a></li> 
            </ol> 
            <li><a href="#how-to-use-crossfi-africa">How to Use CrossFi Africa</a></li> 
            <ol> 
                <li><a href="#install-dependencies">Install Dependencies</a></li> 
                <li><a href="#deploy-a-smart-contract">Deploy a Smart Contract</a></li> 
                <li><a href="#deploy-your-dapp-locally">Deploy Your Dapp Locally</a></li> 
                <li><a href="#add-ui-components">Add UI Components</a></li> 
                <li><a href="#deploy-with-vercel">Deploy with Vercel</a></li> 
                <li><a href="#supported-frameworks">Supported Frameworks</a></li> 
                <li><a href="#supported-templates">Supported Templates</a></li> 
            </ol> 
            <li><a href="#usage">Usage</a></li> 
            <li><a href="#support">Support</a></li> 
            <li><a href="#roadmap">Roadmap</a></li> 
            <li><a href="#contributing">Contributing</a></li> 
            <li><a href="#license">License</a></li> 
            <li><a href="#contact">Contact</a></li> 
        </ol> 
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

CrossFi Africa empowers developers to quickly build, deploy, and iterate on decentralized applications using the CrossFi Chain. It provides an intuitive environment with tools, templates, and frameworks to simplify the development process for Africa-focused decentralized apps.

Perfect for hackathons or large-scale projects, CrossFi Africa ensures a seamless experience, enabling rapid development and deployment of dApps with interoperability and high scalability.

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

CrossFi Africa leverages modern blockchain technologies, offering support for various frameworks and libraries.

- [CrossFi Chain](https://crossfi.org/)
- [Solidity](https://docs.soliditylang.org/en/v0.8.19/)
- [Hardhat](https://hardhat.org/)
- [React.js](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Prerequisites

- Node (v20 or higher)
- Git (v2.38 or higher)

## How to use CrossFi Africa

The easiest way to start with CrossFi Africa is using `@crossfi/crossfi-africa`. This CLI tool lets you quickly start building dApps on CrossFi, including several templates. To get started, just run the following command, and follow the steps:

```bash
npx @crossfi/crossfi-africa
```

```text
🚀 Your starter project has been successfully created!
```

## Install Dependencies

Once your custom dApp has been created, just install dependencies, either with yarn:

```bash
   yarn
```

If you prefer npm, you can run:

```bash
   npm install
```

## Deploy a Smart Contract

Find the detailed instructions on how to run your smart contract in [packages/hardhat/README.md](./packages/hardhat/README.md).

For quick development follow these three steps:

1. Change `packages/hardhat/env.template` to `packages/hardhat/env` and add your `PRIVATE_KEY` into the `.env` file.
2. Make sure your wallet is funded when deploying to testnet or mainnet. You can get test tokens for deploying it on crossFiTestnet(XFI) from the [xfiConsole Faucet](https://test.xficonsole.com/cosmos-wallet).
3. Run the following commands from the `packages/hardhat` folder to deploy your smart contract to the CrossFi Testnet:

```bash
npx hardhat ignition deploy ./ignition/modules/Lock.ts --network crossFiTestnet
```

## Deploy your Dapp Locally

Find the detailed instructions on how to run your frontend in the [`react-dapp` README.md](./packages/react-app/README.md).

Before you start the project, please follow these steps:

1. Rename the file:
   packages/react-app/.env.template
   to
   packages/react-app/.env

2. Open the newly renamed .env file and add your Reown Cloud Project ID from [Reown Cloud](https://cloud.reown.com/app/)

Once you've done that, you're all set to start your project!

Run the following commands from the `packages/react-app` folder to start the project:

```bash
   yarn dev
```

If you prefer npm, you can run:

```bash
   npm run dev
```

Thank you for using CrossFi Africa! If you have any questions or need further assistance, please refer to the README or reach out to our team.

## Supported Frameworks

### React / Nextjs

- Support for Website and Progressive Web Application.
- Works with Metamask and Keplr wallets.

Check [nextjs docs](https://nextjs.org/docs) to learn more about it.

### Hardhat

- Robust framework for building and testing smart contracts.
- Compatible with various Ethereum development tools and plugins.

Check [hardhat docs](https://hardhat.org/hardhat-runner/docs/getting-started) to learn more about it.

<!-- CONTRIBUTING -->

## Contributing

We welcome contributions from the community.

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

- [@CrossFiAfrica](https://x.com/CrossFiAfrica)

<p align="right">(<a href="#top">back to top</a>)</p>
