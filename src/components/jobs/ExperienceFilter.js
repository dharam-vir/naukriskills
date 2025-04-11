import React from 'react';

const ExperienceFilter = ({ selectedExperience, onChange }) => {
  const experienceOptions = [
    '1Year to 2Year',
    '2Year to 3Year',
    '3Year to 4Year',
    '4Year to 5Year',
  ];

  const handleCheckboxChange = (exp) => {
    if (selectedExperience.includes(exp)) {
      onChange(selectedExperience.filter((e) => e !== exp));
    } else {
      onChange([...selectedExperience, exp]);
    }
  };

  return (
    <div className="utf-sidebar-widget-item">
      <h3>Experience</h3>
      <div className="utf-radio-btn-list">
        {experienceOptions.map((exp, index) => (
          <div className="checkbox" key={index}>
            <input
              type="checkbox"
              id={`exp-${index}`}
              checked={selectedExperience.includes(exp)}
              onChange={() => handleCheckboxChange(exp)}
            />
            <label htmlFor={`exp-${index}`}>
              <span className="checkbox-icon" /> {exp}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceFilter;
