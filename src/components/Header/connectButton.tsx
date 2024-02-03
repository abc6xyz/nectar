import { useTheme } from "@/providers/themeProvider";
import { useWeb3 } from "@/web3/useWeb3";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function ConnectButton() {
  const { theme } = useTheme();

  const { connectProvider, account, web3 } = useWeb3();
  const connected = !!account && !!web3;

  const handleConnectProvider = async () => {
    // Set the UI state to loading to prevent further interaction
    // attempt to connect provider via web3Hook
    await connectProvider();
  }

  const hiddenAddress = (addr: string) => {
    const startChars = addr.substring(0, 5);
    const endChars = addr.substring(addr.length - 5);
    const truncatedAddr = `${startChars}......${endChars}`;
    return truncatedAddr
  }

  return (
    <div className={`w-44 h-10 flex justify-center rounded-md cursor-pointer
      ${theme?
        "bg-white hover:bg-[#FF4D04] border border-[#FF4D04]"
        :
        "bg-zinc-700  hover:bg-[#FF4D04]"}`}>
      <button onClick={handleConnectProvider}>
        {
          connected?
          <div className="flex space-x-2">
              <Image src="/assets/metamask.svg" alt="metamask" width={20} height={20} priority/>
              <span>{hiddenAddress(account)}</span>
          </div>:
          <div className={theme?"text-black":"text-white"}>Connect</div>
        }
      </button>
    </div>
  );
}
