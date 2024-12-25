import { useState } from "react";
import {
  DiscoveryTimeT,
  ActiveFrequencyIntervalT,
  DiscoveryDaysT,
} from "@appTypes/types/newAssetDialog";

export default function useNewAssetDiscoveryFrequencyManagement() {
  const [activeFrequencyInterval, setActiveFrequencyInterval] =
    useState<ActiveFrequencyIntervalT>(null);
  const [discoveryDays, setDiscoveryDays] = useState<DiscoveryDaysT>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [discoveryTime, setDiscoveryTime] = useState<DiscoveryTimeT>({
    hour: "",
    minute: "",
    dayTime: "",
  });
  const clearCutomTimeState = () => {
    setDiscoveryTime({
      hour: "",
      minute: "",
      dayTime: "",
    });
  };
  const getFullDiscoveryTime = () => {
    if (discoveryTime.hour !== "")
      return (
        discoveryTime.hour +
        ":" +
        discoveryTime.minute +
        " " +
        discoveryTime.dayTime
      );
    else return "";
  };

  return {
    activeFrequencyInterval,
    setActiveFrequencyInterval,
    discoveryDays,
    setDiscoveryDays,
    discoveryTime,
    setDiscoveryTime,
    clearCutomTimeState,
    getFullDiscoveryTime,
  };
}
