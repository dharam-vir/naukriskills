import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Titlebar = () => {
    return (
        <Fragment>
            <div id="titlebar" className="gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Contact Us</h2>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Contact Us</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Titlebar