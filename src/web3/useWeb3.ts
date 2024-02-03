import Web3 from "web3";
import { useCallback, useEffect, useState } from "react";
import { connectMetaMask } from "./connectors/metaMask";
import type { MetaMaskInpageProvider } from "@metamask/providers";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState<Web3>();
  const [provider, setProvider] = useState<MetaMaskInpageProvider>();
  const [account, setAccount] = useState<string>();

  const connectProvider = async () => {
    try {
      const {
        provider: connectedProvider,
        web3: web3Instance,
        accounts,
      } = await connectMetaMask();
      // set the web3, provider, and account state variables using the
      // resolved values from the connectWallet function
      setProvider(connectedProvider);
      setWeb3(web3Instance);
      setAccount(accounts[0]);
    } catch {
      // If the user cancels the request to connect from the wallet provider
      console.warn("FAILED TO SIGN IN!");
    }
  }

  return {
    connectProvider,
    account,
    web3,
  };
};
