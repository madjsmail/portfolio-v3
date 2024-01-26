'use client'
import React from 'react';
import './ProjectCardHover.css';
import { CardSpotlightBorderCSS } from '../CardSpotlightBorder/CardSpotlightBorder';
interface ProjectCardHoverProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ProjectCardHover: React.FC<ProjectCardHoverProps> = ({ imageUrl, title, description }) => {
  return (
    <div
      className="project"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
     
      <h3>{title}</h3>
      <p>{description}</p>
    
    </div>
  );
};

export default ProjectCardHover;