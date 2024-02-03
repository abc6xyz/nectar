import { ReactNode } from "react";
import Image from "next/image"
import { useTheme } from "@/providers/themeProvider";
type HeaderProps = {
  iconUrl: string;
  netName:string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode;
};

export default function Item({ iconUrl, netName ,onClick}: HeaderProps) {
  const { theme } = useTheme()
  return (
    <div className={`w-full px-2 py-1 flex space-x-3 cursor-pointer h-full
    ${theme?"bg-white hover:bg-zinc-300":"bg-zinc-700  hover:bg-zinc-500"}
    `} onClick={onClick}>
      {iconUrl!==""&&<Image src={iconUrl} alt="Logo" width={20} height={40} priority />}
      <div className={theme?"text-black":"text-white"}>{netName}</div>
    </div>
  );
}
