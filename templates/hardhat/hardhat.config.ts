import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const config: HardhatUserConfig = {
<<<<<<< HEAD:packages/hardhat/hardhat.config.ts
  solidity: "0.8.26",
  networks: {
    crossFi: {
=======
  solidity: "0.8.28",
  networks: {
    crossFiTestnet: {
>>>>>>> 65f2b4b04551f067c3ef240320c5d2ff8d997eb9:templates/hardhat/hardhat.config.ts
      url: process.env.CROSSFI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 1000000000,
    },
  }
};

<<<<<<< HEAD:packages/hardhat/hardhat.config.ts
export default config;
=======
export default config;
>>>>>>> 65f2b4b04551f067c3ef240320c5d2ff8d997eb9:templates/hardhat/hardhat.config.ts
