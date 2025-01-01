import { ThemeProvider } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { AppTheme } from "../../theme/AppTheme";
import { InnerThemeProviderProps } from "@appTypes/customThemeProvider";

const InnerThemeProvider: React.FC<InnerThemeProviderProps> = ({
  theme,
  children,
}) => {
  const mergedTheme = deepmerge(AppTheme, theme);
  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
};

export default InnerThemeProvider;
