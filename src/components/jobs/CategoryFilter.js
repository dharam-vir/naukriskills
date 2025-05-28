import React, { Fragment } from 'react'

const categories = [
    'Web Design',
    'Accountant',
    'Data Analytics',
    'Marketing',
    'Software Developing',
    'IT & Networking',
    'Translation',
    'Sales & Marketing',
];

const CategoryFilter = ({ selectedCategory, onChange }) => {
    const handleSelectChange = (e) => {
        onChange(e.target.value);
    };
    return (
        <Fragment>
            <div classname="utf-sidebar-widget-item">
                <h3>Category</h3>
                <select name="category" value={selectedCategory} onChange={handleSelectChange}>
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
        </Fragment>
    )
}

export default CategoryFilter