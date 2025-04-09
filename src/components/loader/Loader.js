import React, { Fragment } from 'react'
import AdminLTELogo from '../../../public/dist/img/AdminLTELogo.png';

const Loader = () => {
    return (
        <Fragment>
            <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__shake" src={AdminLTELogo} alt="AdminLTELogo" height={60} width={60} />
            </div>
        </Fragment>
    )
}

export default Loader
