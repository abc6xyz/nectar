import Web3 from "web3";
import type { MetaMaskInpageProvider } from "@metamask/providers";

export type ConnectedReturnType = {
    provider: MetaMaskInpageProvider;
    web3: Web3;
    accounts: string[];
}; 

/**
 * @returns the provider for MetaMask
 */
const initMetaMaskProvider = () =>
  (window.ethereum as any)?.providers?.find(
    (p: MetaMaskInpageProvider) => !!p.isMetaMask
  ) ?? window.ethereum;

/**
 * @returns `{ provider, web3, accounts }`
 */
export const connectMetaMask = async (): Promise<ConnectedReturnType> => {
  // initializes the MetaMask provider using the provider at window.ethereum
  const provider = initMetaMaskProvider();
  // we make sure that the user has MetaMask installed in their browser
  if (!provider || !provider.isMetaMask || !window.ethereum) {
    // if metamaked extension not installed
    window.open("https://metamask.io/download.html", "_blank");
    throw new Error("METAMASK EXTENSION IS NOT INSTALLED");
  }

  // initialize the Web3 instance
  const web3 = new Web3(provider);
  const accounts: string[] = await provider.request({
    method: "eth_requestAccounts",
  });

  return { provider, web3, accounts };
};
