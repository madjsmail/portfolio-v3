import React from 'react';
import PropTypes from 'prop-types';
import './EducationTimelineItem.css'; // Import your CSS file

const EducationTimelineItem = (props :any) => {
  const { institution, degree, startDate, endDate, location } = props;

  return (
    <div className="education__time-line__item">
      <div className="education__time-line__header">
        <div className="education-title">
          <h3>{degree}</h3>
          <span>{institution}</span>
        </div>
        <div className="education-date">
          <span>{startDate}</span>
          <span>{endDate}</span>
        </div>
      </div>
      <div className="education__time-line__item__content">
        <p>{`Location: ${location}`}</p>
        {/* You can add more details here if needed */}
      </div>
    </div>
  );
};

EducationTimelineItem.propTypes = {
  institution: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // Add more propTypes if you have additional details to display
};

export default EducationTimelineItem;