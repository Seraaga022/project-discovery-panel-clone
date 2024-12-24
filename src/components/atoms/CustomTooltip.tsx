import { Tooltip, TooltipProps } from "@mui/material";

const CustomTooltip: React.FC<TooltipProps> = ({
  children,
  title,
  ...props
}) => {
  return (
    <Tooltip title={title} {...props} PopperProps={{ color: "red" }}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
