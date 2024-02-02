import { ReactNode, useState } from "react";
import Image from "next/image"
import { TokenObject } from "@/interface";

type HeaderProps = {
  mode: boolean;
  token: TokenObject;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  minimized: boolean;
  selected: TokenObject | null;
  children?: ReactNode;
};

export default function NetDetailedItem({ mode, token, onClick, minimized, selected }: HeaderProps) {
  return (
    <div className={`p-2 flex space-x-3 cursor-pointer duration-300
      ${minimized?"justify-center items-center":"mx-3"}
      ${selected===token?`${mode?"bg-[#FF4D04]":"bg-zinc-400"}`:""}
      ${mode?"hover:bg-[#FF4D04]":"hover:bg-zinc-400"}`} onClick={onClick} >
      <Image src={token.icon} alt="Logo" width={25} height={25} priority />
      <div className={`${minimized?"hidden":""}`}>
        <div className={mode ? "text-black" : "text-white"}>{token.netName}</div>
      </div>
    </div>
  );
}
