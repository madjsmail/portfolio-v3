import React, { useRef, useState } from "react";
import "./CardSpotlightBorder.css";

interface CardSpotlightBorderProps {
    className?: string;
    children: React.ReactNode;
    type: "ic-terine" | "cerise" | "orange-peel" | "baby-powder";
  }

export const CardSpotlightBorderCSS: React.FC<CardSpotlightBorderProps> = ({ className, children , type ="baby-powder" })  => {
  const divRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className={`spotlight-card-wrapper relative ${className}`}>
      <div
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="base-spotlight-card"
      >
        {children}


      </div>
      <div
        ref={divRef}
        style={{
            border: `1px solid hsl(var(--cl--${type}))`,
          opacity,
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
        aria-hidden="true"
        className="overlay-spotlight-card"
      ></div>
    </div>
  );
};