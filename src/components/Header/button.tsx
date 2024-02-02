import Image from "next/image";
import { useState } from "react";
import { ReactNode } from "react";
import {getTextColor,getBgColor} from "@/components/ThemeProvider"

type ButtonProps = {
  mode: boolean;
  connectFlag:boolean;
  walletAddress:string;
  children?: ReactNode;
};

export default function Button({mode,connectFlag,walletAddress}:ButtonProps) {
  return (
    <div className={`w-44 h-10 flex justify-center rounded-md duration-300 cursor-pointer
      ${mode?
        "bg-white hover:bg-[#FF4D04] border border-[#FF4D04]"
        :
        "bg-zinc-700  hover:bg-[#FF4D04]"}`}>
      <button>
        {
            connectFlag?
            <div className="flex">
                <Image src="/assets/metamask.svg" alt="metamask" width={16} height={16} priority/>
                <div>{walletAddress}</div>
            </div>:
            <div className={mode?"text-black":"text-white"}>Connect</div>
        }
      </button>
    </div>
  );
}
