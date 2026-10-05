"use client";

import React, { useEffect, useRef } from "react";

interface AutoplayVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  className?: string;
  poster?: string;
}

export function AutoplayVideo({
  src,
  className = "",
  poster,
  ...props
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted at DOM property level for WebKit / iOS Safari compliance
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const attemptPlay = () => {
      if (!video) return;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was blocked (e.g., iOS Low Power Mode).
          // Fallback: start video seamlessly upon first user touch or scroll.
          const resumePlayback = () => {
            if (video && video.paused) {
              video.play().catch(() => {});
            }
          };

          window.addEventListener("touchstart", resumePlayback, { once: true, passive: true });
          window.addEventListener("touchend", resumePlayback, { once: true, passive: true });
          window.addEventListener("click", resumePlayback, { once: true, passive: true });
          window.addEventListener("scroll", resumePlayback, { once: true, passive: true });
        });
      }
    };

    attemptPlay();

    // In case video is ready later (loadedmetadata / canplay)
    video.addEventListener("loadedmetadata", attemptPlay, { once: true });
    video.addEventListener("canplay", attemptPlay, { once: true });

    return () => {
      video.removeEventListener("loadedmetadata", attemptPlay);
      video.removeEventListener("canplay", attemptPlay);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      poster={poster}
      className={className}
      {...props}
    />
  );
}
