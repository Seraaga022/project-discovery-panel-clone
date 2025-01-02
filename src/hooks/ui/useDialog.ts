import { BillingDialogProps, useDialogInitialState } from "@appTypes/billing";
import { useState } from "react";

export default function useDialog(
  initialDialogState: useDialogInitialState = false
) {
  const [isDialogOpen, setIsDialogOpen] =
    useState<BillingDialogProps["isOpen"]>(initialDialogState);

  return {
    isDialogOpen,
    setIsDialogOpen,
  };
}
