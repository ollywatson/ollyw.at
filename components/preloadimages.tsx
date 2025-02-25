"use client"; // This is a Client Component

import { useEffect } from "react";

const imagesToPreload = [
    "/multi-basket-1.png",
    "/plus-1.png",
    "/quick-view-1.png",
    "/voicey-ui-1.png",
    "/voicey-logo.jpg",
    "/rhinestone-brand-1.png",
    "/rhinestone-illustration-0.jpg",
    "/shadwell-brand-1.png",
    "/shadwell-posters-1.png",
    "/shadwell-web-1.png",
];

const PreloadImages = () => {
  useEffect(() => {
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      console.log(`Preloading: ${src}`);
    });
  }, []);

  return null; // This component doesn't render anything, it just preloads images
};

export default PreloadImages;
