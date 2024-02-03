import { ReactNode, useState } from "react";
import TokenItem from "./tokenItem";
import TokenDetail from "./tokenDetail";
import { TokenObject } from "@/interface";
import { useTheme } from "@/providers/themeProvider";
import { tokens } from "@/const";

export default function AssetDetail() {
  const [openFlag, setOpenFlag] = useState(false);
  const [tokenList, setTokenList] = useState<TokenObject[]>(tokens);
  const [selectedToken, setSelectedToken] = useState<TokenObject | null>(null);
  const { theme } = useTheme();
  
  return (
    <div className="w-full">
      <div className="h-8">Assets</div>
        <div className={`h-[474px] relative overflow-hidden flex 
          ${theme ? "bg-white border-zinc-400 border" : "bg-zinc-900"}
        ` }>
          <div className={`p-1 space-y-1 ${openFlag?"w-1/6 border-r border-zinc-400":"w-full"}`}>
          {
            tokenList?.map(token => {
              return (
                <TokenItem selected={selectedToken} token={token} onClick={() => {setOpenFlag(true); setSelectedToken(token)}} minimized={openFlag}/>
              )
            })
          }
          </div>
          <div className={`w-5/6 absolute h-full top-0 p-4 left-full ${openFlag?"-translate-x-full duration-500":""}`}>
            <TokenDetail token={selectedToken} onClose={()=>setOpenFlag(false)}></TokenDetail>
        </div>
        </div>
    </div>
  );
}
