import React, { Fragment } from 'react'

const options = [
  { id: 'chekcbox01', label: '1Year to 2Year', value: '1-2' },
  { id: 'chekcbox02', label: '2Year to 3Year', value: '2-3' },
  { id: 'chekcbox03', label: '3Year to 4Year', value: '3-4' },
  { id: 'chekcbox04', label: '4Year to 5Year', value: '4-5' },
];

const ExperienceFilter = ({ selectedExperience, onChange }) => {
     const handleCheckboxChange = (value) => {
    const newSelection = selectedExperience.includes(value)
      ? selectedExperience.filter((v) => v !== value)
      : [...selectedExperience, value];

    onChange(newSelection);
  };
    return (
        <Fragment>
            <div className="utf-sidebar-widget-item">
                <h3>Experince</h3>
                <div className="utf-radio-btn-list">
      {options.map((option) => (
        <div className="checkbox" key={option.id}>
          <input
            type="checkbox"
            id={option.id}
            checked={selectedExperience.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
          <label htmlFor={option.id}>
            <span className="checkbox-icon" /> {option.label}
          </label>
        </div>
      ))}
    </div>
            </div>
        </Fragment>
    )
}

export default ExperienceFilter