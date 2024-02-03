import { ReactNode } from "react";
import Image from "next/image"
import { TokenObject } from "@/interface";
import { useTheme } from "@/providers/themeProvider";

type HeaderProps = {
  token: TokenObject;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  minimized: boolean;
  selected: TokenObject | null;
  children?: ReactNode;
};

export default function TokenItem({ token, onClick, minimized, selected }: HeaderProps) {
  const { theme } = useTheme()
  return (
    <div className={`p-2 flex space-x-3 cursor-pointer duration-300
      ${minimized?"justify-center items-center":"mx-3"}
      ${selected===token?`${theme?"bg-[#FF4D04]":"bg-zinc-400"}`:""}
      ${theme?"hover:bg-[#FF4D04]":"hover:bg-zinc-400"}`} onClick={onClick} >
      <Image src={token.icon} alt="token" width={25} height={25} priority />
      <div className={`${theme ? "text-black" : "text-white"} ${minimized?"hidden":""} flex w-full space-x-2`}>
        <div className="w-full flex justify-between">
          <div>{token.name}</div>
          <div>{token.balance}</div>
        </div>
        <div className="w-10">{token.unit}</div>
      </div>
    </div>
  );
}
