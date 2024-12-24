import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PulsingAnimation = () => {
  const PulsingAnimation = styled(Box)({
    width: "12px",
    height: "12px",
    backgroundColor: "#e9d5ff",
    opacity: 0.6,
    borderRadius: "9999px",
    animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    "@keyframes ping": {
      "75% , 100%": {
        transform: "scale(2)",
        opacity: 0,
      },
    },
  });

  return <PulsingAnimation />;
};
