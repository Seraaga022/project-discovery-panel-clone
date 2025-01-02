import { Box, Container, Typography } from "@mui/material";
import { RiCloudLine } from "react-icons/ri";
import { RxPlus } from "react-icons/rx";
import CustomDialog from "../../Common/CustomDialog";
import useDialog from "../../../hooks/ui/useDialog";
import CustomButton from "../../Common/CustomButton/CustomButton";

const Overview = () => {
  const {
    isDialogOpen: isNewAssetDialogOpen,
    setIsDialogOpen: setIsNewAssetDialogOpen,
  } = useDialog();

  return (
    <Box pt="62px">
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1380px",
          },
        }}
      >
        <Box>
          {/* top */}
          <Box>
            <Box display="flex" justifyContent="end">
              {/* left */}
              <Box mr="auto">
                <Box>
                  {/* heading */}
                  <Box>
                    <Typography sx={{ color: "#fff", fontSize: "17px" }}>
                      Your Assets
                    </Typography>
                  </Box>
                  {/* description */}
                  <Box mt="7px">
                    <Typography
                      sx={{
                        color: "#a1a1aa",
                        fontSize: "13px",
                        letterSpacing: 0.38,
                      }}
                    >
                      Add Assets for scanning. Select an Asset Group to view all
                      Assets in that group, or check out Inventory for a full
                      Asset list.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* right */}
              <Box
                display="flex"
                alignItems="end"
                boxSizing="border-box"
                pb="8px"
              >
                <Box display="flex" alignItems="center" gap="16px">
                  {/* start discovery button */}
                  <Box>
                    <CustomButton
                      fullWidth
                      endIcon={<RxPlus size={20} />}
                      color="white"
                      sx={{
                        px: "18px",
                        py: "8px",
                      }}
                      onClick={() => setIsNewAssetDialogOpen(true)}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          letterSpacing: 0.5,
                        }}
                      >
                        Start Discovery
                      </Typography>
                    </CustomButton>
                  </Box>
                  {/* create dialog */}
                  <CustomDialog
                    isOpen={isNewAssetDialogOpen}
                    setIsOpen={setIsNewAssetDialogOpen}
                  >
                    s
                  </CustomDialog>
                  {/* cloud button */}
                  <Box>
                    <CustomButton
                      color="warning"
                      endIcon={<RiCloudLine size={15} color="#f59e0b" />}
                      sx={{
                        px: "16px",
                        py: "9px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          letterSpacing: 0.7,
                          color: "#f59e0b",
                        }}
                      >
                        Connect Cloud Services
                      </Typography>
                    </CustomButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* management */}
          <Box>
            <Box display="flex">
              {/* search */}
              <Box flex={1}></Box>
              {/* refresh, delete, add table cols,  */}
              <Box flex={0.4}></Box>
            </Box>
          </Box>
          {/* table */}
          <Box></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Overview;
