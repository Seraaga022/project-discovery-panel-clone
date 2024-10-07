import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdCheckmark,
} from "react-icons/io";
import { LuCheckCheck } from "react-icons/lu";
import {
  PlanTableColT,
  PlanTableRowT,
  TplanCard,
} from "../utils/types/BillingComponent";
import CustomChip from "./ui/CustomChip";
import HoverCard from "./ui/HoverCard";
import { RiStackLine } from "react-icons/ri";
import { BsBodyText } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";

const PlanCard = ({
  pro,
  current,
  level,
  description,
  a11ies,
  buttonText,
  includes,
  ...props
}: TplanCard) => {
  const [price, setPrice] = React.useState<number>(208);
  const [active, setActive] = React.useState<number>(0);

  React.useEffect(() => {
    if (active === 0) setPrice(208);
    if (active === 1) setPrice(250);
  }, [active]);

  return (
    <Box
      minWidth="370px"
      maxWidth="370px"
      {...props}
      borderRadius="12px"
      border="1px solid #202022"
      bgcolor="#09090b"
      position="relative"
      overflow="hidden"
    >
      {/* gold blur pro effect */}
      <Box
        display={pro ? "block" : "none"}
        width="200px"
        height="200px"
        sx={{
          filter: "blur(80px)",
          bgcolor: "#f59e0b",
          borderRadius: "9999px",
          top: "-100px",
          left: "-70px",
          position: "absolute",
          opacity: 0.2,
        }}
      />
      {/* pro year and month selector */}
      <Box
        display={pro ? "block" : "none"}
        sx={{
          borderBlockEnd: "1px solid #2b2a2b",
          borderInlineStart: "1px solid #2b2a2b",
          borderBottomLeftRadius: "12px",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      >
        <Box display="flex" p="10px" gap="10px">
          {/* month */}
          <Box
            bgcolor={active === 1 ? "#27272a" : ""}
            color={active === 1 ? "#eeeeed" : ""}
            onClick={() => setActive(1)}
            px="10px"
            py="3px"
            borderRadius="8px"
            sx={{
              cursor: "pointer",
              transition: "all ease-in 100ms",
              "&:hover .monthly-text": { color: "#e4e3e3" },
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                className="monthly-text"
                sx={{ fontSize: "12px", color: "#979699" }}
              >
                Monthly
              </Typography>
            </Box>
          </Box>
          {/* year */}
          <Box
            display="flex"
            bgcolor={active === 0 ? "#27272a" : ""}
            color={active === 0 ? "#eeeeed" : ""}
            onClick={() => setActive(0)}
            px="10px"
            py="3px"
            borderRadius="8px"
            justifyContent="center"
            alignItems="center"
            gap="3px"
            sx={{
              cursor: "pointer",
              transition: "all ease-in 100ms",
              "&:hover .yearly-text": { color: "#e4e3e3" },
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                className="yearly-text"
                sx={{ fontSize: "12px", color: "#979699" }}
              >
                Yearly
              </Typography>
            </Box>
            <HoverCard
              title={
                <Box>
                  <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                    Buy yearly and save 16.67%
                  </Typography>
                </Box>
              }
            >
              <Box>
                <CustomChip
                  bgcolor="#4c3b20"
                  color="#f59e0b"
                  border="1px solid #6e4f1c"
                  sx={{
                    "&:hover": {
                      bgcolor: "#4d3b1c",
                      color: "#d88c0b",
                      borderColor: "#684a19",
                      fontFamily: "console",
                    },
                    borderRadius: "9999px",
                    px: "3px",
                    height: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textTransform: "none",
                      fontFamily: "consolas",
                      fontSize: "12px",
                    }}
                  >
                    16.67% off
                  </Typography>
                </CustomChip>
              </Box>
            </HoverCard>
          </Box>
        </Box>
      </Box>
      {/* level & description & button */}
      <Box
        sx={{
          p: "40px",
          background: pro
            ? "linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))"
            : "",
        }}
      >
        {/* level & description */}
        <Stack spacing={5}>
          <Box>
            <Stack spacing={1.6}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    "&:first-letter": {
                      textTransform: "capitalize",
                    },
                    fontSize: "25px",
                    color: pro ? "#eab308" : "#eeeeee",
                    fontWeight: 700,
                  }}
                >
                  {level}
                </Typography>
              </Box>
              <Box maxWidth={pro ? "200px" : "unset"}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#929292", fontWeight: 400 }}
                >
                  {description}
                </Typography>
              </Box>
            </Stack>
          </Box>
          {/* a11ies */}
          <Box>
            <Stack spacing={1}>
              <Box>
                <Typography
                  sx={{ color: "#eeeeee", fontWeight: 600, fontSize: "14px" }}
                >
                  Use cases
                </Typography>
              </Box>
              <Box>
                <Stack spacing={1} pl="4px">
                  {a11ies.map((a) => (
                    <Box display="flex" alignItems="center" gap="5px">
                      <Box display="flex" alignItems="center">
                        <IoIosArrowForward color="#eeeeee" />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "#929292", fontWeight: 400 }}
                        >
                          {a}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
        {/* button */}
        <Box mt="30px">
          <Box>
            <Button
              fullWidth
              disabled={current}
              sx={{
                "&.Mui-disabled": {
                  color: "#4e4e4f",
                  border: "1px solid #18181b",
                },
                bgcolor: pro ? "#eab308" : "",
                border: pro ? "none" : "1px solid #27272a",
                textTransform: "none",
                color: pro ? "#09090b" : "#929292",
                "&:hover": {
                  bgcolor: pro ? "#" : "#27272a",
                  color: pro ? "" : "#fafafa",
                },
                borderRadius: "5px",
              }}
            >
              <Typography variant="subtitle2">
                {pro ? `Get Pro for $${price} / month` : buttonText}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      {/* divider */}
      <Divider
        flexItem
        sx={{ "&.MuiDivider-root": { bgcolor: "#202022" }, my: "3px" }}
      />
      {/* includes */}
      <Box p="40px">
        <Box>
          <Stack spacing={1.4}>
            <Box>
              <Typography
                sx={{ color: "#eeeeee", fontWeight: 600, fontSize: "14px" }}
              >
                Includess
              </Typography>
            </Box>
            <Box>
              <Stack spacing={0.7} pl="4px">
                {includes.map((a) => (
                  <Box display="flex" alignItems="center" gap="8px">
                    <Box display="flex" alignItems="center">
                      <LuCheckCheck color="#eeeeee" />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#929292", fontWeight: 400 }}
                      >
                        {a}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const TableDefaulStyles = {
  col: {
    aspectCol: {
      minWidth: "420px",
      maxWidth: "420px",
      px: "20px",
      py: "24px",
      minHeight: "35px",
      maxHeight: "35px",
    },
    freeCol: {
      minWidth: "180px",
      maxWidth: "180px",
      px: "20px",
      py: "24px",
      minHeight: "35px",
      maxHeight: "35px",
    },
  },
  aspectIcon: {
    size: 15,
    color: "#c2c2c2",
  },
  aspectText: {
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "none",
  },
  headCol: {
    color: "#c2c2c2",
    bgcolor: "#151516",
    border: "none",
    width: "fit-content",
    borderRadius: "999px",
    proColor: "#f59e0b",
    proBgColor: "#251c0e",
    wrapper: {
      gap: "5px",
      px: "10px",
      py: "0",
    },
  },
};

const PlanTableCol = (props: PlanTableColT) => {
  const proCol = {
    ...TableDefaulStyles.col.freeCol,
    bgcolor: "#0f0f11",
  };
  const enterpriseCol = {
    ...TableDefaulStyles.col.freeCol,
  };
  switch (props.index) {
    case 0:
      return (
        <Box {...TableDefaulStyles.col.aspectCol} {...props}>
          {props.children}
        </Box>
      );
    case 1:
      return (
        <Box {...TableDefaulStyles.col.freeCol} {...props} display="flex">
          {props.children}
        </Box>
      );
    case 2:
      return (
        <Box {...proCol} {...props} display="flex" alignItems="end">
          {props.children}
        </Box>
      );
    case 3:
      return (
        <Box {...enterpriseCol} {...props}>
          {props.children}
        </Box>
      );
  }
};

const PlanTableRow = (props: PlanTableRowT) => {
  return (
    <Box
      display="flex"
      alignItems={props.firstRow ? "end" : "center"}
      borderBottom={props.firstRow ? "none" : "1px solid #202022"}
      height="fit-content"
      {...props}
    >
      {props.children}
    </Box>
  );
};

const PlanTables = () => {
  const items = [
    {
      head: {
        aspectIcon: <RiStackLine {...TableDefaulStyles.aspectIcon} />,
        aspectText: "Nuclei Templates",
      },
      body: [
        {
          subject: "Real-time templates feed",
          freeOption: true,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Powerful AI Template Editor",
          freeOption: "10 queries per day",
          proOption: "100 queries per day",
          enterpriseOption: "Unlimited",
        },
        {
          subject: "Connect GitHub VCM",
          freeOption: true,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Real-time automated scans",
          freeOption: false,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Early access to new templates",
          freeOption: false,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Headless templates",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "Custom templates support",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "Live support for custom Nuclei templates",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
      ],
    },
    {
      head: {
        aspectIcon: <BsBodyText {...TableDefaulStyles.aspectIcon} />,
        aspectText: "Reconnaissance and Asset Management",
      },
      body: [
        {
          subject: "Integrate cloud services",
          freeOption: true,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Discovery frequency",
          freeOption: "Weekly",
          proOption: "Daily",
          enterpriseOption: "Continuous",
        },
        {
          subject: "Subdomain enumeration",
          freeOption: true,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Port enumeration",
          freeOption: "Top 10 ports",
          proOption: "Top 1k ports",
          enterpriseOption: "Full or custom ranges",
        },
        {
          subject: "Technology detection",
          freeOption: true,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Email, Messaging Alerts",
          freeOption: true,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Export discovered assets",
          freeOption: false,
          proOption: "JSON, CSV, Raw",
          enterpriseOption: "JSON, CSV, Raw",
        },
        {
          subject: "Asset tagging and labeling",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "Owner assignment automation",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "Automated workflows",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "Custom reconnaissance",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
      ],
    },
    {
      head: {
        aspectIcon: <FiPieChart {...TableDefaulStyles.aspectIcon} />,
        aspectText: "Vulnerability Exposure Management",
      },
      body: [
        {
          subject: "Connect Nuclei to Cloud",
          freeOption: true,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "CI/CD scans",
          freeOption: true,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Internal network scans",
          freeOption: true,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Email, Messaging Alerts",
          freeOption: true,
          proOption: true,
          enterpriseOption: true,
        },
        {
          subject: "Ultra fast cloud scans (50x faster than Nuclei)",
          freeOption: false,
          proOption: "Up to 1k unique assets",
          enterpriseOption: "Custom limits",
        },
        {
          subject: "Scan logs",
          freeOption: false,
          proOption: "Read-only",
          enterpriseOption: "Read and export CSV",
        },
        {
          subject: "Reporting",
          freeOption: false,
          proOption: "Basic PDF, JSON, CSV",
          enterpriseOption: "Executive and compliance reports (SOC 2, PCI)",
        },
        {
          subject: "Automated vulnerability retesting and regressions",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "DAST, fuzzing and headless templates",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "Export findings to ticketing platforms",
          freeOption: false,
          proOption: "Jira, GitLab, GitHub, Linear (coming soon)",
          enterpriseOption: "Jira, GitLab, GitHub, Linear, ServiceNow",
        },
        {
          subject: "Prioritization",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "Auto-triage",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
      ],
    },
    {
      head: {
        aspectIcon: <AiOutlineTeam {...TableDefaulStyles.aspectIcon} />,
        aspectText: "Admin and Team",
      },
      body: [
        {
          subject: "Team workspaces",
          freeOption: false,
          proOption: "1 (additional $200 / mo)",
          enterpriseOption: "Unlimited",
        },
        {
          subject: "Role-based access control (admin, member, viewer)",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "Audit logs",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "Fixed scan IPs for whitelisting",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "Custom scan rate limits",
          freeOption: false,
          proOption: false,
          enterpriseOption: true,
        },
        {
          subject: "SAML SSO (Okta, Entra, Google)",
          freeOption: false,
          proOption: "$4k billed annually",
          enterpriseOption: "Included",
        },
        {
          subject: "Support",
          freeOption: "Community support",
          proOption: "Community support",
          enterpriseOption: "Advanced support",
        },
      ],
    },
  ];

  return (
    <Box id="all-plans" pb="20px">
      {items.map((item, index) => (
        <Box>
          {/* table head */}
          <PlanTableRow firstRow>
            <PlanTableCol index={0} pt="150px" pb="40px">
              <CustomChip
                sx={{
                  bgcolor: TableDefaulStyles.headCol.bgcolor,
                  color: TableDefaulStyles.headCol.color,
                  border: TableDefaulStyles.headCol.border,
                  width: TableDefaulStyles.headCol.width,
                  borderRadius: TableDefaulStyles.headCol.borderRadius,
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  {...TableDefaulStyles.headCol.wrapper}
                >
                  <Box display="flex" alignItems="center">
                    {item.head.aspectIcon}
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="subtitle2"
                      sx={TableDefaulStyles.aspectText}
                    >
                      {item.head.aspectText}
                    </Typography>
                  </Box>
                </Box>
              </CustomChip>
            </PlanTableCol>
            <PlanTableCol index={1} pt="150px" pb="40px">
              <CustomChip
                sx={{
                  bgcolor: TableDefaulStyles.headCol.bgcolor,
                  color: TableDefaulStyles.headCol.color,
                  border: TableDefaulStyles.headCol.border,
                  width: TableDefaulStyles.headCol.width,
                  borderRadius: TableDefaulStyles.headCol.borderRadius,
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  {...TableDefaulStyles.headCol.wrapper}
                >
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="subtitle2"
                      sx={TableDefaulStyles.aspectText}
                    >
                      Free
                    </Typography>
                  </Box>
                </Box>
              </CustomChip>
            </PlanTableCol>
            {/* pro col */}
            <PlanTableCol
              index={2}
              pt="150px"
              pb="40px"
              sx={{
                backgroundImage:
                  index === 0
                    ? `linear-gradient(to bottom, #09090b 25%, 
                  #0f0f11 95%, 
                  #0f0f11 100%)`
                    : "",
              }}
            >
              <CustomChip
                sx={{
                  bgcolor: TableDefaulStyles.headCol.proBgColor,
                  color: TableDefaulStyles.headCol.proColor,
                  border: TableDefaulStyles.headCol.border,
                  width: TableDefaulStyles.headCol.width,
                  borderRadius: TableDefaulStyles.headCol.borderRadius,
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  {...TableDefaulStyles.headCol.wrapper}
                >
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="subtitle2"
                      sx={TableDefaulStyles.aspectText}
                    >
                      Pro
                    </Typography>
                  </Box>
                </Box>
              </CustomChip>
            </PlanTableCol>
            <PlanTableCol index={3} pt="150px" pb="40px">
              <CustomChip
                sx={{
                  bgcolor: TableDefaulStyles.headCol.bgcolor,
                  color: TableDefaulStyles.headCol.color,
                  border: TableDefaulStyles.headCol.border,
                  width: TableDefaulStyles.headCol.width,
                  borderRadius: TableDefaulStyles.headCol.borderRadius,
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  {...TableDefaulStyles.headCol.wrapper}
                >
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="subtitle2"
                      sx={TableDefaulStyles.aspectText}
                    >
                      Enterprise
                    </Typography>
                  </Box>
                </Box>
              </CustomChip>
            </PlanTableCol>
          </PlanTableRow>
          {/* table body */}
          <Box>
            {item.body.map((i) => (
              <PlanTableRow>
                <PlanTableCol index={0}>
                  <Box
                    minHeight={TableDefaulStyles.col.aspectCol.minHeight}
                    display="flex"
                    alignItems="start"
                  >
                    <Typography variant="subtitle2" sx={{ color: "#e9e9e9" }}>
                      {typeof i.subject === "boolean" ? (
                        <IoMdCheckmark size={20} />
                      ) : (
                        i.subject
                      )}
                    </Typography>
                  </Box>
                </PlanTableCol>
                <PlanTableCol index={1}>
                  <Box
                    minHeight={TableDefaulStyles.col.aspectCol.minHeight}
                    display="flex"
                    alignItems="start"
                  >
                    <Typography variant="subtitle2" sx={{ color: "#eeeeee" }}>
                      {typeof i.freeOption === "boolean" ? (
                        <IoMdCheckmark size={20} />
                      ) : (
                        i.freeOption
                      )}
                    </Typography>
                  </Box>
                </PlanTableCol>
                <PlanTableCol index={2}>
                  <Box
                    minHeight={TableDefaulStyles.col.aspectCol.minHeight}
                    display="flex"
                    alignItems="start"
                  >
                    <Typography variant="subtitle2" sx={{ color: "#eeeeee" }}>
                      {typeof i.proOption === "boolean" ? (
                        i.proOption ? (
                          <IoMdCheckmark size={20} />
                        ) : (
                          <Box>&nbsp;</Box>
                        )
                      ) : (
                        i.proOption
                      )}
                    </Typography>
                  </Box>
                </PlanTableCol>
                <PlanTableCol index={3}>
                  <Box
                    minHeight={TableDefaulStyles.col.aspectCol.minHeight}
                    display="flex"
                    alignItems="start"
                  >
                    <Typography variant="subtitle2" sx={{ color: "#eeeeee" }}>
                      {typeof i.enterpriseOption === "boolean" ? (
                        i.enterpriseOption ? (
                          <IoMdCheckmark size={20} />
                        ) : (
                          <Box>&nbsp;</Box>
                        )
                      ) : (
                        i.enterpriseOption
                      )}
                    </Typography>
                  </Box>
                </PlanTableCol>
              </PlanTableRow>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const BillingComponent = () => {
  return (
    <Stack alignItems="center">
      {/* plans cards */}
      <Box display="flex" gap="10px">
        <PlanCard
          current
          level="free"
          description="For bug bounty hunters, researchers, and individuals"
          a11ies={["Asset reconnaissance", "Vulnerability research"]}
          buttonText="CurrentPlan"
          includes={[
            "Weekly reconnaissance",
            "Tech detections and inventory",
            "Real-time vulnerability feed and API",
            "AI Nuclei templates editor",
          ]}
        />
        <PlanCard
          pro
          level="pro"
          description="For pentesters and smaller security teams"
          a11ies={[
            "Attack surface discovery",
            "Exploitable vulnerability detection",
          ]}
          buttonText=""
          includes={[
            "Ultra-fast vulnerability scans",
            "Daily reconnaissance",
            "Alerts, ticketing, and API",
            "Team workspace up to 10 seats",
          ]}
        />
        <PlanCard
          level="enterprise"
          description="For large attack surfaces and enterprise requirements"
          a11ies={[
            "Advanced attack surface management",
            "Risk exposure management",
          ]}
          buttonText="Talk to sales"
          includes={[
            "Retest and regression automations",
            "Internal scans, DAST, and fuzzing",
            "Whitelist fixed IPs and rate limiting",
            "RBAC, SAML SSO, audit logs",
          ]}
        />
      </Box>
      {/* scroll to all plans button */}
      <Box width="100%" mt="50px" display="flex" justifyContent="center">
        <Button
          sx={{
            textTransform: "none",
            borderRadius: "6px",
            bgcolor: "#212124",
            "&:hover": {
              bgcolor: "#27272a",
            },
          }}
        >
          <a href="#all-plans">
            <Box display="flex" alignItems="center" gap="5px">
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "14px", color: "#c5c5c6", fontWeight: 500 }}
              >
                Compare all plans
              </Typography>
              <Box display="flex" alignItems="center">
                <IoIosArrowDown color="#c5c5c6" />
              </Box>
            </Box>
          </a>
        </Button>
      </Box>
      {/* plans tables */}
      <PlanTables />
    </Stack>
  );
};

export default BillingComponent;
