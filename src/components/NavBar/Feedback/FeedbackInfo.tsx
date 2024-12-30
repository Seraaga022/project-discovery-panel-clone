import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const FeedbackExplanation = ({
  setIsFeedbackExplanationPage: setter,
}: {
  setIsFeedbackExplanationPage: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box>
      <Box>
        {/* static texts */}
        <Box>
          <Box>
            <Typography
              sx={{ fontSize: "19px", color: "#f8f9fc", fontWeight: 500 }}
            >
              Give us feedback
            </Typography>
          </Box>
          <Box mt="5px">
            <Typography sx={{ fontSize: "14px", color: "#adb1c7" }}>
              Tell us how we could make the product more
              <Box component={"br"}></Box> useful for you.
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          component={motion.div}
          animate={{ height: "fit-content", opacity: 1 }}
          transition={{
            delayChildren: 0.5,
          }}
          initial={{
            opacity: 0,
          }}
        >
          <Box
            border="1px solid #1b1b1c"
            bgcolor="#0e0e10"
            sx={{
              borderRadius: "7px",
              "&:hover": {
                border: "1px solid #19191c",
                bgcolor: "#131315",
              },
              cursor: "pointer",
            }}
            display="flex"
            alignItems="center"
            p="12px"
            onClick={() => setter(false)}
          >
            {/* static text */}
            <Box
              flex={1}
              component={motion.div}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Feedback
              </Typography>
            </Box>
            {/* divider */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                bgcolor: "#1f1f21",
                mx: "15px",
              }}
            />
            {/* go to feedback */}
            <Box flex={0.05}>
              <Box>
                <Typography sx={{ color: "#737583", fontFamily: "consolas" }}>
                  1
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* powered by .. */}
          {/* <Box
            minHeight="30px"
            mt="10px"
            display="flex"
            alignItems="end"
            justifyContent="center"
          ></Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default FeedbackExplanation;
