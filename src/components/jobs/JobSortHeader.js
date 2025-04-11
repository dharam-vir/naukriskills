import React, { useState } from 'react';

const JobSortHeader = ({ totalJobs = 50, shownJobs = 10, onSortChange }) => {
  const [sortOption, setSortOption] = useState('A to Z');

  const handleChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    if (onSortChange) {
      onSortChange(value);
    }
  };

  return (
    <div className="utf-notify-box-aera margin-top-15">
      <div className="utf-switch-container-item">
        <span>Showing 1–{shownJobs} of {totalJobs} Jobs Results :</span>
      </div>
      <div className="sort-by">
        <span>Sort By:</span>
        <select
          className="selectpicker hide-tick"
          value={sortOption}
          onChange={handleChange}
        >
          <option>A to Z</option>
          <option>Newest</option>
          <option>Oldest</option>
          <option>Random</option>
        </select>
      </div>
    </div>
  );
};

export default JobSortHeader;
