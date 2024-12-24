import { lazy, Suspense } from "react";
import { Box, Typography } from "@mui/material";
import Circular from "../atoms/Loaders/Circular";
import { UserApiKeyT } from "../../hooks/useUserApiKey";
import CustomButton from "../atoms/CustomButton/CustomButton";
import { Clear } from "@mui/icons-material";
const UserApiKeyAndCopy = lazy(() => import("./UserApiKeyAndCopy"));

const UserApiKeyComponent = ({
  userApiKey,
  setUserApiKeyDialogState,
}: {
  userApiKey: UserApiKeyT;
  setUserApiKeyDialogState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box
      minHeight="400px"
      minWidth="490px"
      maxHeight="500"
      maxWidth="490px"
      borderRadius="20px"
      border="1px solid #27272a"
      display="flex"
      flexDirection="column"
      color="white"
      sx={{ userSelect: "none", backdropFilter: "blur(10px)" }}
      position="relative"
      bgcolor="transparent"
    >
      {/* close button */}
      <Box position="absolute" right="0" top="0" p="20px">
        <Clear
          onClick={(event) => {
            event.stopPropagation();
            setUserApiKeyDialogState(false);
          }}
          sx={{
            color: "#b6b6b7",
            fontSize: "15px",
            "&:hover": {
              color: "#fff",
            },
            cursor: "pointer",
            transition: "color ease-in 150ms",
          }}
        />
      </Box>
      {/* image */}
      <Box>
        <Box
          component="img"
          sx={{ width: "100%", height: "380px", userSelect: "none" }}
          src="/images/api-key.png"
          alt="api-key"
        />
      </Box>
      {/* dialog title */}
      <Box
        height="15%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        top="-60px"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box>
            <Typography variant="h6" sx={{ color: "#ffffff" }}>
              Your API Key
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ color: "#a1a1aa" }}>
              Rotate or copy your API key
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* api key and copy */}
      <Box px="15px" alignItems="center">
        <Suspense fallback={<Circular />}>
          <UserApiKeyAndCopy apiKey={userApiKey} />
        </Suspense>
      </Box>
      {/* rotate api key button */}
      <Box height="15%" boxSizing="border-box" padding="15px">
        <CustomButton
          fullWidth
          sx={{
            bgcolor: "#eeeeee",
            "&:hover": { bgcolor: "#d7d7d7" },
            color: "#18181b",
            py: "10px",
          }}
        >
          <Typography fontSize="14px" fontWeight={500}>
            Rotate API Key
          </Typography>
        </CustomButton>
      </Box>
    </Box>
  );
};

export default UserApiKeyComponent;
