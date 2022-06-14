import React from "react";

import "./BoxWithInfo.css";

export default function BoxWithInfo(props) {
    return (
        <div className={props.className ? "boxwithinfo " + props.className : "boxwithinfo"}>
            <div className="boxwithinfo-content">
                <div className="boxwithinfo-info">
                    <h5 className="boxwithinfo-title">
                        <a href={props.href} target="_blank">
                            {props.title}
                        </a>
                    </h5>
                    <span>
                        {props.tagline}
                    </span>
                </div>

                <a href={props.href} className="link">
                    <img className="image" src={props.image} alt={props.title} />
                </a>

                <p className="boxwithinfo-desc">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}