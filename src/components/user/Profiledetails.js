import React, { Fragment } from 'react'

const Profiledetails = () => {
    return (
        <Fragment>
            <div className="content with-padding padding-bottom-0">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="row">
                                    <div className="col-xl-5 col-md-3 col-sm-4">
                                        <div className="utf-avatar-wrapper" data-tippy-placement="top" title="Change Profile Picture">
                                            <img className="profile-pic" src="images/user-avatar-placeholder.png" alt />
                                            <div className="upload-button" />
                                            <input className="file-upload" type="file" accept="image/*" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-md-9 col-sm-8">
                                        <div className="utf-submit-field">
                                            <h5>Account Type</h5>
                                            <div className="utf-account-type">
                                                <div>
                                                    <input type="radio" name="utf-account-type-radio" id="freelancer-radio" className="utf-account-type-radio" defaultChecked />
                                                    <label htmlFor="freelancer-radio" title="Employer" data-tippy-placement="top" className="utf-ripple-effect-dark"><i className="icon-material-outline-business-center" /> Employer</label>
                                                </div>
                                                <div>
                                                    <input type="radio" name="utf-account-type-radio" id="employer-radio" className="utf-account-type-radio" />
                                                    <label htmlFor="employer-radio" title="Candidate" data-tippy-placement="top" className="utf-ripple-effect-dark"><i className="icon-material-outline-account-circle" /> Candidate</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 col-sm-6">
                                <div className="utf-submit-field">
                                    <h5>Your Name</h5>
                                    <input type="text" className="utf-with-border" defaultValue="John Williams" />
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 col-sm-6">
                                <div className="utf-submit-field">
                                    <h5>Phone Number</h5>
                                    <input type="text" className="utf-with-border" defaultValue="(+22) 1201 123-456" />
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 col-sm-6">
                                <div className="utf-submit-field">
                                    <h5>Email Address</h5>
                                    <input type="text" className="utf-with-border" defaultValue="demo@example.com" />
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-12 col-sm-12">
                                <div className="utf-submit-field">
                                    <h5>Notes</h5>
                                    <textarea name="notes" className="utf-with-border" cols={20} rows={3} defaultValue={"Lorem Ipsum is simply dummy text of printing and type setting industry Lorem Ipsum been industry standard dummy text ever since."} />
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 col-sm-6">
                                <div className="utf-submit-field">
                                    <h5><i className="icon-brand-facebook" /> Facebook</h5>
                                    <input type="text" className="utf-with-border" defaultValue="https://www.facebook.com/" />
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 col-sm-6">
                                <div className="utf-submit-field">
                                    <h5><i className="icon-brand-twitter" /> Twitter</h5>
                                    <input type="text" className="utf-with-border" defaultValue="https://www.twitter.com/" />
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 col-sm-6">
                                <div className="utf-submit-field">
                                    <h5><i className="icon-brand-linkedin" /> Linkedin</h5>
                                    <input type="text" className="utf-with-border" defaultValue="https://www.google.com/" />
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 col-sm-6">
                                <div className="utf-submit-field">
                                    <h5><i className="icon-brand-google" /> Google</h5>
                                    <input type="text" className="utf-with-border" defaultValue="https://www.linkedin.com/" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="javascript:void(0);" className="button ripple-effect big margin-top-10 margin-bottom-20">Save Changes</a>
            </div>
        </Fragment>
    )
}

export default Profiledetails