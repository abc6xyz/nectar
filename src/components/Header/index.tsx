import Image from "next/image";
import { ReactNode } from "react";
import ConnectButton from "./connectButton";
import { useTheme } from "@/providers/themeProvider";

export default function Header() {
  const {theme, toggleTheme} = useTheme();
  return (
    <div>
      <div className={` py-4 flex justify-between p-5 border-b ${theme? "border-[#FF4D04]" : " border-zinc-600"}`}>
        <div id="logo" className="flex cursor-pointer items-center space-x-2 text-xl">
          <Image src="/assets/logo.svg" alt="Logo" width={40} height={40} priority />
          <div className={theme?'text-black':'text-white'}>nectar</div>
        </div>
        <div >
          <div className="flex space-x-5">
            <Image
              src={theme? "/assets/theme-moon.svg" : "/assets/theme-sun.svg"}
              alt={theme? "Dark" : "Light"}
              width={20}
              height={20}
              priority
              className="color-black cursor-pointer"
              onClick={toggleTheme}
            />
            <ConnectButton/>
          </div>
        </div>
      </div>
    </div>
  );
}
