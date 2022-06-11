import React from 'react';
import './ButtonPrimary.css';

export default function ButtonPrimary(props) {
    return (
        <a 
            className="btn btn-primary"
            href={props.href}
            target={props.bNewTab ? "_blank" : ""}
        >
            {props.text}
        </a>
    );
}