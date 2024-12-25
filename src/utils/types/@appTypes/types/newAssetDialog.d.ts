import { BoxProps } from "@mui/material";

export type DiscoveryTimeT = {
  hour: string;
  minute: string;
  dayTime: string;
};

export type ActiveFrequencyIntervalT =
  | null
  | "daily"
  | "weekly"
  | "monthly"
  | "custom";

export type DiscoveryDaysT = Array<boolean>;

export interface DialogTabsFooterProps {
  setIsNewAssetDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAssets: React.Dispatch<React.SetStateAction<number[]>>;
  activeTab: number;
}

export type TimeMenuItemsProps = React.PropsWithChildren &
  BoxProps & {
    hour?: boolean;
    minute?: boolean;
    dayTime?: boolean;
    value: string;
  };

export interface DialogTabsHeaderProps {
  dialogOpenSetter: React.Dispatch<React.SetStateAction<boolean>>;
  activeTabSetter: React.Dispatch<React.SetStateAction<number>>;
  activeTab: number;
}
