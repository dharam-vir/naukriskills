import React, { Fragment, useState } from 'react';

const KeySkills = () => {
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Bootstrap', 'PHP', 'MySQL', 'Photoshop', 'Python'];

  const filteredSuggestions = suggestions.filter(
    (s) =>
      s.toLowerCase().includes(skillInput.toLowerCase()) &&
      !skills.some((added) => added.toLowerCase() === s.toLowerCase())
  );

  const handleAddSkill = (skillToAdd) => {
    const skill = skillToAdd.trim();
    if (
      skill &&
      !skills.some((s) => s.toLowerCase() === skill.toLowerCase()) &&
      skills.length < 6
    ) {
      setSkills([...skills, skill]);
      setSkillInput('');
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e) => {
    setSkillInput(e.target.value);
    setShowSuggestions(true);
    setActiveSuggestionIndex(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredSuggestions.length > 0 && showSuggestions) {
        handleAddSkill(filteredSuggestions[activeSuggestionIndex]);
      } else {
        handleAddSkill(skillInput);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (activeSuggestionIndex + 1 < filteredSuggestions.length) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-xl-12">
          <div className="dashboard-box">
            <div className="headline">
              <h3>Key Skills</h3>
            </div>

            <div className="content with-padding padding-bottom-10">
              <div className="row">
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>
                      Job Skills{' '}
                      <i className="help-icon" data-tippy-placement="top" title="Maximum of 6 Skills" />
                    </h5>

                    <div className="keywords-container" style={{ position: 'relative' }}>
                      <div className="keyword-input-container">
                        <input
                          type="text"
                          className="keyword-input utf-with-border"
                          placeholder="CSS, Photoshop, Js, Bootstrap"
                          value={skillInput}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyDown}
                          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // delay blur to allow click
                          onFocus={() => setShowSuggestions(true)}
                        />
                        <button
                          type="button"
                          className="keyword-input-button ripple-effect"
                          onClick={() => handleAddSkill(skillInput)}
                        >
                          <i className="icon-material-outline-add" />
                        </button>
                      </div>

                      {/* Suggestion Dropdown */}
                      {skillInput && filteredSuggestions.length > 0 && showSuggestions && (
                        <ul
                          className="suggestion-dropdown"
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            zIndex: 1000,
                            background: '#fff',
                            border: '1px solid #ccc',
                            padding: 0,
                            margin: 0,
                            listStyle: 'none',
                            maxHeight: '150px',
                            overflowY: 'auto',
                          }}
                        >
                          {filteredSuggestions.map((suggestion, i) => (
                            <li
                              key={i}
                              onMouseDown={() => handleAddSkill(suggestion)}
                              style={{
                                padding: '8px 12px',
                                cursor: 'pointer',
                                backgroundColor: i === activeSuggestionIndex ? '#f0f0f0' : '#fff',
                                borderBottom: '1px solid #eee',
                              }}
                            >
                              {suggestion}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>

                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="utf-submit-field">
                    <h5>Added Skills</h5>
                    {skills.map((skill, index) => (
                      <span key={index} className="keyword" style={{ marginRight: '8px' }}>
                        {skill}
                        <span
                          className="keyword-remove"
                          onClick={() => handleRemoveSkill(skill)}
                          style={{ cursor: 'pointer' }}
                        >
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default KeySkills;
