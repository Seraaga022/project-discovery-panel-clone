import { BoxProps } from "@mui/material";

export type NBC = {
  left: number;
  width: number;
  opacity: number;
};

export type OptionalNBC = Partial<NBC>;

export type TabT = Partial<BoxProps> &
  React.PropsWithChildren & {
    setActiveTabPosition: React.Dispatch<React.SetStateAction<OptionalNBC>>;
    setCursorPosition: React.Dispatch<React.SetStateAction<OptionalNBC>>;
    text: string;
  };
