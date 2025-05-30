import React, { Fragment, useState } from 'react';

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState('');

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Create URL to preview the file
    const url = URL.createObjectURL(uploadedFile);
    setFileURL(url);
  };

  return (
    <Fragment>
        <div className="row">
          <div className="col-xl-12">
            <div className="dashboard-box margin-top-0">
              <div className="headline">
                <h3>Manage Resume List</h3>
              </div>
              <div className="content">
                <ul className="utf-dashboard-box-list">
                  <li>
                    <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                      <div className="utf-manage-resume-overview-aera-inner">
                        <div className="utf-manage-resume-avatar">
                          <a href="#"><img src="images/user_big_1.jpg" alt /></a>
                        </div>
                        <div className="utf-manage-resume-item">
                          <h4><a href="#">John Williams</a><span className="dashboard-status-button green"><i className="icon-material-outline-business-center" /> Full Time</span></h4>
                          <span className="utf-manage-resume-detail-item"><a href="#"><i className="icon-feather-mail" /> demo@example.com</a></span>
                          <span className="utf-manage-resume-detail-item"><i className="icon-feather-phone" /> (+12) 0123-654-987</span>
                          <span className="utf-manage-resume-detail-item"><a href="#"><i className="icon-material-outline-location-on" /> 2767 Concord Street</a></span>
                          <div className="utf-buttons-to-right">
                            <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail" /> Send</a>
                            <a href="#" className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top"><i className="icon-feather-download" /></a>
                            <a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                      <div className="utf-manage-resume-overview-aera-inner">
                        <div className="utf-manage-resume-avatar">
                          <a href="#"><img src="images/user_big_2.jpg" alt /></a>
                        </div>
                        <div className="utf-manage-resume-item">
                          <h4><a href="#">John Williams</a><span className="dashboard-status-button yellow"><i className="icon-material-outline-business-center" /> Part Time</span></h4>
                          <span className="utf-manage-resume-detail-item"><a href="#"><i className="icon-feather-mail" /> demo@example.com</a></span>
                          <span className="utf-manage-resume-detail-item"><i className="icon-feather-phone" /> (+12) 0123-654-987</span>
                          <span className="utf-manage-resume-detail-item"><a href="#"><i className="icon-material-outline-location-on" /> 2767 Concord Street</a></span>
                          <div className="utf-buttons-to-right">
                            <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail" /> Send</a>
                            <a href="#" className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top"><i className="icon-feather-download" /></a>
                            <a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                      <div className="utf-manage-resume-overview-aera-inner">
                        <div className="utf-manage-resume-avatar">
                          <a href="#"><img src="images/user_big_3.jpg" alt /></a>
                        </div>
                        <div className="utf-manage-resume-item">
                          <h4><a href="#">John Williams</a><span className="utf-verified-badge" data-tippy-placement="top" title="Verified Employer" data-tippy /><span className="dashboard-status-button green"><i className="icon-material-outline-business-center" /> Full Time</span></h4>
                          <span className="utf-manage-resume-detail-item"><a href="#"><i className="icon-feather-mail" /> demo@example.com</a></span>
                          <span className="utf-manage-resume-detail-item"><i className="icon-feather-phone" /> (+12) 0123-654-987</span>
                          <span className="utf-manage-resume-detail-item"><a href="#"><i className="icon-material-outline-location-on" /> 2767 Concord Street</a></span>
                          <div className="utf-buttons-to-right">
                            <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail" /> Send</a>
                            <a href="#" className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top"><i className="icon-feather-download" /></a>
                            <a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                      <div className="utf-manage-resume-overview-aera-inner">
                        <div className="utf-manage-resume-avatar">
                          <a href="#"><img src="images/user_big_1.jpg" alt /></a>
                        </div>
                        <div className="utf-manage-resume-item">
                          <h4><a href="#">John Williams</a><span className="dashboard-status-button yellow"><i className="icon-material-outline-business-center" /> Part Time</span></h4>
                          <span className="utf-manage-resume-detail-item"><a href="#"><i className="icon-feather-mail" /> demo@example.com</a></span>
                          <span className="utf-manage-resume-detail-item"><i className="icon-feather-phone" /> (+12) 0123-654-987</span>
                          <span className="utf-manage-resume-detail-item"><a href="#"><i className="icon-material-outline-location-on" /> 2767 Concord Street</a></span>
                          <div className="utf-buttons-to-right">
                            <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail" /> Send</a>
                            <a href="#" className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top"><i className="icon-feather-download" /></a>
                            <a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                      <div className="utf-manage-resume-overview-aera-inner">
                        <div className="utf-manage-resume-avatar">
                          <a href="#"><img src="images/user_big_2.jpg" alt /></a>
                        </div>
                        <div className="utf-manage-resume-item">
                          <h4><a href="#">John Williams</a><span className="utf-verified-badge" data-tippy-placement="top" title="Verified Employer" data-tippy /><span className="dashboard-status-button yellow"><i className="icon-material-outline-business-center" /> Part Time</span></h4>
                          <span className="utf-manage-resume-detail-item"><a href="#"><i className="icon-feather-mail" /> info@fairsjob.com</a></span>
                          <span className="utf-manage-resume-detail-item"><i className="icon-feather-phone" /> (+91) 8750-299-299</span>
                          <span className="utf-manage-resume-detail-item"><a href="#"><i className="icon-material-outline-location-on" /> 2767 Concord Street</a></span>
                          <div className="utf-buttons-to-right">
                            <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail" /> Send</a>
                            <a href="#" className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top"><i className="icon-feather-download" /></a>
                            <a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Pagination */}
            <div className="clearfix" />
            <div className="utf-pagination-container-aera margin-top-20 margin-bottom-0">
              <nav className="pagination">
                <ul>
                  <li className="utf-pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left" /></a></li>
                  <li><a href="#" className="ripple-effect current-page">1</a></li>
                  <li><a href="#" className="ripple-effect">2</a></li>
                  <li><a href="#" className="ripple-effect">3</a></li>
                  <li className="utf-pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right" /></a></li>
                </ul>
              </nav>
            </div>
            <div className="clearfix" />
          </div>
        </div>
    </Fragment>
    // <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto">
    //   <h2 className="text-xl font-bold mb-4">Upload Your Resume</h2>
    //   <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />

    //   {file && (
    //     <div className="mt-4">
    //       <p><strong>File Name:</strong> {file.name}</p>
    //       <p><strong>File Type:</strong> {file.type}</p>
    //       {file.type === 'application/pdf' && (
    //         <iframe
    //           src={fileURL}
    //           title="Resume Preview"
    //           width="100%"
    //           height="500px"
    //           className="mt-4 border"
    //         />
    //       )}
    //       {file.type !== 'application/pdf' && (
    //         <a href={fileURL} download className="text-blue-600 underline mt-2 block">
    //           Download Resume
    //         </a>
    //       )}
    //     </div>
    //   )}
    // </div>
  );
};

export default ResumeUploader;
