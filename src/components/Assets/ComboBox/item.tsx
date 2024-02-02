import { ReactNode } from "react";
import Image from "next/image"
type HeaderProps = {
  mode: boolean;
  iconUrl: string;
  netName:string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode;
};

export default function Item({ mode, iconUrl, netName ,onClick}: HeaderProps) {
  return (
    <div className={`w-full px-2 py-1 flex space-x-3 cursor-pointer duration-300 h-full
    ${mode?"bg-white hover:bg-zinc-300":"bg-zinc-700  hover:bg-zinc-500"}
    `} onClick={onClick}>
      {iconUrl!==""&&<Image src={iconUrl} alt="Logo" width={20} height={40} priority />}
      <div className={mode?"text-black":"text-white"}>{netName}</div>
    </div>
  );
}
