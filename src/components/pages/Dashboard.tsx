import { Box, Divider, Skeleton } from "@mui/material";
import { lazy, Suspense } from "react";
import PageContainer from "../Common/PageContainer";
import TemplateScansDetails from "../Dashboard/TemplateScansDetails";
import VulnerabilitiesFeed from "../Dashboard/VulnerabilitiesFeed";
import { useUser } from "../../hooks/useUser";
const DashboardWelcome = lazy(() => import("../Dashboard/WelcomeTexts"));
const DashboardCreateTeam = lazy(
  () => import("../Dashboard/CreateTeamTopSection")
);
const AssetManagement = lazy(() => import("../Dashboard/AssetManagement"));
const ScansManagement = lazy(() => import("../Dashboard/ScansManagement"));

const Dashboard = () => {
  const user = useUser();

  return (
    <Box>
      <PageContainer
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1340px",
          },
        }}
      >
        <Box pt="82px">
          {/* welcome and create team button */}
          <Box
            mb="26px"
            px="5px"
            display="flex"
            alignItems="center"
            justifyContent="end"
          >
            {/* welcome texts */}
            <Suspense
              fallback={
                <Box mr="auto">
                  <Skeleton
                    animation="wave"
                    variant="text"
                    width={100}
                    sx={{
                      fontSize: ".9rem",
                      bgcolor: "#27272a",
                      borderRadius: "8px",
                    }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    width={250}
                    sx={{
                      fontSize: ".9rem",
                      bgcolor: "#27272a",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              }
            >
              <DashboardWelcome userName={user.userName} mr="auto" />
            </Suspense>
            {/* create team button */}
            <Suspense
              fallback={
                <Box alignSelf="end" position="relative" bottom="-2px">
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={145}
                    height={43}
                    sx={{
                      bgcolor: "#28282b",
                      borderRadius: "6px",
                    }}
                  />
                </Box>
              }
            >
              <DashboardCreateTeam
                alignSelf="end"
                position="relative"
                bottom="-3px"
              />
            </Suspense>
          </Box>
          {/* asset and scans manager */}
          <Box>
            <Box display="flex">
              {/* asset management */}
              <Box
                flex={0.63}
                bgcolor="rgb(13 13 15/1)"
                border="2px solid hsla(0,0%,93%,.05)"
                borderRadius="15px"
                mr="23px"
                maxWidth="475px"
                overflow="hidden"
                sx={{
                  boxSizing: "border-box",
                }}
              >
                <Suspense
                  fallback={
                    <Box height="400px">
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width={475}
                        height={400}
                        sx={{
                          bgcolor: "#27272a",
                          borderRadius: "15px",
                        }}
                      />
                    </Box>
                  }
                >
                  <AssetManagement />
                </Suspense>
              </Box>
              {/* scan management */}
              <Box
                flex={1}
                bgcolor="rgb(13 13 15/1)"
                border="2px solid hsla(0,0%,93%,.05)"
                borderRadius="15px"
                sx={{
                  boxSizing: "border-box",
                }}
                overflow="hidden"
              >
                <Suspense
                  fallback={
                    <Box height="400px">
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width={790}
                        height={400}
                        sx={{
                          bgcolor: "#27272a",
                          borderRadius: "15px",
                        }}
                      />
                    </Box>
                  }
                >
                  <ScansManagement />
                </Suspense>
              </Box>
            </Box>
          </Box>
          {/* vulnerabilities section */}
          <Box
            border="1px solid #202022"
            bgcolor="#0d0d0f"
            mt="25px"
            borderRadius="15px"
            position="relative"
            overflow="hidden"
          >
            {/* blur effect */}
            <Box
              position="absolute"
              top="-10px"
              right="0"
              width="100%"
              height="25px"
              sx={{
                bgcolor: "#1d352c",
                filter: "blur(45px)",
              }}
            />
            <TemplateScansDetails />
            <Divider orientation="horizontal" color="#1a1a1c" />
            <VulnerabilitiesFeed />
          </Box>
          {/* quick liks */}
          {/* changelogs swiper */}
        </Box>
      </PageContainer>
    </Box>
  );
};

export default Dashboard;
