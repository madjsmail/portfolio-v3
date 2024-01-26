"use client";
import React, { useEffect, useRef, useState } from "react";
import "./InfiniteScroll.css";




interface LogoSliderProps {
  logos: any[];
}

const InfiniteScroll: React.FC<LogoSliderProps> = ({ logos }) => {
  const duplicatedLogos = [...logos];
  const sliderRef = useRef(null);

  return (

      <div className="slider-container ">
        <div className="logos">
          <div className="logos-slide">
            {duplicatedLogos.map((logo, index) => (
              <span key={index} className="logo-slider__logo">
                {logo}
              </span>
            ))}
          </div>
          <div className="logos-slide">
            {duplicatedLogos.map((logo, index) => (
              <span key={index} className="logo-slider__logo">
                {logo}
              </span>
            ))}
          </div>
        </div>
  
    </div>
  );
};

export default InfiniteScroll;
