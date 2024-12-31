import { Box } from "@mui/material";
import { useUser } from "../../hooks/useUser";
import PageContainer from "../Common/PageContainer";
import ScansFeaturesDialog from "../Scans/ScansFeaturesDialog";

const Scans = () => {
  const user = useUser();

  return (
    <Box>
      {user.plan === "free" ? (
        <ScansFeaturesDialog />
      ) : (
        <Box>
          <PageContainer>
            <Box>Scans</Box>
          </PageContainer>
        </Box>
      )}
    </Box>
  );
};

export default Scans;
