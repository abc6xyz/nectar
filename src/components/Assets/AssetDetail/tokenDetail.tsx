import { ReactNode, useState } from "react";
import Image from "next/image";
import Item from "./tokenItem";
import NetDetailedItem from "./tokenItem";
import { TokenObject } from "@/interface";
import { useTheme } from "@/providers/themeProvider";

type HeaderProps = {
  token: TokenObject | null;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode;
};

export default function TokenDetail({ token, onClose}: HeaderProps) {
  const [value, setValue] = useState('');
  const { theme } = useTheme()
  
  const onhandleTransfer = () => {
    console.log("transfering...")
  }

  return (
    <div className={`
      px-4
    `}>
      <div className="flex justify-between mb-8">
        <div>Transfer {token?.name}</div>
        <div className="cursor-pointer" onClick={onClose}>[ close ]</div>
      </div>
      <div className="space-y-3">
        <div className="w-full h-32 rounded border border-zinc-400 space-y-4 p-5 clip-funding-wallet-shape">
          <div>Funding Wallet</div>
          <div className="funding-inside flex flex-col justify-between px-5">
            <div className="flex flex-row justify-between">
              <img
                src={token?.icon}
                width={24}
                height={24}
                alt="token-logo"
              />
              <div>{`${token?.balance} ${token?.unit}`}</div>
            </div>
          </div>
        </div>
        <div className="w-full h-32 rounded border border-zinc-400 space-y-4 p-5 clip-trading-wallet-shape">
          <div>Trading Wallet</div>
          <div className="funding-inside flex flex-col justify-between px-5">
            <div className="flex flex-row justify-between">
              <img
                src={token?.icon}
                width={24}
                height={24}
                alt="token-logo"
              />
              <div>{`${token?.balance} ${token?.unit}`}</div>
            </div>
          </div>
        </div>
        <div className="relative flex space-x-1 h-10">
          <div className="w-3/4">
            <div className="flex relative justify-end h-full">
              <input
                type="text"
                prefix="0"
                inputMode="numeric"
                className={`text-xl w-full h-full rounded border border-[#FF4D04] appearance-none ${theme?"":"bg-zinc-900"}`}/>
              <span className="absolute h-full flex justify-center">USDT</span>
            </div>
          </div>
          <div className="w-1/4">
            <button className="w-full h-full rounded border border-[#FF4D04]"
              onClick={
                (e: React.MouseEvent<HTMLButtonElement>)=>{
                  e.currentTarget.style.backgroundColor = "#FF4D04"
                  e.currentTarget.style.color = "white"
                }
              }>
                All
              </button>
          </div>
        </div>
        <div className="h-10">
          <button
            className="w-full h-full text-white bg-[#FF4D04] rounded border border-[#FF4D04]"
            onClick={onhandleTransfer}>
              Transfer
          </button>
        </div>
      </div>
    </div>
  );
}
