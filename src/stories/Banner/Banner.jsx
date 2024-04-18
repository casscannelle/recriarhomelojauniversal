import React from "react";
import './Banner.css';


export default function Banner ({ imageUrl, alt }) {

    return(
        <div className="banner">
            <img src={imageUrl} alt={alt} />
        </div>
    )
}
