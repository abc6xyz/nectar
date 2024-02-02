import Image from "next/image";
import { ReactNode } from "react";
import Button from "./button";

type HeaderProps = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
};

export default function Header({ mode,setMode }: HeaderProps) {

  const modeButtonClickHandeler = ()=>{
    setMode(!mode)
  }
  return (
    <div>
      <div className={` py-4 flex justify-between p-5 border-b duration-300 ${mode? "border-[#FF4D04]" : " border-zinc-600"}`}>
        <div id="logo" className="flex cursor-pointer items-center space-x-2 text-xl">
          <Image src="/assets/logo.svg" alt="Logo" width={40} height={40} priority />
          <div className={mode?'text-black':'text-white'}>nectar</div>
        </div>
        <div >
          <div className="flex space-x-5">
            <Image
              src={mode? "/assets/theme-moon.svg" : "/assets/theme-sun.svg"}
              alt={mode? "Dark" : "Light"}
              width={20}
              height={20}
              priority
              className="color-black cursor-pointer"
              onClick={modeButtonClickHandeler}
            />
            <Button mode={mode} connectFlag={false} walletAddress="" />
          </div>
        </div>
      </div>
    </div>
  );
}
