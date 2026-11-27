"use client";

import { useReportWebVitals } from "next/web-vitals";

type LayoutShiftSource = {
  node?: Node | null;
};

type LayoutShiftEntry = PerformanceEntry & {
  value?: number;
  sources?: LayoutShiftSource[];
};

function describeElement(node: Node | null | undefined) {
  if (!(node instanceof Element)) return "unknown";

  const tag = node.tagName.toLowerCase();
  const id = node.id ? `#${node.id}` : "";
  const classes = Array.from(node.classList)
    .slice(0, 3)
    .map((className) => `.${className.replace(/[^a-zA-Z0-9_-]/g, "")}`)
    .join("");

  return `${tag}${id}${classes}`.slice(0, 150);
}

function getLargestShiftSource(entries: PerformanceEntry[]) {
  const largestEntry = (entries as LayoutShiftEntry[]).reduce<
    LayoutShiftEntry | undefined
  >((largest, entry) => {
    if (!largest || (entry.value ?? 0) > (largest.value ?? 0)) return entry;
    return largest;
  }, undefined);

  return describeElement(largestEntry?.sources?.[0]?.node);
}

const reportWebVitals: Parameters<typeof useReportWebVitals>[0] = (metric) => {
  if (metric.name !== "CLS") return;

  const viewportWidth = window.innerWidth;
  const dataLayer = (window.dataLayer ??= []);

  dataLayer.push({
    event: "web_vital",
    metric_name: metric.name,
    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta,
    metric_rating: metric.rating,
    value: Math.round(metric.value * 1000),
    page_path: window.location.pathname,
    page_locale: document.documentElement.lang || "unknown",
    viewport_width: viewportWidth,
    viewport_height: window.innerHeight,
    device_type: viewportWidth < 768 ? "mobile" : "desktop",
    navigation_type: metric.navigationType,
    cls_source: getLargestShiftSource(metric.entries),
    non_interaction: true,
  });
};

export default function WebVitalsReporter() {
  useReportWebVitals(reportWebVitals);

  return null;
}
