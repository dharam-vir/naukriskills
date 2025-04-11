import React from 'react';

const JobTypeFilter = ({ selectedTypes, onChange }) => {
  const jobTypes = [
    'Full Time Jobs',
    'Part Time Jobs',
    'Freelancer Jobs',
    'Internship Jobs',
    'Temporary Jobs',
  ];

  const handleCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      onChange(selectedTypes.filter((t) => t !== type));
    } else {
      onChange([...selectedTypes, type]);
    }
  };

  return (
    <div className="utf-sidebar-widget-item">
      <h3>Job Type</h3>
      <div className="utf-radio-btn-list">
        {jobTypes.map((type, index) => (
          <div className="checkbox" key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              checked={selectedTypes.includes(type)}
              onChange={() => handleCheckboxChange(type)}
            />
            <label htmlFor={`checkbox-${index}`}>
              <span className="checkbox-icon" /> {type}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobTypeFilter;
