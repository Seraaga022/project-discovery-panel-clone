import { Box } from "@mui/material";
import CustomButton from "../Common/CustomButton/CustomButton";
import { Cog } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavSettings = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <CustomButton
        color="info"
        variant="outlined"
        sx={{ p: "4px", borderRadius: 99999 }}
        onClick={() => navigate("settings")}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Cog size={21} />
        </Box>
      </CustomButton>
    </Box>
  );
};

export default NavSettings;
