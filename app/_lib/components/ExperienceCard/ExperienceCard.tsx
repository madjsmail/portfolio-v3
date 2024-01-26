import React from 'react';
import './ExperienceCard.css'; // You can create a CSS file for styling
import Badge from '../Badge/badge';

interface ExperienceCardProps {
  company: string;
  time: string;
  employmentType: string; // 'Full-time' or 'Remote'
  description: string;
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  time,
  employmentType,
  description,
  technologies,
}) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h2>{company}</h2>
      <div className="div">
      <p>{time}</p>
              <p>{employmentType === 'Full-time' ? 'Full-time' : 'Remote'}</p>
      </div>
      </div>
      <div className="experience-content">
        <p>{description}</p>
        <div className="technologies">
          <strong>Technologies:</strong>
        
            <div className="badges">
              {technologies.map((tech, index) => (
              <Badge  key={index}  type="baby-powder">{tech}</Badge>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;