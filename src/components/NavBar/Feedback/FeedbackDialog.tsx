import React from "react";

import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { Clear } from "@mui/icons-material";
import { IoIosArrowBack } from "react-icons/io";
import { SiGooglelens } from "react-icons/si";
import { BsFillSendFill } from "react-icons/bs";

import { FeedbackDialogProps } from "@appTypes/feedback";

import CustomDialog from "../../Common/CustomDialog";
import FeedbackExplanation from "./FeedbackInfo";
import FeedbackRichInput from "./FeedbackRichInput";
import CustomButton from "../../Common/CustomButton/CustomButton";

const FeedbackDialog: React.FC<FeedbackDialogProps> = ({
  isOpen: feedbackDialogState,
  setIsOpen: setFeedbackDialogState,
}) => {
  const [isFeedbackExplanationPage, setIsFeedbackExplanationPage] =
    React.useState<boolean>(false);

  return (
    <CustomDialog
      isOpen={feedbackDialogState}
      setIsOpen={setFeedbackDialogState}
    >
      <Box
        component={motion.div}
        layoutId="feedback-container"
        width="450px"
        display="flex"
        justifyContent="center"
        alignItems="start"
        color="white"
        overflow="scroll"
        animate={{ height: "80svh" }}
        sx={{
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          transition: "height ease 1000ms",
        }}
      >
        <Box
          component={motion.div}
          transition={{
            delayChildren: 0.5,
          }}
          animate={{ height: "fit-content" }}
          width="100%"
          display="flex"
          flexDirection="column"
          border="1px solid #252526"
          borderRadius="12px"
          position="relative"
          p="26px"
          bgcolor="#08080a"
          sx={{
            transition: "height ease-in 1000ms",
          }}
        >
          {/* close button */}
          <Box
            display="flex"
            justifyContent="end"
            maxHeight="10px"
            position="absolute"
            right="16px"
            top="20px"
          >
            <Box>
              <Clear
                onClick={(event) => {
                  event.stopPropagation();
                  setFeedbackDialogState(false);
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
          {/* feedback page */}
          <Box
            mt="10px"
            component={motion.div}
            animate={{ height: "fit-content" }}
          >
            {isFeedbackExplanationPage ? (
              <FeedbackExplanation
                setIsFeedbackExplanationPage={setIsFeedbackExplanationPage}
              />
            ) : (
              <Box
                component={motion.div}
                animate={{ height: "fit-content" }}
                transition={{
                  delayChildren: 1.5,
                }}
              >
                {/* form title */}
                <Box
                  component={motion.div}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "19px", color: "#f8f9fc" }}>
                      Feedback
                    </Typography>
                  </Box>
                </Box>
                {/* title input */}
                <Box
                  pr="20px"
                  mt="20px"
                  component={motion.div}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  sx={{
                    "& > input": {
                      width: "100%",
                      maxHeight: "35px",
                      height: "35px",
                      backgroundColor: "#0e0e10",
                      border: "1px solid #19191b",
                      borderRadius: "7px",
                      paddingInline: "12px",
                    },
                  }}
                >
                  <input
                    className="feedback-input"
                    type="text"
                    title="title input"
                    placeholder="Add a title"
                  />
                </Box>
                {/* feedback input page */}
                <FeedbackRichInput />
                {/* navigation buttons */}
                <Box
                  mt="30px"
                  component={motion.div}
                  transition={{
                    delay: 0.1,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <Box display="flex" justifyContent="end" alignItems="center">
                    {/* back */}
                    <Box mr="auto">
                      <CustomButton
                        onClick={() => setIsFeedbackExplanationPage(true)}
                        color="info"
                        variant="outlined"
                        sx={{
                          p: "10px",
                          bgcolor: "transparent",
                        }}
                      >
                        <IoIosArrowBack size={13} />
                      </CustomButton>
                    </Box>
                    {/* screenshot and send */}
                    <Box display="flex" gap="10px">
                      {/* screenshot */}
                      <Box>
                        <CustomButton
                          color="info"
                          variant="outlined"
                          startIcon={<SiGooglelens color="#6b6d79" size={13} />}
                          sx={{
                            maxHeight: "33px",
                            p: "10px",
                            px: "16px",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#b2b6cd",
                              fontWeight: 500,
                              fontSize: "13px",
                            }}
                          >
                            Take a screenshot
                          </Typography>
                        </CustomButton>
                      </Box>
                      {/* send */}
                      <Box>
                        <CustomButton
                          startIcon={
                            <BsFillSendFill color="#c0c2f9" size={13} />
                          }
                          sx={{
                            maxHeight: "33px",
                            bgcolor: "#6266f1",
                            border: "1px solid transparent",
                            p: "10px",
                            px: "14px",
                            "&:hover": {
                              border: "1px solid #5455bc",
                              bgcolor: "#4749ac",
                            },
                            "&:active": {
                              outline: "3px solid #242837",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#eeeeee",
                              fontWeight: 500,
                              fontSize: "13px",
                            }}
                          >
                            Submit
                          </Typography>
                        </CustomButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </CustomDialog>
  );
};

export default FeedbackDialog;
