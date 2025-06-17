import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import placeholder from "../../assets/images/user-avatar-placeholder.png";
import { useDispatch, useSelector } from 'react-redux';
import { uploadResume, removeResume, uploadResumeToApi, downloadResumeFromApi } from '../../features/resumeSlice';

function ManageResume() {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const resumeFile = useSelector((state) => state.resume.file);
  const uploading = useSelector((state) => state.resume.uploading);
  const { user } = useSelector((state) => state.auth);
  const error = useSelector((state) => state.resume.error);
  const[resumeHeadline, setResumeHeadline] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(uploadResume(file));
      toast.success(`File selected: ${file.name}`);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (resumeFile) {
      try {
        await dispatch(uploadResumeToApi(resumeFile)).unwrap();
        toast.success(`Resume uploaded: ${resumeFile.name}`);
      } catch (err) {
        toast.error(`Upload failed: ${err}`);
      }
    } else {
      toast.error('Please select a resume file to upload.');
    }
  };

  const downloadResume = () => {
    dispatch(downloadResumeFromApi(user.id));
    toast.info('Download resume Successfully.');
  };

  const removeFile = () => {
    dispatch(removeResume());

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    toast.success('Resume file removed.');
  };

  const updateHeadline = () =>{
    setResumeHeadline(!resumeHeadline);
  }

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="dashboard-box">
          <div className="headline d-flex">
            <div className="col-xl-6">
              <h3>My Profile Details</h3>
            </div>
            <div className="col-xl-6" style={{ textAlign: 'right' }}>
              <Link onClick={downloadResume} style={{"color":"white"}}><i className="icon-material-outline-business-right" /> Download Resume </Link>
            </div>
          </div>

          <div className="content with-padding padding-bottom-10">
            <div className="row">
              <div className="col-xl-12">
                <div className="row">
                  <div className="col-xl-9 col-md-3 col-sm-4">
                    <div
                      className="utf-avatar-wrapper"
                      onClick={handleImageClick}
                      data-tippy-placement="top"
                      title="Upload Resume"
                      style={{ height: 166, cursor: 'pointer' }}
                    >
                      <img
                        className="profile-pic"
                        src={placeholder}
                        alt="placeholder"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div className="upload-button" />
                      <input
                        className="file-upload form-control mb-2"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        ref={fileInputRef}
                      />
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-9 col-sm-8">
                    <div className="utf-submit-field">
                      <div className="utf-account-type">
                        {resumeFile && (
                          <p>
                            <strong>File Name:</strong> {resumeFile.name} &nbsp;
                            <Link onClick={removeFile}>Remove Resume</Link>
                          </p>
                        )}

                        <Link
                          onClick={handleUpload}
                          className={`button ripple-effect big margin-top-10 margin-bottom-20 ${uploading ? 'disabled' : ''
                            }`}
                        >
                          <i className="icon-material-outline-business-center" />{' '}
                          {uploading ? 'Uploading...' : 'Save Changes'}
                        </Link>

                        {error && <p className="text-danger mt-2">Error: {error}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="dashboard-box">
          <div className="headline d-flex justify-content-between align-items-center">
            <h3>Resume Headline</h3>
            <Link onClick={updateHeadline} style={{"color":"white"}}>{!resumeHeadline ? "Updated" : "Close"}</Link>      
        </div>
        {resumeHeadline ? (
          <div className="content with-padding padding-bottom-10">
          <div className="row">
            <div className="col-xl-12 col-md-12 col-sm-12">
              <div className="utf-submit-field">
                <h5>Resume Headline</h5>
                <textarea cols={20} rows={2} className="utf-with-border" placeholder="Resume Headline ..." defaultValue={""} />
              </div>
            </div>
          </div>
          <Link onClick={handleUpload} className={`button margin-top-10 margin-bottom-20 ${uploading ? 'disabled' : ''}`} >{uploading ? 'Uploading...' : 'Save Changes'}</Link>
        </div>
        ) : (          
          <div>dszdasdasda</div>
        )}
       
      </div>
    </div>
    </div >
  );
}

export default ManageResume;
