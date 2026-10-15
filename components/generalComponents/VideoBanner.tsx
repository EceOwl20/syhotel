
"use client";

import { useEffect, useMemo, useState } from "react";

type VideoBannerProps = {
  youtubeUrl: string;
  start?: number;
  end?: number;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
};

function getYoutubeId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (
      parsed.hostname === "youtu.be" ||
      parsed.hostname === "www.youtu.be"
    ) {
      return parsed.pathname.slice(1).split("/")[0];
    }

    if (
      ["youtube.com", "www.youtube.com", "m.youtube.com"].includes(
        parsed.hostname,
      )
    ) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }

      const match = parsed.pathname.match(
        /^\/(?:embed|shorts|live)\/([^/]+)/,
      );

      return match?.[1] ?? null;
    }
  } catch {
    return null;
  }

  return null;
}

export default function VideoBanner({
  youtubeUrl,
  start = 0,
  end,
  overlayOpacity = 0.15,
  className = "",
  children,
}: VideoBannerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const videoId = useMemo(
    () => getYoutubeId(youtubeUrl),
    [youtubeUrl],
  );

  const embedUrl = useMemo(() => {
    if (!videoId) return null;

const params = new URLSearchParams({
  autoplay: "1",
  mute: "1",
  controls: "0",
  loop: "1",
  playlist: videoId,
  playsinline: "1",
  rel: "0",
  disablekb: "1",
  fs: "0",

  // Subtitle preferences
  cc_load_policy: "0",

  start: String(Math.max(0, start)),
});

    if (end !== undefined) {
      params.set("end", String(Math.max(start + 1, end)));
    }

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, [videoId, start, end]);

  useEffect(() => {
    setIsLoaded(false);
  }, [embedUrl]);

  if (!embedUrl) return null;

  return (
    <section
      className={`relative h-screen min-h-[400px] w-full overflow-hidden bg-black ${className}`}
    >
      {/* YouTube background */}
      <iframe
        key={embedUrl}
        src={embedUrl}
        title="Background video"
        tabIndex={-1}
        aria-hidden="true"
        allow="autoplay; encrypted-media; picture-in-picture"
        onLoad={() => setIsLoaded(true)}
        className={`
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[100vh] w-[177.78vh]
          min-h-[56.25vw] min-w-full
          -translate-x-1/2 -translate-y-1/2
          border-0
          transition-opacity duration-700
          ${isLoaded ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Color overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-black"
        style={{
          opacity: Math.min(1, Math.max(0, overlayOpacity)),
        }}
      />

      {/* Optional content */}
      {children && (
        <div className="relative z-20 flex h-full items-center justify-center">
          {children}
        </div>
      )}
    </section>
  );
}
