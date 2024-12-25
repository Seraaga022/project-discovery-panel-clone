import { BillingDialogProps } from "@appTypes/_index";
import { useState } from "react";

export default function useDialog() {
  const [isDialogOpen, setIsDialogOpen] =
    useState<BillingDialogProps["isOpen"]>(false);

  return {
    isDialogOpen,
    setIsDialogOpen,
  };
}
