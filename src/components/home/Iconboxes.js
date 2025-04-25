import React from 'react';

const Iconboxes = () => {
    return (
        <section className="section padding-top-65 padding-bottom-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                            <span>Business Support Service</span>
                            <h3>How It Works?</h3>
                            <div className="utf-headline-display-inner-item">Business Support Service</div>
                            <p className="utf-slogan-text">
                                Lorem Ipsum is simply dummy text printing and type setting industry. Lorem Ipsum has been the industry standard dummy text ever since an unknown printer took a galley.
                            </p>
                        </div>
                    </div>

                    {[
                        { icon: "icon-line-awesome-user-secret", title: "User Register", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." },
                        { icon: "icon-line-awesome-user-plus", title: "Create Account", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." },
                        { icon: "icon-line-awesome-edit", title: "Search Jobs", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." },
                        { icon: "icon-line-awesome-save", title: "Save & Apply", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." }
                    ].map((box, index) => (
                        <div className="col-xl-3 col-md-6 col-sm-12" key={index}>
                            <div className={`icon-box ${index < 2 ? "with-line" : ""}`}>
                                <div className="utf-icon-box-circle">
                                    <div className="utf-icon-box-circle-inner">
                                        <i className={box.icon}></i>
                                    </div>
                                </div>
                                <h3>{box.title}</h3>
                                <p>{box.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Iconboxes;
