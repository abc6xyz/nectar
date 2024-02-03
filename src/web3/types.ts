import type Web3 from "web3";
import type { MetaMaskInpageProvider } from "@metamask/providers";

export type ConnectedReturnType = {
  provider: MetaMaskInpageProvider;
  web3: Web3;
  accounts: string[];
};
