import { ReactNode, useState } from "react";
import NetDetailedItem from "./net-detailed-item";
import TokenDetail from "./tokenDetail";
import { TokenObject } from "@/interface";

type HeaderProps = {
  mode: boolean;
  children?: ReactNode;
};

const defaultTokenList = [
  { icon: "/assets/klaytn.svg", netName: "Klaytn", unit: "ETH", balance:"0", address:"0" },
  { icon: "/assets/ether.svg", netName: "Etherum", unit: "USDT", balance:"0", address:"0" },
  { icon: "/assets/optimism.svg", netName: "Optimism", unit: "IVE", balance:"0", address:"0" },
]

export default function AssetDetail({ mode }: HeaderProps) {
  const [openFlag, setOpenFlag] = useState(false);
  const [tokenList, setTokenList] = useState<TokenObject[]>(defaultTokenList);
  const [selectedToken, setSelectedToken] = useState<TokenObject | null>(null);
  
  return (
    <div className="w-full">
      <div className="h-8">Assets</div>
        <div className={`h-[474px] relative overflow-hidden flex 
        ${mode ? "border-zinc-400 border" : ""}
        ${mode ? "bg-white" : " bg-zinc-900"}
        ` }>
          <div className={`p-1 space-y-1 ${openFlag?"w-1/6 border-r border-zinc-400":"w-full"}`}>
          {
            tokenList?.map(token => {
              return (
                <NetDetailedItem mode={mode} selected={selectedToken} token={token} onClick={() => {setOpenFlag(true);setSelectedToken(token)}} minimized={openFlag}/>
              )
            })
          }
          </div>
          <div className={`w-5/6 absolute h-full top-0 p-4 left-full ${openFlag?"-translate-x-full duration-500":""}`}>
            <TokenDetail mode={mode} token={selectedToken} onClose={()=>setOpenFlag(false)}></TokenDetail>
        </div>
        </div>
    </div>
  );
}
