import {
  ErrorToastProps,
  PromiseToastProps,
  SuccessToastProps,
  ToastProps,
  WarningToastProps,
} from "@appTypes/toast";
import CloseIcon from "@mui/icons-material/close";
import { Box } from "@mui/material";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import { LuSiren } from "react-icons/lu";
import { toast as soonerToast } from "sonner";
import { ToastLayout, PromiseToast } from "./ToastComponents";
import InnerThemeProvider from "../InnerThemeProvider";
import { ToastTheme } from "../../../theme/ToastTheme";

const customToast = ({
  borderColor = "#27272a",
  children,
  toastOptions,
}: ToastProps) => {
  soonerToast.custom(
    (toastId) => (
      <Box
        color="#ededed"
        position="relative"
        right="-50px"
        border="1px solid"
        borderColor={borderColor}
        borderRadius="6px"
        bgcolor="#09090b"
        minWidth="300px"
        maxWidth="300px"
      >
        {/* close button */}
        <Box
          position="absolute"
          left="-7px"
          top="-7px"
          bgcolor="#09090b"
          border="1px solid #27272a"
          borderRadius="9999px"
          width="18px"
          height="18px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            cursor: "pointer",
          }}
        >
          <CloseIcon
            onClick={() => soonerToast.dismiss(toastId)}
            sx={{
              fontSize: "11px",
              color: "#ededed",
            }}
          />
        </Box>
        <Box p="16px">
          <InnerThemeProvider theme={ToastTheme}>{children}</InnerThemeProvider>
        </Box>
      </Box>
    ),
    toastOptions
  );
};

const successToast = ({ children }: SuccessToastProps) => {
  customToast({
    children: (
      <ToastLayout icon={<CiCircleCheck size={16} color="#cdff00" />}>
        {children}
      </ToastLayout>
    ),
  });
};

const warningToast = ({ children }: WarningToastProps) => {
  customToast({
    children: (
      <ToastLayout icon={<CiCircleInfo size={16} color="#ffce66" />}>
        {children}
      </ToastLayout>
    ),
  });
};

const errorToast = ({ children }: ErrorToastProps) => {
  customToast({
    children: (
      <ToastLayout icon={<LuSiren size={16} color="#c25875" />}>
        {children}
      </ToastLayout>
    ),
    borderColor: "#c25875",
  });
};

const promiseToast = <P,>({ children, promise }: PromiseToastProps<P>) => {
  return <PromiseToast promise={promise}>{children}</PromiseToast>;
};

// toast.info = infoToast;
customToast.success = successToast;
customToast.warning = warningToast;
customToast.error = errorToast;
// toast.action = actionToast;
customToast.promise = promiseToast;

export default customToast;
