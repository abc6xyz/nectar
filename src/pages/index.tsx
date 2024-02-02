import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { useState } from "react";
import Assets from "@/components/Assets";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mode,setMode] = useState(true)
  return (
    <div className={`w-full h-screen duration-300  ${mode?  "bg-white text-black" : "bg-black text-white"}`}>
      <Header mode={mode} setMode={setMode}/>
      <div className="w-full py-10">
        <Assets mode={mode}/>
      </div>
    </div>
  );
}
