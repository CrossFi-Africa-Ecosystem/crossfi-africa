<!-- TITLE -->
<p align="center">
  <img width="120px" src="https://miro.medium.com/v2/resize:fit:400/1*mb6-NZ7xv2HQmX29Kl_wPA.jpeg" alt="CrossFi" />
  <h1 align="center">create-crossfi-appkit</h1>
  <p align="center">Kickstart Web3 development on CrossFi Chain with a flexible, production-ready template for Hardhat + React or Next.js.</p>
  <p align="center">
    <a href="https://github.com/CrossFi-Africa-Ecosystem/crossfi-africa/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue" alt="License" />
    </a>
    <a href="https://www.npmjs.com/package/crossfi-appkit">
      <img src="https://img.shields.io/npm/v/crossfi-appkit" alt="NPM Version" />
    </a>
  </p>
</p>

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#-why-crossfi-appkit">Why create-crossfi-appkit?</a></li>
    <li><a href="#-features">Features</a></li>
    <li><a href="#-getting-started">Getting Started</a></li>
    <li><a href="#-project-structure">Project Structure</a></li>
    <li><a href="#-supported-frameworks">Supported Frameworks</a></li>
    <li><a href="#-roadmap">Roadmap</a></li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-license">License</a></li>
    <li><a href="#-contact">Contact</a></li>
  </ol>
</details>

---

## 🚀 Why CrossFi AppKit?

CrossFi Appkit is a **zero-config template** for building decentralized applications on the CrossFi Chain. Designed for developers of all levels, it provides:

- **Flexible Framework Choice**: Start with React or Next.js (App Router)
- **Pre-configured Tooling**: Hardhat (Ethereum development environment), Ethers.js, and Tailwind CSS
- **Africa-Focused**: Optimized for cross-border DeFi applications and interoperability
- **Production-Ready**: Includes CI/CD templates, testing suites, and deployment scripts

<p align="right"><a href="#top">↑ Back to top</a></p>

---

## ✨ Features

- **Smart Contract Development**
  - Hardhat setup with TypeScript/JavaScript support
  - Sample ERC-20 token contract & tests
  - Preconfigured networks (CrossFi Testnet/Mainnet)
- **Frontend Integration**

  - Wallet connection templates (MetaMask, Rabby Wallet)
  - React/Next.js hooks for contract interaction
  - Responsive UI components with Tailwind CSS

- **Deployment Tools**
  - One-click Vercel deployment
  - Hardhat deployment scripts
  - Environment variable management

<p align="right"><a href="#top">↑ Back to top</a></p>

---

## 🛠️ Getting Started

### Prerequisites

- Node.js ≥ v20
- npm ≥ v9 or Yarn ≥ v1.22
- Git ≥ v2.38

### Installation

1. **Create a new project** (replace `my-dapp` with your project name):

   ```bash
   npx create-crossfi-appkit my-dapp
   ```

2. **Choose your framework**:

   ```bash
   ? Select your frontend framework: (Use arrow keys)
   ❯ React (Vite)
     Next.js (App Router)
   ```

3. **Follow setup instructions**:

   ```bash
   cd my-dapp
   npm install
   ```

4. **Start developing**:

   ```bash
   # Start frontend
   npm run dev

   # Compile contracts
   npx hardhat compile

   # Run tests
   npx hardhat test
   ```

<p align="right"><a href="#top">↑ Back to top</a></p>

---

## 📁 Project Structure

```bash
my-dapp/
├── contracts/           # Solidity smart contracts
├── scripts/             # Hardhat deployment scripts
├── test/                # Smart contract tests
│
├── frontend/            # React/Next.js frontend
│   ├── src/             # React components (React template)
│   ├── app/             # Next.js App Router (Next.js template)
│   ├── hooks/           # Web3 interaction hooks
│   └── styles/          # Tailwind CSS configuration
│
├── hardhat.config.js    # Hardhat configuration
└── package.json         # Unified dependencies
```

<p align="right"><a href="#top">↑ Back to top</a></p>

---

## 🔌 Supported Frameworks

| Framework   | Features                                                          |
| ----------- | ----------------------------------------------------------------- |
| **React**   | Vite setup, Wallet connection hooks, ERC-20 interaction examples  |
| **Next.js** | App Router support, Server Components for Web3, Optimized SSG/SEO |

---

## 🗺️ Roadmap

- [ ] Add Vue.js template support
- [ ] CrossFi Chain SDK integration
- [ ] Multi-sig wallet templates
- [ ] Gasless transaction examples

---

## 🤝 Contributing

We welcome contributions! Please see our [Contribution Guidelines](CONTRIBUTING.md) and:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

**CrossFi Appkit Team**

- GitHub Issues: [Report a Bug](https://github.com/CrossFi-Africa-Ecosystem/crossfi-africa/issues)
- Telegram: [Send A DM](https://t.me/alAmeer170)
- Email: [rajiabdullahi907@gmail.com](mailto:rajiabdullahi907@gmail.com)

<p align="right"><a href="#top">↑ Back to top</a></p>
