import React from "react";
import './Banner.css';


function Banner ({ imageUrl, alt }) {

    return(
        <div className="banner">
            <img src={imageUrl} alt={alt} />
        </div>
    )
}

export default Banner;