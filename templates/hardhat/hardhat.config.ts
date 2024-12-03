import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    crossFiTestnet: {
      url: process.env.CROSSFI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 1000000000,
    },
  }
};

export default config;