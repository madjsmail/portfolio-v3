import React from 'react';
import PropTypes from 'prop-types';
import './ExperienceTimelineItem.css'; // Import your CSS file
import Badge from '../Badge/badge';

const ExperienceTimelineItem = (props:any) => {
    const { position, company, role, startDate, endDate, description, technologiesUsed } = props;
  
    return (
      <div className="experience__time-line__item">
        <div className="experiance__time-line__header">
          <div className="job-title">
            <h4>{position}</h4>
            <span>{company}</span>
          </div>
          <div className="job-date">
            <span>{startDate}</span>
            <span>{endDate}</span>
          </div>
        </div>
        <div className="experience__time-line__item__content">
          <div className="job-description">
            <p>Role: {role}</p>
            <p>{description}</p>
            <div>
              <p>Technologies Used:</p>
              <div className="tech-used">
                {technologiesUsed.map((tech: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
                  <Badge key={index}  type="cerise">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  ExperienceTimelineItem.propTypes = {
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologiesUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  
  export default ExperienceTimelineItem;