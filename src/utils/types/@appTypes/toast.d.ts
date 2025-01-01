import { StackProps } from "@mui/material";
import { ExternalToast } from "sonner";

export type ToastProps = React.PropsWtihChildren & {
  toastOptions?: ExternalToast;
  borderColor?: string;
};

interface ToastWithChildren {
  children: React.ReactNode;
}

export interface ToastLayoutProps extends ToastWithChildren, StackProps {
  icon: React.ReactNode;
}

export type SuccessToastProps = ToastWithChildren;
export type WarningToastProps = ToastWithChildren;
export type ErrorToastProps = ToastWithChildren;
export type ActionToastProps = ToastWithChildren;
export type PromiseToastProps<P> = ToastWithChildren & {
  promise: Promise<P>;
};

export type PromiseStateT = "pending" | "fulfilled" | "rejected";
