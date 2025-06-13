import React, { Fragment } from 'react'

const KeySkills = () => {
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
                      <h5>Job Skills <i className="help-icon" data-tippy-placement="top" title="Maximum of 6 Skills" /></h5>
                      <div className="keywords-container">
                        <div className="keyword-input-container">
                          <input type="text" className="keyword-input utf-with-border" placeholder="CSS, Photoshop, Js, Bootstrap" />
                          <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add" /></button>
                        </div>
                        <div className="keywords-list">{/* keywords go here */}</div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-12 col-sm-12">
                    <div className="utf-submit-field">
                      <h5>Upload Resume</h5>
                      <div className="uploadButton margin-top-15 margin-bottom-30">
                        <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                        <label className="uploadButton-button ripple-effect" htmlFor="upload">Upload Resume</label>
                        <span className="uploadButton-file-name">Upload Resume (Docx, Doc, PDF) File.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-12 col-sm-12">
                    <div className="utf-submit-field">
                      <h5>Career Description</h5>
                      <textarea cols={40} rows={2} className="utf-with-border" placeholder="Career Description..." defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="dashboard-box">
              <div className="headline">
                <h3>Key Skills &amp; Experience</h3>
              </div>
              <div className="content with-padding padding-bottom-10">
                <div className="row">
                  <div className="col-xl-3 col-md-6 col-sm-6">
                    <div className="utf-submit-field datepicker">
                      <h5>Skills</h5>
                                            <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>

                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Version</h5>
                                            <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>

                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Last Used</h5>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>

                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6">
                    <div className="utf-submit-field">
                      <h5>Experience</h5>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                      <p>Allahabad</p>
                    </div>
                  </div>                                
                </div>
                  <div className="utf-centered-button"> 
                    <a href="javascript:void(0);" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0">Submit Jobs <i className="icon-feather-plus" /></a>
                  </div>
              </div>
            </div>
          </div>         
        </div>       
    </Fragment>
  )
}

export default KeySkills