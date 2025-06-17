import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: '1. Work on Pratimaan Portal',
    company: 'Company Name',
    duration: 'Project working Time',
    projectTitle: 'Working Project Title',
    description: 'About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your ProjectsAbout Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects.About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects..',
  },
  {
    title: '2. Work on Pratimaan Portal',
    company: 'Company Name',
    duration: 'Project working Time',
    projectTitle: 'Working Project Title',
     description: 'About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your ProjectsAbout Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects.About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects..',
  },
  {
    title: '3. Work on Pratimaan Portal',
    company: 'Company Name',
    duration: 'Project working Time',
    projectTitle: 'Working Project Title',
     description: 'About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your ProjectsAbout Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects.About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects..',
  },
  {
    title: '4. Work on Pratimaan Portal',
    company: 'Company Name',
    duration: 'Project working Time',
    projectTitle: 'Working Project Title',
     description: 'About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your ProjectsAbout Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects.About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects About Your Projects..',
  }
];
const Employment = () => {
  const [expanded, setExpanded] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [addEducation, setAddEducation] = useState(null);
  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
 const openEditModal = (index) => {
    setEditingIndex(index);
  };

  const closeModal = (index) => {
    setEditingIndex(null);
  };

  const addEducationDetails = (index) => {
    setAddEducation(index);
  }

  const closeAddModal = () => {
    setAddEducation(null);
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-xl-12">
          <div className="dashboard-box">
            <div className="headline d-flex justify-content-between align-items-center">
              <h3>Employment Details</h3>
              <Link className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0" onClick={addEducationDetails}>
                Add Employment <i className="icon-feather-plus" />
              </Link>
            </div>

            <div className="content with-padding padding-bottom-10">
              <div className="row">
                {projects.map((proj, index) => {
                  const isExpanded = expanded[index];
                  const shortText = proj.description.slice(0, 180);
                  const fullText = proj.description;

                  return (
                    <div className="col-xl-12 col-md-6 col-sm-6" key={index}>
                      <div className="utf-submit-field">
                        <h5>{proj.title} <Link onClick={() => openEditModal(index)}>< i className="icon-feather-edit" /></Link></h5>
                        <p><strong>Company:</strong> {proj.company}</p>
                        <p><strong>Duration:</strong> {proj.duration}</p>
                        <p><strong>Title:</strong> {proj.projectTitle}</p>
                        <p>
                          {isExpanded ? fullText : shortText}
                          {fullText.length > 180 && (
                            <>
                              {' '}
                              <Link style={{"color": "#ff8a00"}} onClick={() => toggleReadMore(index)}>
                                {isExpanded ? 'Read Less' : 'Read More'}
                              </Link>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
         {/* Add Modal */}
      {addEducation !== null && (
        <div className="modal-backdrop" style={styles.backdrop}>
          <div className="modal-content" style={styles.modal}>
            <h4>Edit Employment Detail</h4>
            <p><strong>Title:</strong><input type='text'  /></p>
            <p><strong>Company:</strong> <input type='text'  /></p>
            <p><strong>Duration:</strong></p> <input type='text' />
            <p><strong>Description:</strong></p>
            <textarea className="utf-with-border" rows={5}></textarea>
            <div style={{ marginTop: '1rem' }}>
              <button className="button" onClick={closeAddModal}>Close</button>
              <button className="button" style={{ marginLeft: '10px' }}>Save</button>
            </div>
          </div>
        </div>
      )} 
          {/* Edit Modal */}
      {editingIndex !== null && (
        <div className="modal-backdrop" style={styles.backdrop}>
          <div className="modal-content" style={styles.modal}>
            <h4>Edit Employment Detail</h4>
            <p><strong>Title:</strong><input type='text' value={projects[editingIndex].title} /></p>
            <p><strong>Company:</strong> <input type='text' value={projects[editingIndex].company} /></p>
            <p><strong>Duration:</strong></p> <input type='text' value={projects[editingIndex].duration}/>
            <p><strong>Description:</strong></p>
            <textarea
              className="utf-with-border"
              defaultValue={projects[editingIndex].description}
              rows={5}
            ></textarea>
            <div style={{ marginTop: '1rem' }}>
              <button className="button" onClick={closeModal}>Close</button>
              <button className="button" style={{ marginLeft: '10px' }}>Save</button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    width: '600px',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
};
export default Employment;
