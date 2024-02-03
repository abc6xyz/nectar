import { useState } from "react";
import Image from "next/image";
import Item from "./item";
import { networks } from "@/const";

export default function NetworkCombobox() {
  const [openFlag, setOpenFlag] = useState(false)
  const [selectedItem, setSelectedItem] = useState(networks[0])

  const ItemClickHandler = async (netName: string) => {
    setSelectedItem(networks.filter(net => net.name === netName)[0])
    setOpenFlag(!openFlag)
  }

  return (
    <div className=" w-[196px] relative z-10">
      <div className={`relative cursor-pointer overflow-hidden border border-[#FF4D04] h-8
      ${openFlag ? "rounded-t-md border-b-0" : "rounded-md"}`}
        onClick={() => setOpenFlag(!openFlag)}>
        <div className="right-0 mx-2 absolute top-1/2 -translate-y-1/2" >
          <Image src={"assets/dropdown.svg"} width={10} height={10} alt="dropdown"></Image>
        </div>
        {selectedItem !== null && <Item iconUrl={selectedItem.iconUrl} netName={selectedItem.name} onClick={() => { }}></Item>}
      </div>
      {openFlag && <div className="border-[#FF4D04]  border border-bla absolute w-full">
        {
          networks.filter(net => net.name !== selectedItem.name && net.name !== "Select Network").map(net => {
            return (
              <Item iconUrl={net.iconUrl} netName={net.name} onClick={() => ItemClickHandler(net.name)}></Item>
            )
          }
          )
        }
      </div>
      }
    </div>
  );
}
