import { ReactNode } from "react";
import NetworkCombobox from "./ComboBox";
import AssetDetail from "./AssetDetail";

type HeaderProps = {
  mode: boolean;
  children?: ReactNode;
};
export default function Assets({ mode }: HeaderProps) {

  return (
    <div className="mx-auto w-[490px] space-y-10">
      <NetworkCombobox mode={mode}/>
      <AssetDetail mode={mode}/>
    </div>
  );
}
