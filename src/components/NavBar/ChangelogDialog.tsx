import React from "react";

import { ChangelogDialogProps } from "@appTypes/changelog";

import { Box, Stack, Typography } from "@mui/material";
import { Clear } from "@mui/icons-material";

import CustomDialog from "../Common/CustomDialog";
import { useUser } from "../../hooks/useUser";

const ChangeLogDialog: React.FC<ChangelogDialogProps> = ({
  isOpen: isChangelogDialogOpen,
  setIsOpen: setIsChangelogDialogOpen,
}) => {
  const user = useUser();

  return (
    <CustomDialog
      isOpen={isChangelogDialogOpen}
      setIsOpen={setIsChangelogDialogOpen}
      blur={1}
    >
      <Box
        bgcolor="#08080a"
        width="600px"
        maxWidth="600px"
        maxHeight="700px"
        borderRadius="10px"
        border="1px solid #32384d"
        color="#b2b6cd"
        overflow="clip"
      >
        <Box height="1000px" sx={{ overFlowY: "scroll" }}>
          <Box
            sx={{
              backgroundImage: `linear-gradient(to bottom, #1b1b1c, #08080a 20%)`,
            }}
          >
            {/* close button */}
            <Box
              display="flex"
              justifyContent="end"
              pr="20px"
              pt="20px"
              maxHeight="10px"
              zIndex="9999"
            >
              <Box>
                <Clear
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsChangelogDialogOpen(false);
                  }}
                  sx={{
                    color: "#646672",
                    fontSize: "22px",
                    cursor: "pointer",
                    transition: "color ease-in 150ms",
                  }}
                />
              </Box>
            </Box>
            {/* name and static text */}
            <Box pb="25px" borderBottom="1px solid #252526">
              <Stack spacing={1.1}>
                <Box px="40px">
                  <Typography
                    sx={{
                      fontSize: "26px",
                      color: "#f8f9fc",
                      fontWeight: 500,
                    }}
                  >
                    Welcome back, @{user.userName}! 👋
                  </Typography>
                </Box>
                <Box px="40px">
                  <Typography sx={{ fontSize: "17px", color: "#b2b6cd" }}>
                    Here's what we added while you were away.
                  </Typography>
                </Box>
              </Stack>
            </Box>
            {/* linear image */}
            <Box
              maxWidth="100%"
              height="350px"
              sx={{ "& > img": { width: "100%", height: "100%" } }}
            >
              <img src="/images/linear-image.png" alt="" />
            </Box>
            {/* changelogs.map => box[position='relative'] > 
        (box > *contents*)
        (box[positoin='sticky'] > like, comment, emoji) */}
          </Box>
        </Box>
      </Box>
    </CustomDialog>
  );
};

export default ChangeLogDialog;
