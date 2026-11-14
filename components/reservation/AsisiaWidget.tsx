
"use client";

import { useEffect } from "react";

type AsisiaWidgetProps = {
  src: string;
};

export default function AsisiaWidget({
  src,
}: AsisiaWidgetProps) {
  useEffect(() => {
    const container = document.getElementById("main");

    if (!container) return;

    const previousOnload = window.onload;
    const script = document.createElement("script");

    script.src = src;
    script.async = true;

    script.onload = () => {
      if (
        document.readyState === "complete" &&
        window.onload &&
        window.onload !== previousOnload
      ) {
        window.onload.call(window, new Event("load"));
      }
    };

    script.onerror = () => {
      console.error("[Asisia] Widget script yüklenemedi.");
    };

    document.body.appendChild(script);

    return () => {
      script.onload = null;
      script.onerror = null;
      script.remove();

      container.replaceChildren();

      if (window.onload !== previousOnload) {
        window.onload = previousOnload;
      }
    };
  }, [src]);

  return (
    <section className="w-full px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1600px]">
        <div id="main" className="w-full" />
      </div>
    </section>
  );
}
