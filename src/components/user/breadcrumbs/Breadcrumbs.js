import React, { Fragment } from 'react'

const Breadcrumbs = () => {
    return (
        <Fragment>
            <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
                <div className="row">
                    <div className="col-xl-12">
                        <h3>Dashboard</h3>
                        <nav id="breadcrumbs">
                            <ul>
                                <li><a href="/users/dashboard">Home</a></li>
                                <li>Dashboard</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Breadcrumbs