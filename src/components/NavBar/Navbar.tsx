import { AppBar, Box, Stack, SvgIcon, Typography } from "@mui/material";
import type { UserT } from "@appTypes/types/user";
import NavbarProfile from "./NavbarProfile";
import NavigationButtons from "./NavigationButtonsCompo";
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Circular from "../Common/Loaders/Circular";
import CustomDialog from "../Common/CustomDialog";
import { Clear } from "@mui/icons-material";
import FeedbackRichInput from "./Feedback/FeedbackRichInput";
import { IoIosArrowBack } from "react-icons/io";
import { SiGooglelens } from "react-icons/si";
import { BsFillSendFill } from "react-icons/bs";
import { motion } from "framer-motion";
import FeedbackExplanation from "./Feedback/FeedbackInfo";
const TeamManagement = lazy(() => import("./TeamManagementCompo"));
import "./NavBar/Feedback/feedbackRichInput.css";
import CustomButton from "../Common/CustomButton/CustomButton";

const Navbar = ({ user }: { user: UserT }) => {
  const [changelogDialogState, setChangelogDialogState] =
    React.useState<boolean>(false);
  const [feedbackDialogState, setFeedbackDialogState] =
    React.useState<boolean>(false);
  const [isFeedbackExplanationPage, setIsFeedbackExplanationPage] =
    React.useState<boolean>(false);

  return (
    <Box bgcolor="transparent" mb="68px" width="1300px">
      <AppBar
        sx={{
          backgroundColor: "unset",
          boxShadow: "unset",
          display: "flex",
          flexDirection: "row",
          color: "white",
          padding: "10px",
          gap: "10px",
          minHeight: "65px",
          maxHeight: "65px",
          borderBottom: "1px solid #202022",
          px: "20px",
          backdropFilter: "blur(9px) brightness(25%)",
        }}
      >
        {/* left section */}
        <Box flex={1} display="flex" alignItems="center">
          <Box display="flex" justifyContent="start">
            <Box marginRight="auto" display="flex" p="10px" gap="15px">
              <Link to="">
                <Box
                  display="flex"
                  gap="10px"
                  alignItems="center"
                  height="100%"
                >
                  {/* Logo */}
                  <Box>
                    <SvgIcon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.9688 2.0043C5.42727 1.69307 2.31157 18.3581 12.7067 22.5173M31.9957 21.865C32.3073 5.34145 15.6241 2.22913 11.4604 12.6129M12.1402 31.9957C28.6817 32.3069 31.7974 15.6419 21.4023 11.4827M2.00431 12.0486C1.69274 28.5721 18.3759 31.6845 22.5396 21.3006"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </SvgIcon>
                  </Box>
                  {/* Version */}
                  <Box marginRight="5px">
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#a1a1ab",
                        "&:hover": { color: "#e5e5e5" },
                        fontSize: "12px",
                        transition: "color ease-in 60ms",
                        fontWeight: 400,
                      }}
                    >
                      BETA
                    </Typography>
                  </Box>
                  {/* Divider */}
                  <Box
                    sx={{
                      backgroundColor: "#404040",
                      maxWidth: "1.1px",
                      maxHeight: "70%",
                      minWidth: "1.1px",
                      minHeight: "70%",
                      rotate: "17deg",
                      transition: "all 0.3s ease",
                      color: "transparent",
                    }}
                  ></Box>
                </Box>
              </Link>
              {/* team management */}
              <Suspense fallback={<Circular />}>
                <TeamManagement user={user} />
              </Suspense>
            </Box>
          </Box>
        </Box>
        {/* middle section */}
        <Box flex={1} display="flex" justifyContent="center">
          <NavigationButtons />
        </Box>
        {/* right section */}
        <Box flex={1}>
          <Box
            height="100%"
            display="flex"
            justifyContent="end"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" gap="22px">
              {/* feedback */}
              <Box
                sx={{
                  px: "15px",
                  py: "7px",
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#27272a" },
                  transition: "background ease-in 50ms",
                  border: "1px solid #27272a",
                  borderRadius: "6px",
                }}
                onClick={() => setFeedbackDialogState(true)}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: 0.5,
                  }}
                >
                  Feedback
                </Typography>
              </Box>
              {/* feedback dialog */}
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
                          setIsFeedbackExplanationPage={
                            setIsFeedbackExplanationPage
                          }
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
                              <Typography
                                variant="subtitle2"
                                sx={{ fontSize: "19px", color: "#f8f9fc" }}
                              >
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
                            <Box
                              display="flex"
                              justifyContent="end"
                              alignItems="center"
                            >
                              {/* back */}
                              <Box mr="auto">
                                <CustomButton
                                  onClick={() =>
                                    setIsFeedbackExplanationPage(true)
                                  }
                                  color="info"
                                  sx={{
                                    minWidth: "20px",
                                    minHeight: "0",
                                    bgcolor: "#08080a",
                                    border: "1px solid #252526",
                                    color: "auto",
                                    p: "10px",
                                    "&:hover": {
                                      bgcolor: "#252526",
                                    },
                                  }}
                                >
                                  <IoIosArrowBack color="#6b6d79" size={13} />
                                </CustomButton>
                              </Box>
                              <Box display="flex" gap="10px">
                                {/* screenshot */}
                                <Box>
                                  <CustomButton
                                    color="info"
                                    startIcon={
                                      <SiGooglelens color="#6b6d79" size={13} />
                                    }
                                    sx={{
                                      minWidth: "20px",
                                      maxHeight: "33px",
                                      bgcolor: "#0e0e10",
                                      border: "1px solid #19191c",
                                      color: "auto",
                                      p: "10px",
                                      px: "16px",
                                      "&:hover": {
                                        bgcolor: "#131315",
                                      },
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
                                      <BsFillSendFill
                                        color="#c0c2f9"
                                        size={13}
                                      />
                                    }
                                    sx={{
                                      minWidth: "20px",
                                      maxHeight: "33px",
                                      bgcolor: "#6266f1",
                                      border: "1px solid transparent",
                                      color: "auto",
                                      p: "10px",
                                      px: "14px",
                                      "&:hover": {
                                        border: "1px solid #5455bc",
                                        bgcolor: "#4749ac",
                                      },
                                      "&::active": {
                                        outline: "3px solid #242837",
                                      },
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        color: "#fff",
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
              {/* changelog */}
              <Box onClick={() => setChangelogDialogState(true)}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "13px",
                    color: "#a1a1aa",
                    "&:hover": { color: "#eeeeee" },
                    cursor: "pointer",
                    transition: "color ease-in 90ms",
                    fontWeight: 400,
                    userSelect: "none",
                  }}
                >
                  Changelog
                </Typography>
              </Box>
              {/* changelog dialog */}
              <CustomDialog
                isOpen={changelogDialogState}
                setIsOpen={setChangelogDialogState}
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
                        zIndex="-9999"
                      >
                        <Box>
                          <Clear
                            onClick={(event) => {
                              event.stopPropagation();
                              setChangelogDialogState(false);
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
                              variant="subtitle2"
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
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: "17px", color: "#b2b6cd" }}
                            >
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
              {/* docs */}
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "13px",
                    color: "#a1a1aa",
                    "&:hover": { color: "#eeeeee" },
                    cursor: "pointer",
                    transition: "color ease-in 90ms",
                    fontWeight: 400,
                  }}
                >
                  <Link
                    to="https://docs.projectdiscovery.io/cloud/introduction"
                    target="_blank"
                  >
                    Docs
                  </Link>
                </Typography>
              </Box>
              {/* custom avatar */}
              <Box mr="10px" ml="9px">
                <NavbarProfile user={user} />
              </Box>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
