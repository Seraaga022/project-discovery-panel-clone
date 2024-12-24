import { BoxProps } from "@mui/material";

export type TplanCardT = {
  enterprice?: boolean;
  pro?: boolean;
  current?: boolean;
  level: string;
  description: string;
  a11ies: string[];
  includes: string[];
  buttonText: string;
} & BoxProps;

export type PlanTableRowT = React.PropsWithChildren &
  BoxProps & {
    firstRow?: boolean;
  };

export type PlanTableColT = React.PropsWithChildren &
  BoxProps & {
    index: 0 | 1 | 2 | 3;
    first?: boolean;
  };
