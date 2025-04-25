import React, { Fragment } from 'react'
import './footer.css';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Fragment>
                <footer className="main-footer">
                    <strong>Copyright © 2019-{year} <a href="https://pratimaan.nic.in">Pratimaan</a>.</strong>
                    All rights reserved.
                    
                </footer>
   
                <aside className="control-sidebar control-sidebar-dark">
               
                </aside>      
        </Fragment>
    )
}

export default Footer
