import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavLogo = () => {
  return (
    <Link to="">
      <Box display="flex" gap="10px" alignItems="center" height="100%">
        {/* Logo */}
        <Logo />
        {/* Version */}
        <Box marginRight="5px">
          <Typography
            aria-details="brighten-on-hover"
            sx={{
              color: "#a1a1ab",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            BETA
          </Typography>
        </Box>
        {/* Divider */}
        <Box
          sx={{
            backgroundColor: "#404040",
            maxWidth: "1.1px",
            maxHeight: "70%",
            minWidth: "1.1px",
            minHeight: "70%",
            rotate: "17deg",
            transition: "all 0.3s ease",
            color: "transparent",
          }}
        />
      </Box>
    </Link>
  );
};

export default NavLogo;
