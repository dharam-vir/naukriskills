<<<<<<< HEAD
import React from "react"
export default function Loader({ showLoader }) {
    if (showLoader) {
        return (
            <div class="preloader">
                <div class="utf-preloader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
    else {
        return
    }

}
=======
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
>>>>>>> 1940ff8529de678b03eebe85d12aafcfc1dc35c8
