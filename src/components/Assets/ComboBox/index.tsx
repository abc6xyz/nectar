import { ReactNode, useState } from "react";
import Image from "next/image";
import Item from "./item";

type HeaderProps = {
  mode: boolean;
  children?: ReactNode;
};

const netList = [
  { iconUrl: "", netName: "Select Network" },
  { iconUrl: "/assets/klaytn.svg", netName: "Klaytn" },
  { iconUrl: "/assets/ether.svg", netName: "Etherum" },
  { iconUrl: "/assets/optimism.svg", netName: "Optimism" },
  { iconUrl: "/assets/coinbase.svg", netName: "Base" }
]
export default function NetworkCombobox({ mode }: HeaderProps) {
  const [openFlag, setOpenFlag] = useState(false)
  const [selectedItem, setSelectedItem] = useState(netList[0])

  const ItemClickHandler = (netName: string) => {
    setSelectedItem(netList.filter(net => net.netName === netName)[0])
    setOpenFlag(!openFlag)
  }
  return (
    <div className=" w-[196px] relative z-10">
      <div className={`relative cursor-pointer overflow-hidden border border-[#FF4D04]
      ${openFlag ? "rounded-t-md border-b-0" : "rounded-md"}`}
        onClick={() => setOpenFlag(!openFlag)}>
        <div className="right-0 mx-2 absolute top-1/2 -translate-y-1/2" >
          <Image src={"assets/dropdown.svg"} width={10} height={10} alt="dropdown"></Image>
        </div>
        {selectedItem !== null && <Item mode={mode} iconUrl={selectedItem.iconUrl} netName={selectedItem.netName} onClick={() => { }}></Item>}
      </div>
      {openFlag && <div className="border-[#FF4D04]  border border-bla absolute w-full">
        {
          netList.filter(net => net.netName !== selectedItem.netName && net.netName !== "Select Network").map(net => {
            return (
              <Item mode={mode} iconUrl={net.iconUrl} netName={net.netName} onClick={() => ItemClickHandler(net.netName)}></Item>
            )
          }
          )
        }
      </div>
      }
    </div>
  );
}
