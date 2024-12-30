import { Box, TextField, Typography } from "@mui/material";
import VulnerabilityCard from "./VulnerabilityCard";
import getUniqueKey from "../../utils/lib/getUniqueKey";
import type { VulnerabilityItemsT } from "@appTypes/types/vulnerabilityCard";
import { FiSearch } from "react-icons/fi";
import { IoBugOutline, IoCubeOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

const VulnerabilitiesFeed = () => {
  const vulnerabilities: VulnerabilityItemsT = [
    {
      level: "medium",
      mainTag: "ariang-debug-console",
      title: "AriaNg Debug Console - Exposure",
      tags: [{ status: "UNRELEASED" }],
      description: "Detects the presence of AriaNg Debug Console exposure",
      time: "2d",
      auther: "dhiyaneshdk",
    },
    {
      level: "high",
      mainTag: "ariang-debug-console",
      title: "AriaNg Debug Console - Exposure",
      tags: [{ status: "UNRELEASED" }],
      description: "Detects the presence of AriaNg Debug Console exposure",
      time: "2d",
      auther: "dhiyaneshdk",
    },
    {
      level: "critical",
      mainTag: "ariang-debug-console",
      title: "AriaNg Debug Console - Exposure",
      tags: [{ status: "UNRELEASED" }],
      description: "Detects the presence of AriaNg Debug Console exposure",
      time: "2d",
      auther: "dhiyaneshdk",
    },
    {
      level: "critical",
      mainTag: "ariang-debug-console",
      title: "AriaNg Debug Console - Exposure",
      tags: [{ status: "UNRELEASED" }],
      description: "Detects the presence of AriaNg Debug Console exposure",
      time: "2d",
      auther: "dhiyaneshdk",
    },
    {
      level: "medium",
      mainTag: "ninja-forms-xss",
      title: "Ninja Forms < 3.5.5 - Cross-Site Scripting",
      tags: [{ status: "UNRELEASED", product: "ninja_forms", cvssScore: 6.1 }],
      description:
        "The Ninja Forms WordPress plugin before 3.5.5 does not escape an URL before outputting it back in an attribute, leading to a Reflected Cross-Site Scripting which could be used against high privilege users such as admin",
      time: "2d",
      auther: "ritikchaddha",
    },
    {
      level: "critical",
      mainTag: "ninja-forms-xss",
      title: "Ninja Forms < 3.5.5 - Cross-Site Scripting",
      tags: [
        {
          status: "UNRELEASED",
          product: "chuanhuchatgpt",
          cvssScore: 5.9,
          epssScore: 0.00043,
        },
      ],
      description:
        "The Ninja Forms WordPress plugin before 3.5.5 does not escape an URL before outputting it back in an attribute, leading to a Reflected Cross-Site Scripting which could be used against high privilege users such as admin",
      time: "2d",
      auther: "ritikchaddha",
    },
  ];

  const suggestedFiltersItems = [
    {
      title: "Top Products",
      icon: <IoCubeOutline color="rgb(20 193 121/1)" size={17} />,
      items: [
        { title: "coldfusion" },
        { title: "experience manager", value: "experience_manager" },
        { title: "gitlab" },
        { title: "rukovoditel" },
        { title: "xwiki" },
      ],
    },
    {
      title: "Top Vendors",
      icon: <LuBuilding color="rgb(20 193 121/1)" size={17} />,
      items: [
        { title: "adobe" },
        { title: "apache" },
        { title: "atlassian" },
        { title: "oracle" },
        { title: "vmware" },
      ],
    },
    {
      title: "Type",
      icon: <IoBugOutline color="rgb(20 193 121/1)" size={17} />,
      items: [
        { title: "XSS" },
        { title: "SQLi" },
        { title: "RCE" },
        { title: "CVE" },
        { title: "KEV" },
        { title: "SSRF" },
      ],
    },
  ];

  return (
    <Box>
      {/* suggested search filters */}
      <Box mt="55px">
        <Box display="flex" boxSizing="border-box" px="50px">
          {suggestedFiltersItems.map((sf) => (
            <Box
              key={getUniqueKey()}
              flex={1}
              px="30px"
              boxSizing="border-box"
              maxWidth="400px"
            >
              <Box>
                {/* title */}
                <Box display="flex" gap="12px">
                  {/* icon */}
                  <Box display="flex" alignItems="center">
                    {sf.icon}
                  </Box>
                  {/* text */}
                  <Box>
                    <Typography
                      sx={{
                        color: "hsla(0,0%,93%,.5)",
                        fontSize: "15px",
                        fontWeight: 400,
                        textTransform: "uppercase",
                        fontFamily: "consolas",
                      }}
                    >
                      {sf.title}
                    </Typography>
                  </Box>
                </Box>
                {/* items */}
                <Box mt="20px">
                  <Box display="flex" gap="10px 7px" flexWrap="wrap">
                    {sf.items.map((i) => (
                      <Box
                        key={getUniqueKey()}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap="7px"
                        borderRadius="15px"
                        bgcolor="hsla(0,0%,93%,.1)"
                        px="13px"
                        py="3px"
                        onClick={() => console.log(i.value || i.title)}
                        sx={{
                          "&:hover": {
                            bgcolor: "hsla(0,0%,93%,.2)",
                          },
                          transition: "background ease-in 70ms",
                          cursor: "pointer",
                        }}
                      >
                        {/* icon */}
                        <Box display="flex" alignItems="center">
                          <GoPlus size={17.8} style={{ opacity: 0.3 }} />
                        </Box>
                        {/* text */}
                        <Box>
                          <Typography
                            sx={{
                              color: "hsla(0,0%,93%,.7)",
                              fontSize: "13px",
                              leterSpacing: 1,
                              textTransform: "capitalize",
                            }}
                          >
                            {i.title}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {/* search input */}
      <Box
        height="135px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSizing="border-box"
      >
        {/* search wrapper */}
        <Box width="740px" height="30px" position="relative" zIndex={1}>
          {/* search wrapper */}
          <Box px="45px" position="relative">
            {/* search input */}
            <TextField
              type="text"
              placeholder="Search vulnerabilites"
              sx={{
                width: "100%",
                maxHeight: "35px",
                borderRadius: "5px",
                bgcolor: "#09090b",
                border: "1px solid #27272a",
                "& .MuiInputBase-input": {
                  color: "#eee",
                  fontSize: 13,
                  maxHeight: "1px",
                  "&::placeholder": {
                    color: "#a0a0a8",
                    opacity: 1,
                    fontSize: 13,
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  maxHeight: "40px",
                },
                "&:hover": {
                  border: "1px solid #3e3e45",
                  bgcolor: "#18181b",
                },
                "& .Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                    borderRadius: "5px",
                  },
                },
              }}
            />
            {/* search icon */}
            <Box position="absolute" top="8px" right="55px">
              <FiSearch size={16} color="#a1a1aa" />
            </Box>
          </Box>
          {/* blur effect */}
          <Box
            sx={{
              bgcolor: "rgba(39,39,42,.6)",
              filter: "blur(30px)",
              boxSizing: "border-box",
              position: "absolute",
              top: "1px",
              right: "80px",
              minHeight: "50px",
              minWidth: "80%",
              zIndex: -1,
            }}
          ></Box>
        </Box>
      </Box>
      {/* vulnerability items */}
      <Box p="22px">
        {vulnerabilities.map((v, index) => (
          <VulnerabilityCard
            key={getUniqueKey()}
            level={v.level}
            mainTag={v.mainTag}
            title={v.title}
            tags={v.tags}
            description={v.description}
            time={v.time}
            auther={v.auther}
            index={index}
            length={vulnerabilities.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};

export default VulnerabilitiesFeed;
