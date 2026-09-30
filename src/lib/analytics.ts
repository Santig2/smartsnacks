declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set",
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export type AnalyticsEvent =
  | "view_menu"
  | "click_get_directions"
  | "click_call_store"
  | "click_shop_external"
  | "filter_category"
  | "click_social_link";

export function trackEvent(eventName: AnalyticsEvent, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function trackOutboundLink(url: string, label: string) {
  trackEvent("click_shop_external", {
    url,
    label,
  });
}
