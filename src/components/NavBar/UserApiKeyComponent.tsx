import { Suspense, useState } from "react";
import { Box, Typography } from "@mui/material";
import Circular from "../Loaders/Circular";
import { UserApiKeyT } from "../../hooks/useUserApiKey";
import CustomButton from "../CustomButton/CustomButton";
import { Clear } from "@mui/icons-material";
import CopyToClipboard from "react-copy-to-clipboard";
import { TiTick } from "react-icons/ti";
import { IoCopyOutline } from "react-icons/io5";

const UserApiKeyComponent = ({
  userApiKey,
  setUserApiKeyDialogState,
}: {
  userApiKey: UserApiKeyT;
  setUserApiKeyDialogState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isApiKeyCopied, setIsApiKeyCopied] = useState(false);

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
            <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 500 }}>
              Your API Key
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ color: "#a1a1aa" }}>
              You can find documentation{" "}
              <Box component="span" color="rgb(165 180 252)">
                here
              </Box>
              .
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* api key and copy */}
      <Box px="15px" alignItems="center">
        <Suspense fallback={<Circular />}>
          <Box
            py="6px"
            border="1px solid #27272a"
            borderRadius="7px"
            bgcolor="rgba(199,210,254,.05)"
            color="rgb(129 140 248)"
            boxSizing="border-box"
            display="flex"
            paddingRight="15px"
          >
            <Box
              flex={1}
              paddingInline="20px"
              display="flex"
              alignItems="center"
            >
              <Typography
                variant="default"
                sx={{
                  userSelect: "text",
                  fontSize: ".9rem",
                  fontFamily: "consolas",
                }}
              >
                {userApiKey}
              </Typography>
            </Box>
            <Box
              flex={0.4}
              display="flex"
              justifyContent="end"
              alignItems="center"
            >
              <CopyToClipboard text={userApiKey}>
                <CustomButton
                  sx={{
                    "&:hover": { bgcolor: "#252529" },
                    "&:hover .copy-tick-icon": { color: "#d9d9dd" },
                    borderRadius: "5px",
                    py: "10px",
                    px: "8px",
                  }}
                  onClick={() => {
                    setIsApiKeyCopied(true);
                    setTimeout(() => {
                      setIsApiKeyCopied(false);
                    }, 2000);
                  }}
                >
                  {isApiKeyCopied ? (
                    <TiTick
                      className="copy-tick-icon"
                      size="14px"
                      color="#71717a"
                    />
                  ) : (
                    <IoCopyOutline
                      className="copy-tick-icon"
                      size="14px"
                      color="#71717a"
                    />
                  )}
                </CustomButton>
              </CopyToClipboard>
            </Box>
          </Box>
        </Suspense>
      </Box>
      {/* rotate api key button */}
      <Box height="15%" boxSizing="border-box" px="15px" pt="10px" pb="15px">
        <CustomButton
          fullWidth
          sx={{
            border: "1px solid #27272a",
            "&:hover": { bgcolor: "#27272a" },
            py: "8px",
          }}
        >
          <Typography fontSize="14px" color="#fff" fontWeight={600}>
            Rotate API Key
          </Typography>
        </CustomButton>
      </Box>
    </Box>
  );
};

export default UserApiKeyComponent;
