import { useState } from "react";
import { Box, Typography } from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";
import { IoCopyOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const ApiKey = ({ apiKey }: { apiKey: string }) => {
  const [apiCopied, setApiCopied] = useState(false);

  return (
    <Box
      minHeight="40px"
      border="1px solid #27272a"
      borderRadius="3px"
      bgcolor="#09090b"
      color="#eeeeee"
      boxSizing="border-box"
      display="flex"
      paddingRight="15px"
    >
      <Box flex={1} paddingInline="20px" paddingBlock="15px">
        <Typography variant="subtitle2" sx={{ userSelect: "text" }}>
          {apiKey}
        </Typography>
      </Box>
      <Box flex={0.4} display="flex" justifyContent="end" alignItems="center">
        <CopyToClipboard text={apiKey}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="5px"
            padding="8px"
            paddingBlock="10px"
            sx={{
              "&:hover": { bgcolor: "#252529" },
              "&:hover .copy-tick-icon": { color: "#d9d9dd" },
              cursor: "pointer",
              transition: "all ease-in 100ms",
            }}
            onClick={() => {
              setApiCopied(true);
              setTimeout(() => {
                setApiCopied(false);
              }, 2000);
            }}
          >
            {apiCopied ? (
              <TiTick className="copy-tick-icon" size="14px" color="#71717a" />
            ) : (
              <IoCopyOutline
                className="copy-tick-icon"
                size="14px"
                color="#71717a"
              />
            )}
          </Box>
        </CopyToClipboard>
      </Box>
    </Box>
  );
};

export default ApiKey;
