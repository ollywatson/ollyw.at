"use client";

import { useState, useEffect, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // Delay in milliseconds
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-out 0.1s",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
