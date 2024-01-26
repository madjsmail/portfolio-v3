import React, { useRef, useState } from "react";
import "./CardSpotlight.css";
import PropTypes from 'prop-types';


export const CardSpotlightEffect = (props :any) => {
  const { icon, greeting, description } = props;

  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e:any) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current as any;
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
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card-spotlight-effect"
    >
      <div
        className="spotlight"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      <div>
        <span className="icon">{icon}</span>
      </div>
      <h3 className="greeting">{greeting}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

CardSpotlightEffect.propTypes = {
  icon: PropTypes.element,
  greeting: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardSpotlightEffect;