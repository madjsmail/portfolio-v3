'use client'
import { useState } from 'react';
import './InfineSlider.css';

import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";
  
const LOGOS = [
  <FigmaLogoIcon
    key="figma"
    width={24}
    height={24}
    className="text-slate-800"
  />,
  <FramerLogoIcon
    key="framer"
    width={24}
    height={24}
    className="text-slate-800"
  />,
  <SketchLogoIcon
    key="sketch"
    width={24}
    height={24}
    className="text-slate-800"
  />,
  <TwitterLogoIcon
    key="twitter"
    width={24}
    height={24}
    className="text-slate-800"
  />,
  <GitHubLogoIcon
    key="github"
    width={24}
    height={24}
    className="text-slate-800"
  />,
  <VercelLogoIcon
    key="vercel"
    width={24}
    height={24}
    className="text-slate-800"
  />,
  <NotionLogoIcon
    key="notion"
    width={24}
    height={24}
    className="text-slate-800"
  />,
  <DiscordLogoIcon
    key="discord"
    width={24}
    height={24}
    className="text-slate-800"
  />,
  <InstagramLogoIcon
    key="instagram"
    width={24}
    height={24}
    className="text-slate-800"
  />,
  <LinkedInLogoIcon
    key="linkedin"
    width={24}
    height={24}
    className="text-slate-800"
  />,
];

function InfiniteSlider() {

  return (
    <div className="infinite-slider relative">
      <div className="animate-infinite-slider slide-container">
        {LOGOS.map(( logo, index) => (
          <div key={index} className="slide">  
            {logo}
          </div> 
        ))}
        
        {LOGOS.map(( logo, index) => (
          <div key={index} className="slide">
            {logo}  
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteSlider;