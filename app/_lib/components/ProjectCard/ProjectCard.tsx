/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ShineButton from '../ShineButton/ShineButton';
import './ProjectCard.css'
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
    function openUrlInNewTab(url: string): void {
        const newTab = window.open(url, '_blank');
        if (newTab) {
          newTab.focus();
        } else {
          // If the browser has a pop-up blocker, inform the user to allow pop-ups.
          alert('Please allow pop-ups to open the URL.');
        }
      }
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          
        </a>
        <ShineButton onClick={()=>openUrlInNewTab(projectUrl)} variant="hover">View Project</ShineButton>
      </div>
    </div>
  );
};

export default ProjectCard;