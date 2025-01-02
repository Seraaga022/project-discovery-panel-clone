// // import {
// //   PromiseStateT,
// //   PromiseToastProps,
// //   ToastLayoutProps,
// // } from "@appTypes/toast";
// // import { Box, Stack } from "@mui/material";
// // import { CiCircleCheck } from "react-icons/ci";
// // import Circular from "../Loaders/Circular";
// // import { LuSiren } from "react-icons/lu";
// // import { useEffect, useState } from "react";
// // import customToast from "./toast.junk";

// export const ToastLayout: React.FC<ToastLayoutProps> = ({
//   children,
//   icon,
//   ...props
// }) => {
//   return (
//     <Stack direction="row" alignItems="center" spacing={1.5} {...props}>
//       {/* icon */}
//       <Box display="flex" alignItems="center">
//         {icon}
//       </Box>
//       {/* text */}
//       <Box display="flex" alignItems="center">
//         <InnerThemeProvider theme={ToastTheme}>{children}</InnerThemeProvider>
//       </Box>
//     </Stack>
//   );
// };

// // export const PromiseToast = <P,>({
// //   children,
// //   promise,
// // }: PromiseToastProps<P>) => {
// //   const [promiseState, setPromiseState] = useState<PromiseStateT>("pending");

// //   useEffect(() => {
// //     promise
// //       .then(() => setPromiseState("fulfilled"))
// //       .then(() => setPromiseState("rejected"));
// //   }, [promise]);

// //   const getPromiseIcon = () => {
// //     switch (promiseState) {
// //       case "fulfilled":
// //         return <CiCircleCheck color="#cdff00" />;
// //       case "pending":
// //         return <Circular color="#ededed" />;
// //       case "rejected":
// //         return <LuSiren color="#c25875" />;
// //     }
// //   };

// //   const toastId = customToast({
// //     children: <ToastLayout icon={getPromiseIcon()}>{children}</ToastLayout>,
// //     toastOptions: {
// //       duration: 1000000000,
// //     },
// //   });

// //   promise
// //     // fulfill
// //     .then(() =>
// //       customToast({
// //         children: <ToastLayout icon={getPromiseIcon()}>{children}</ToastLayout>,
// //         toastOptions: {
// //           id: toastId,
// //         },
// //       })
// //     )
// //     // reject
// //     .catch(() =>
// //       customToast({
// //         children: <ToastLayout icon={getPromiseIcon()}>{children}</ToastLayout>,
// //         toastOptions: {
// //           id: toastId,
// //         },
// //         borderColor: promiseState === "rejected" ? "#c25875" : undefined,
// //       })
// //     );

// //   return null;
// // };
