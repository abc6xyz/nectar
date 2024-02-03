import { ReactNode } from "react";
import NetworkCombobox from "./ComboBox";
import AssetDetail from "./AssetDetail";
import { useTheme } from "@/providers/themeProvider";

type HeaderProps = {
  children?: ReactNode;
};

export default function Assets() {
  const { theme } = useTheme()
  
  return (
    <div className="mx-auto w-[490px] space-y-10">
      <NetworkCombobox/>
      <AssetDetail/>
    </div>
  );
}
