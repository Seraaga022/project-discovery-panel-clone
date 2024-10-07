import { ThemeProvider, Tooltip, TooltipProps } from "@mui/material";
import CustomTooltip from "../../theme/CustomTooltip";

const HoverCard = ({
  children,
  title,
  ...props
}: React.PropsWithChildren & TooltipProps) => {
  return (
    <ThemeProvider theme={CustomTooltip}>
      <Tooltip title={title} {...props} PopperProps={{ color: "red" }}>
        {children}
      </Tooltip>
    </ThemeProvider>
  );
};

export default HoverCard;
