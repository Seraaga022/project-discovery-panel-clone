import { BoxProps } from "@mui/material";

export type NBC = {
  left: number;
  width: number;
  opacity: number;
};

export type OptionalNBC = Partial<NBC>;

export type TabT = Partial<BoxProps> &
  React.PropsWithChildren & {
    setPosition: React.Dispatch<React.SetStateAction<OptionalNBC>>;
    setActivePosition: React.Dispatch<React.SetStateAction<OptionalNBC>>;
    text: string;
  };
