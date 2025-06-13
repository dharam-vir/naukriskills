import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import placeholder from "../../assets/images/user-avatar-placeholder.png";
import { useDispatch, useSelector } from 'react-redux';
import { uploadResume, removeResume, uploadResumeToApi, downloadResumeFromApi } from '../../features/resumeSlice';
import resumeHeadline from './resumeHeadline';

function ManageResume() {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const resumeFile = useSelector((state) => state.resume.file);
  const uploading = useSelector((state) => state.resume.uploading);
  const { user } = useSelector((state) => state.auth);
  const error = useSelector((state) => state.resume.error);

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

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="dashboard-box">
          <div className="headline d-flex">
            <div className="col-xl-6">
              <h3>My Profile Details</h3>
            </div>
            <div className="col-xl-6" style={{ textAlign: 'right' }}>
              <Link onClick={downloadResume}>
                <i className="icon-material-outline-business-right" /> Download Resume
              </Link>
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
          <div className="headline d-flex">
            <div className="col-xl-6">
              <h3>Resume Headline</h3>
            </div>
            <div className="col-xl-6" style={{ textAlign: 'right' }}>
              <Link onClick={downloadResume}>
                <i className="icon-material-outline-business-right" /> Edit Resume HeadLine
              </Link>
            </div>
          </div>
          <div className="content with-padding padding-bottom-10">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-6">
                <div className="utf-submit-field datepicker">
                  <h5>Birth Date</h5>
                  <input className="utf-with-border" type="date" />
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-6">
                <div className="utf-submit-field">
                  <h5>Address</h5>
                  <input type="text" className="utf-with-border" placeholder="Address" />
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-6">
                <div className="utf-submit-field">
                  <h5>City</h5>
                  <select className="selectpicker utf-with-border" data-size={7} title="Select City">
                    <option>Allahabad</option>
                    <option>Faizabad</option>
                    <option>Sultanpur</option>
                    <option>Pratapgarh</option>
                    <option>Basti</option>
                  </select>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-6">
                <div className="utf-submit-field">
                  <h5>State</h5>
                  <select className="selectpicker utf-with-border" data-size={7} title="Select State">
                    <option>Allahabad</option>
                    <option>Faizabad</option>
                    <option>Sultanpur</option>
                    <option>Pratapgarh</option>
                    <option>Basti</option>
                  </select>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-6">
                <div className="utf-submit-field">
                  <h5>Country</h5>
                  <select className="selectpicker utf-with-border" data-size={7} title="Select Country">
                    <option>Allahabad</option>
                    <option>Faizabad</option>
                    <option>Sultanpur</option>
                    <option>Pratapgarh</option>
                    <option>Basti</option>
                  </select>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-6">
                <div className="utf-submit-field">
                  <h5>Zip Code</h5>
                  <input type="text" className="utf-with-border" placeholder={+91 - 8750 - 299 - 299} />
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-6">
                <div className="utf-submit-field">
                  <h5>Father Name</h5>
                  <input type="text" className="utf-with-border" placeholder="Father Name" />
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-6">
                <div className="utf-submit-field">
                  <h5>Hobbies(With Comma)</h5>
                  <input type="text" className="utf-with-border" placeholder="Hobbies(With Comma)" />
                </div>
              </div>
              <div className="col-xl-12 col-md-12 col-sm-12">
                <div className="utf-submit-field">
                  <h5>Job Description</h5>
                  <textarea cols={20} rows={2} className="utf-with-border" placeholder="Job Description..." defaultValue={""} />
                </div>
              </div>
            </div>
            <Link
              onClick={handleUpload}
              className={`button ripple-effect big margin-top-10 margin-bottom-20 ${uploading ? 'disabled' : ''
                }`}
            >
              <i className="icon-material-outline-business-center" />{' '}
              {uploading ? 'Uploading...' : 'Save Changes'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageResume;
