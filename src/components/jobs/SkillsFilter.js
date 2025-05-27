import React, { Fragment } from 'react'

const skillsOptions = [
    { id: 'tag1', label: 'HTML 5', value: 'HTML 5' },
    { id: 'tag2', label: 'Javascript', value: 'Javascript' },
    { id: 'tag3', label: 'Web Design', value: 'Web Design' },
    { id: 'tag4', label: 'Graphic Designer', value: 'Graphic Designer' },
];

const SkillsFilter = ({ selectedSkills, onChange }) => {
    const handleCheckboxChange = (value) => {
        const updatedSkills = selectedSkills.includes(value)
            ? selectedSkills.filter((skill) => skill !== value)
            : [...selectedSkills, value];

        onChange(updatedSkills);
    };
    return (
        <Fragment>
            <div className="utf-sidebar-widget-item">
                <h3>Skills</h3>
                <div className="utf-tags-container-item">
                    {skillsOptions.map((skill) => (
                        <div className="tag" key={skill.id}>
                            <input
                                type="checkbox"
                                id={skill.id}
                                checked={selectedSkills.includes(skill.value)}
                                onChange={() => handleCheckboxChange(skill.value)}
                            />
                            <label htmlFor={skill.id}>{skill.label}</label>
                        </div>
                    ))}
                </div>
                <div className="clearfix" />
            </div>

        </Fragment>
    )
}

export default SkillsFilter