// const quickLinkItems = [
//   {
//     icon: <LuBrainCog color="#8c8c8d" size={21} />,
//     title: "Write Template using AI",
//     description: "Automate your custom vulnerability detections.",
//     url: "",
//   },
//   {
//     icon: <GoBell color="#8c8c8d" size={21} />,
//     title: "Configure Alerts",
//     description: "Receive alerts on new vulnerabilities and assets.",
//     url: "",
//   },
//   {
//     icon: (
//       <BsTicket
//         color="#8c8c8d"
//         size={21}
//         style={{ transform: "rotateZ(-30deg)" }}
//       />
//     ),
//     title: "Connect Ticketing Tools",
//     description: "Automatically create tickets on Jira, GitLab.",
//     url: "",
//   },
//   {
//     icon: <LuBraces color="#8c8c8d" size={21} />,
//     title: "Integrate Local Scans",
//     description: "Setup scans for your internal network, CI/CD.",
//     url: "",
//   },
//   {
//     icon: <AiOutlineCloudSync color="#8c8c8d" size={21} />,
//     title: "Connect Cloud Services",
//     description: "Monitor your assets as your team deploys.",
//     url: "",
//   },
//   {
//     icon: <AiOutlineCloudSync color="#8c8c8d" size={21} />,
//     title: "API",
//     description: "Create custom automations using our APIs",
//     url: "",
//   },
// ];

// <Box mt="80px">
//   <Box>
//     {/* title */}
//     <Box>
//       <Typography
//         variant="subtitle2"
//         sx={{ color: "#eeeeee", fontSize: "17px", fontWeight: 500 }}
//       >
//         Quick Links
//       </Typography>
//     </Box>
//     {/* quick links container */}
//     <Box mt="20px" px="1px" mb="80px">
//       {/* links */}
//       <Box display="flex" gap="8px" flexWrap="wrap">
//         {quickLinkItems.map((l) => (
//           <Box
//             display="flex"
//             alignItems="center"
//             bgcolor="#0d0d0f"
//             minWidth="420px"
//             minHeight="80px"
//             borderRadius="10px"
//             border="1px solid #18181a"
//             sx={{
//               "&:hover": {
//                 bgcolor: "#18181b",
//                 "& .quick-links-arrow": {
//                   pl: "20px",
//                 },
//               },
//               transition: "all ease-in 100ms",
//               cursor: "pointer",
//             }}
//           >
//             {/* icon */}
//             <Box flex={0.2}>
//               <Box display="flex" alignItems="center" justifyContent="center">
//                 {l.icon}
//               </Box>
//             </Box>
//             {/* title and description */}
//             <Box flex={1}>
//               <Box pl="5px">
//                 {/* title */}
//                 <Box>
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       color: "#c3c3c3",
//                       fontSize: "14px",
//                       fontWeight: 600,
//                       letterSpacing: 0.5,
//                     }}
//                   >
//                     {l.title}
//                   </Typography>
//                 </Box>
//                 {/* description */}
//                 <Box mt="2px">
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       color: "#838384",
//                       fontSize: "13px",
//                       letterSpacing: 0.5,
//                       fontWeight: 500,
//                     }}
//                   >
//                     {l.description}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//             {/* arrow */}
//             <Box flex={0.2}>
//               <Box
//                 className="quick-links-arrow"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 boxSizing="border-box"
//                 sx={{
//                   transition: "all ease-in 95ms",
//                 }}
//               >
//                 <IoIosArrowForward color="#5e5e60" />
//               </Box>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   </Box>
// </Box>;
