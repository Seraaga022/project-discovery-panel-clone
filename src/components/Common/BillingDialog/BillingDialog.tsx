import CustomDialog from "../CustomDialog";
import { Box, Typography } from "@mui/material";
import { Clear } from "@mui/icons-material";
import BillingComponent from "./BillingComponent";
import { BillingDialogProps } from "@appTypes/_index";

const BillingDialog /* : React.FC<BillingDialogProps> */ = ({
  isOpen,
  setIsOpen,
}: BillingDialogProps) => {
  return (
    <CustomDialog isOpen={isOpen} setIsOpen={setIsOpen} blur={70}>
      {/* title and close button */}
      <Box
        mt="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pt="15px"
        pb="25px"
        width="100vw"
        position="relative"
      >
        {/* title */}
        <Box pr="90px" pb="2px">
          <Box display="flex" justifyContent="center">
            <Typography
              variant="subtitle2"
              sx={{ color: "#fff", fontWeight: 600, fontSize: "21px" }}
            >
              Choose Your Plan
            </Typography>
          </Box>
        </Box>
        {/* close button */}
        <Box
          ml="auto"
          position="fixed"
          top="20px"
          right="50px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={(event) => {
            event.stopPropagation();
            setIsOpen(false);
          }}
        >
          <Clear
            sx={{
              color: "#b6b6b7",
              fontSize: "18px",
              "&:hover": {
                color: "#fff",
              },
              cursor: "pointer",
              transition: "color ease-in 150ms",
            }}
          />
        </Box>
      </Box>
      <BillingDialog.Component />
    </CustomDialog>
  );
};

BillingDialog.Component = BillingComponent;
export default BillingDialog;
