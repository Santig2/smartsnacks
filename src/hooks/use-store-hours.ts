"use client";

import { useState } from "react";

export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
}

function computeStoreStatus(): StoreStatus {
  try {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/New_York",
      hour12: false,
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
    };
    const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(now);

    let weekday = "";
    let hour = 0;
    let minute = 0;

    parts.forEach((p) => {
      if (p.type === "weekday") weekday = p.value;
      if (p.type === "hour") hour = parseInt(p.value, 10);
      if (p.type === "minute") minute = parseInt(p.value, 10);
    });

    const currentTimeDecimal = hour + minute / 60;
    let openNow = false;
    let closing = "6:00 PM";

    if (weekday === "Sun") {
      openNow = currentTimeDecimal >= 9 && currentTimeDecimal < 15;
      closing = "3:00 PM";
    } else {
      openNow = currentTimeDecimal >= 7 && currentTimeDecimal < 18;
      closing = "6:00 PM";
    }

    if (openNow) {
      return {
        isOpen: true,
        statusText: `Open Now \u2022 Closes at ${closing}`,
        nextEventText: `Closes at ${closing}`,
      };
    }

    return {
      isOpen: false,
      statusText: "Closed Now \u2022 Opens at 7:00 AM",
      nextEventText: "Opens at 7:00 AM",
    };
  } catch {
    return {
      isOpen: true,
      statusText: "Pembroke Pines, FL \u2022 Open Today",
      nextEventText: "Closes at 6:00 PM",
    };
  }
}

export function useStoreHours(): StoreStatus {
  // Lazy initializer: computeStoreStatus() runs once at mount,
  // no useEffect or cascading setState needed.
  const [status] = useState<StoreStatus>(computeStoreStatus);
  return status;
}
