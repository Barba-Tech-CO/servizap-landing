type EventName = 'page_view' | 'form_submit' | 'cta_click' | 'section_view';

interface AnalyticsEvent {
  name: EventName;
  properties?: Record<string, string | number | boolean>;
}

export function trackEvent({ name, properties }: AnalyticsEvent): void {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as Record<string, unknown>).gtag as (
      command: string,
      event: string,
      params?: Record<string, string | number | boolean>,
    ) => void;
    gtag('event', name, properties);
    return;
  }
  if (import.meta.env.DEV) {
    console.info(`[analytics] ${name}`, properties);
  }
}
