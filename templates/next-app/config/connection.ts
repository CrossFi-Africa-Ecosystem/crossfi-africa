"use client";
import { ReactNode } from "react";
import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { defineChain, Chain } from "@reown/appkit/networks";

console.log(process.env.NEXT_PUBLIC_CROSSFI_EXPLORER_URL);

const crossFiTestnet: Chain = defineChain({
  id: 4157,
  caipNetworkId: "eip155:4157",
  chainNamespace: "eip155",
  name: "CrossFi Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "XFI",
    symbol: "XFI",
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_CROSSFI_RPC_URL as string],
    },
  },
  blockExplorers: {
    default: {
      name: "XFI Scan",
      url: process.env.NEXT_PUBLIC_CROSSFI_EXPLORER_URL as string,
    },
  },
  contracts: {},
});

const projectId = process.env.NEXT_PUBLIC_APPKIT_PROJECT_ID as string;

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

export const appkit = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [crossFiTestnet],
  chainImages: {
    [crossFiTestnet.id]: "https://s2.coinmarketcap.com/static/img/coins/64x64/26202.png",
  },
  metadata,
  projectId,
  allowUnsupportedChain: false,
  allWallets: "SHOW",
  defaultNetwork: crossFiTestnet,
  enableEIP6963: true,
  features: {
    analytics: true,
    allWallets: true,
    email: false,
    socials: [],
  },
});

interface AppKitProviderProps {
  children: ReactNode;
}

interface AppKitProviderProps {
  children: ReactNode;
}

