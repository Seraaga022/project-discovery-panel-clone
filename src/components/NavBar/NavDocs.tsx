import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavDocs = () => {
  return (
    <Box>
      <Typography
        aria-details="brighten-on-hover"
        sx={{
          fontSize: "13px",
          color: "#a1a1aa",
          cursor: "pointer",
          fontWeight: 400,
        }}
      >
        <Link
          to="https://docs.projectdiscovery.io/cloud/introduction"
          target="_blank"
        >
          Docs
        </Link>
      </Typography>
    </Box>
  );
};

export default NavDocs;
