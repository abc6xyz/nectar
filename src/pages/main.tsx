
import Header from "@/components/Header";
import { useCallback, useContext, useState } from "react";
import Assets from "@/components/Assets";
import { useWeb3 } from "@/web3/useWeb3";
import { useTheme } from '@/providers/themeProvider';

export default function MainPage() {
  const { theme } = useTheme();
  return (
    <div className={`w-full h-screen duration-300  ${theme? "bg-white text-black" : "bg-black text-white"}`}>
      <Header/>
        <div className="w-full py-10">
      <Assets/>
      </div>
    </div>
  );
}
