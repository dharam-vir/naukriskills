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