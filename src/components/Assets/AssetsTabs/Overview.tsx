import { Box, Button, Container, Typography } from "@mui/material";
import { RiCloudLine } from "react-icons/ri";
import { RxPlus } from "react-icons/rx";
import CustomDialog from "../../CustomDialog";
import useDialog from "../../../hooks/ui/useDialog";

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
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#fff", fontSize: "17px" }}
                    >
                      Your Assets
                    </Typography>
                  </Box>
                  {/* description */}
                  <Box mt="7px">
                    <Typography
                      variant="subtitle2"
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
                  {/* create button */}
                  <Box>
                    <Button
                      sx={{
                        width: "100%",
                        bgcolor: "#eeeeee",
                        "&:hover": { bgcolor: "#d6d6d6" },
                        textTransform: "none",
                        color: "#18181b",
                        px: "17px",
                        py: "7px",
                        borderRadius: "6px",
                      }}
                      onClick={() => setIsNewAssetDialogOpen(true)}
                    >
                      <Box display="flex" gap="8px">
                        <Box>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "13px",
                              fontWeight: 600,
                              letterSpacing: 0.5,
                            }}
                          >
                            Add New Assets
                          </Typography>
                        </Box>
                        <Box>
                          <Box display="flex" alignItems="center" height="100%">
                            <RxPlus size={18} />
                          </Box>
                        </Box>
                      </Box>
                    </Button>
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
                    <Button
                      color="warning"
                      sx={{
                        width: "100%",
                        bgcolor: "#38270b",
                        "&:hover": { bgcolor: "#442f0b" },
                        textTransform: "none",
                        color: "#18181b",
                        px: "17px",
                        py: "8px",
                        borderRadius: "6px",
                      }}
                    >
                      <Box display="flex" alignItems="center" gap="8px">
                        <Box>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "13px",
                              fontWeight: 600,
                              letterSpacing: 0.7,
                              color: "#f59e0b",
                            }}
                          >
                            Connect Cloud Services
                          </Typography>
                        </Box>
                        <Box>
                          <Box display="flex" alignItems="center" height="100%">
                            <RiCloudLine size={15} color="#f59e0b" />
                          </Box>
                        </Box>
                      </Box>
                    </Button>
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
