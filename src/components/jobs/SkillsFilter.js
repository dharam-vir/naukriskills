import React from 'react';

const SkillsFilter = ({ selectedSkills, onChange }) => {
  const skills = [
    'HTML 5',
    'Javascript',
    'Web Design',
    'Graphic Designer',
  ];

  const handleCheckboxChange = (skill) => {
    if (selectedSkills.includes(skill)) {
      onChange(selectedSkills.filter((s) => s !== skill));
    } else {
      onChange([...selectedSkills, skill]);
    }
  };

  return (
    <div className="utf-sidebar-widget-item">
      <h3>Skills</h3>
      <div className="utf-tags-container-item">
        {skills.map((skill, index) => (
          <div className="tag" key={index}>
            <input
              type="checkbox"
              id={`skill-${index}`}
              checked={selectedSkills.includes(skill)}
              onChange={() => handleCheckboxChange(skill)}
            />
            <label htmlFor={`skill-${index}`}>{skill}</label>
          </div>
        ))}
      </div>
      <div className="clearfix" />
    </div>
  );
};

export default SkillsFilter;
