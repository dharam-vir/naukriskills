import React, { Fragment } from 'react'

const jobTypes = [
    { id: 'chekcbox1', label: 'Full Time Jobs', value: 'Full Time' },
    { id: 'chekcbox2', label: 'Part Time Jobs', value: 'Part Time' },
    { id: 'chekcbox3', label: 'Freelancer Jobs', value: 'Freelancer' },
    { id: 'chekcbox4', label: 'Internship Jobs', value: 'Internship' },
    { id: 'chekcbox5', label: 'Temporary Jobs', value: 'Temporary' },
];

const JobTypeFilter = ({ selectedTypes, onChange }) => {

    const handleCheckboxChange = (value) => {
        const updatedTypes = selectedTypes.includes(value)
            ? selectedTypes.filter((type) => type !== value)
            : [...selectedTypes, value];

        onChange(updatedTypes);
    };

    return (
        <Fragment>
            <div className="utf-sidebar-widget-item">
                <h3>Job Type</h3>
                <div className="utf-radio-btn-list">
                    {jobTypes.map((type) => (
                        <div className="checkbox" key={type.id}>
                            <input
                                type="checkbox"
                                id={type.id}
                                checked={selectedTypes.includes(type.value)}
                                onChange={() => handleCheckboxChange(type.value)}
                            />
                            <label htmlFor={type.id}>
                                <span className="checkbox-icon" /> {type.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default JobTypeFilter