import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import type {
  TemplatesTypesT,
  TemplateFeedChartItemT,
} from "@appTypes/types/dashboard";
import templateFeedChartItems from "../../assets/data/templateFeedChartItems";
import getUniqueKey from "../../utils/lib/getUniqueKey";
import { motion } from "framer-motion";

const CustomVulsChart = () => {
  const templateFeedChartItem: TemplateFeedChartItemT = templateFeedChartItems;

  const [activeTemplatesChartDay, setActiveTemplatesChartDay] =
    React.useState<number>(0);

  const [blurEffectBgLeftPosition, setBlurEffectBgLeftPosition] =
    React.useState<number>(0);

  const chartBarRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const [chartTitleData, setChartTitleData] = React.useState({
    day: templateFeedChartItem[0].day,
    templates: {
      critical: templateFeedChartItem[0].templates.critical,
      high: templateFeedChartItem[0].templates.high,
      low: templateFeedChartItem[0].templates.low,
      medium: templateFeedChartItem[0].templates.medium,
      unreleased: templateFeedChartItem[0].templates.unreleased,
    },
    total: calculateTheTemplatesSum(templateFeedChartItem[0].templates),
  });

  const templatesChartDayRef = React.useRef<HTMLElement>(null);

  function calculateTheTemplatesSum(templates: TemplatesTypesT) {
    const RES =
      templates.critical +
      templates.high +
      templates.low +
      templates.medium +
      templates.unreleased;
    return RES;
  }

  return (
    <Box
      mr="auto"
      width="480px"
      maxWidth="480px"
      borderRadius="7px"
      height="160px"
      display="flex"
      flexDirection="column"
      zIndex={999}
      overflow="hidden"
      sx={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0.05))",
        border: "1px solid rgb(27 31 34/1)",
        backdropFilter: "blur(1rem)",
      }}
    >
      {templateFeedChartItem && (
        <>
          {/* monitor states */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            flex={0.67}
            boxSizing="border-box"
            pt="30px"
          >
            <Box>
              {/* day and template qntt */}
              <Box>
                <Box display="flex" position="relative" width="170px">
                  {/* day */}
                  <Box position="absolute" left="0" ref={templatesChartDayRef}>
                    <Typography
                      sx={{ color: "#6e8391", fontSize: "15px" }}
                    >
                      {chartTitleData.day}
                    </Typography>
                  </Box>
                  {/* divider */}
                  <Box
                    bgcolor="hsla(0,0%,93%,.2)"
                    width="1px"
                    maxHeight="60px"
                    height="15px"
                    sx={{
                      rotate: "-90deg",
                    }}
                    boxSizing="border-box"
                    position="relative"
                    left={
                      templatesChartDayRef.current
                        ? templatesChartDayRef.current.offsetWidth + 20
                        : 67
                    }
                    pt="20px"
                  />
                  {/* templates qntts */}
                  <Box position="absolute" right="2px">
                    <Typography
                      sx={{ color: "#6e8391", fontSize: "15px" }}
                    >
                      {chartTitleData.total}&nbsp;templates
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* pills and qntts */}
              <Box position="relative">
                <Box
                  position="absolute"
                  top="17px"
                  right="-10px"
                  width="200px"
                  height="50px"
                >
                  {/* pills and shadow and qntt */}
                  <Box
                    display="flex"
                    width="100%"
                    height="100%"
                    flexDirection="column"
                  >
                    {/* main pills */}
                    <Stack
                      direction="row"
                      spacing={0.1}
                      display="flex"
                      width="100%"
                      height="1%"
                      gap="1px"
                    >
                      <Box
                        component={motion.div}
                        animate={{
                          opacity:
                            chartTitleData.templates.critical > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        width="1px"
                        flex={1}
                        bgcolor="rgb(225 29 72/1)"
                        borderRadius="15px"
                      />
                      <Box
                        component={motion.div}
                        animate={{
                          opacity: chartTitleData.templates.high > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        width="1px"
                        flex={1}
                        bgcolor="rgb(234 88 12/1)"
                        borderRadius="15px"
                      />
                      <Box
                        component={motion.div}
                        animate={{
                          opacity:
                            chartTitleData.templates.medium > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        width="1px"
                        flex={1}
                        bgcolor="rgb(234 179 8/1)"
                        borderRadius="15px"
                      />
                      <Box
                        component={motion.div}
                        animate={{
                          opacity: chartTitleData.templates.low > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        width="1px"
                        flex={1}
                        bgcolor="rgb(99 102 241/1)"
                        borderRadius="15px"
                      />
                      <Box
                        component={motion.div}
                        animate={{
                          opacity:
                            chartTitleData.templates.unreleased > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        width="1px"
                        flex={1}
                        bgcolor="rgb(63 63 70/1)"
                        borderRadius="15px"
                      />
                    </Stack>
                    {/* pills shadow */}
                    <Stack
                      direction="row"
                      spacing={0.1}
                      mt="1.5px"
                      display="flex"
                      width="100%"
                      height="5%"
                    >
                      <Box
                        component={motion.div}
                        animate={{
                          opacity:
                            chartTitleData.templates.critical > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        width="3px"
                        flex={1}
                        bgcolor="rgb(225 29 72/1)"
                        sx={{
                          filter: "blur(8px)",
                        }}
                        borderRadius="15px"
                      />
                      <Box
                        component={motion.div}
                        animate={{
                          opacity: chartTitleData.templates.high > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        width="3px"
                        flex={1}
                        bgcolor="rgb(234 88 12/1)"
                        sx={{
                          filter: "blur(8px)",
                        }}
                        borderRadius="15px"
                      />
                      <Box
                        component={motion.div}
                        animate={{
                          opacity:
                            chartTitleData.templates.medium > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        width="3px"
                        flex={1}
                        bgcolor="rgb(234 179 8/1)"
                        sx={{
                          filter: "blur(8px)",
                        }}
                        borderRadius="15px"
                      />
                      <Box
                        component={motion.div}
                        animate={{
                          opacity: chartTitleData.templates.low > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        width="3px"
                        flex={1}
                        bgcolor="rgb(99 102 241/1)"
                        sx={{
                          filter: "blur(8px)",
                        }}
                        borderRadius="15px"
                      />
                      <Box
                        component={motion.div}
                        animate={{
                          opacity:
                            chartTitleData.templates.unreleased > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        width="3px"
                        flex={1}
                        bgcolor="rgb(63 63 70/1)"
                        sx={{
                          filter: "blur(8px)",
                        }}
                        borderRadius="15px"
                      />
                    </Stack>
                    {/* qntts */}
                    <Stack
                      direction="row"
                      spacing={0.1}
                      mt="1.5px"
                      display="flex"
                      width="100%"
                      height="55%"
                    >
                      <Box
                        component={motion.div}
                        animate={{
                          opacity:
                            chartTitleData.templates.critical > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        flex={1}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          sx={{
                            fontSize: "17px",
                            color: "#737f8f",
                            fontFamily: "consolas",
                          }}
                        >
                          {chartTitleData.templates.critical > 0
                            ? chartTitleData.templates.critical
                            : "-"}
                        </Typography>
                      </Box>
                      <Box
                        component={motion.div}
                        animate={{
                          opacity: chartTitleData.templates.high > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        flex={1}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          sx={{
                            fontSize: "15px",
                            color: "#737f8f",
                            fontFamily: "consolas",
                          }}
                        >
                          {chartTitleData.templates.high > 0
                            ? chartTitleData.templates.high
                            : "-"}
                        </Typography>
                      </Box>
                      <Box
                        component={motion.div}
                        animate={{
                          opacity:
                            chartTitleData.templates.medium > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        flex={1}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          sx={{
                            fontSize: "15px",
                            color: "#737f8f",
                            fontFamily: "consolas",
                          }}
                        >
                          {chartTitleData.templates.medium > 0
                            ? chartTitleData.templates.medium
                            : "-"}
                        </Typography>
                      </Box>
                      <Box
                        component={motion.div}
                        animate={{
                          opacity: chartTitleData.templates.low > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        flex={1}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          sx={{
                            fontSize: "15px",
                            color: "#737f8f",
                            fontFamily: "consolas",
                          }}
                        >
                          {chartTitleData.templates.low > 0
                            ? chartTitleData.templates.low
                            : "-"}
                        </Typography>
                      </Box>
                      <Box
                        component={motion.div}
                        animate={{
                          opacity:
                            chartTitleData.templates.unreleased > 0 ? 1 : 0.1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        flex={1}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          sx={{
                            fontSize: "15px",
                            color: "#737f8f",
                            fontFamily: "consolas",
                          }}
                        >
                          {chartTitleData.templates.unreleased > 0
                            ? chartTitleData.templates.unreleased
                            : "-"}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* bars */}
          <Box flex={1} boxSizing="border-box">
            <Box
              display="flex"
              height="100%"
              width="100%"
              boxSizing="border-box"
              position="relative"
            >
              {/* blur bg effect */}
              <Box
                bgcolor="rgb(20 193 121/1)"
                position="absolute"
                bottom="0"
                left={blurEffectBgLeftPosition}
                width="24px"
                height="24px"
                zIndex={9998}
                sx={{
                  filter: "blur(24px)",
                }}
              />
              {/* bars */}
              {templateFeedChartItem.map((i, index) => {
                const TOTAL_TEMPLATES = calculateTheTemplatesSum(i.templates);
                return (
                  <Box
                    key={getUniqueKey()}
                    component={motion.div}
                    boxSizing="border-box"
                    zIndex={9999}
                    px="2px"
                    height="100%"
                    width="8px"
                    maxWidth="8px"
                    display="flex"
                    alignItems="end"
                    justifyContent="center"
                    animate={{
                      background:
                        activeTemplatesChartDay === index
                          ? "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))"
                          : "none",
                    }}
                    ref={(element: HTMLDivElement | null) =>
                      (chartBarRefs.current[index] = element)
                    }
                    onMouseEnter={() => {
                      if (!chartBarRefs.current[index]) return;
                      if (TOTAL_TEMPLATES > 0) {
                        setActiveTemplatesChartDay(index);
                        setBlurEffectBgLeftPosition(
                          chartBarRefs.current[index]?.offsetLeft || 0
                        );
                        setChartTitleData({
                          day: i.day,
                          templates: i.templates,
                          total: TOTAL_TEMPLATES,
                        });
                      }
                    }}
                  >
                    <Box
                      height={TOTAL_TEMPLATES > 0 ? TOTAL_TEMPLATES + 10 : "4px"}
                      maxHeight={
                        TOTAL_TEMPLATES > 0 ? TOTAL_TEMPLATES + 10 : "4px"
                      }
                      width="100%"
                      bgcolor={
                        activeTemplatesChartDay === index
                          ? "#14C179"
                          : "#2E373D"
                      }
                      sx={{
                        opacity: TOTAL_TEMPLATES > 0 ? 1 : 0.5,
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CustomVulsChart;
