import React from 'react';
import './ButtonPrimary.css';

export default function ButtonPrimary(props) {
    return (
        <a 
            className="button button-primary"
            href={props.href}
            target={props.bNewTab ? "_blank" : ""}
        >
            {props.children}
        </a>
    );
}