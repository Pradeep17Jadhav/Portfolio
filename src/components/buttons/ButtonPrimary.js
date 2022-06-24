import React from 'react';
import './ButtonPrimary.css';

export default function ButtonPrimary(props) {
    return (
        <a 
            className="button button-primary"
            href={props.href}
            target={props.bNewTab ? "_blank" : ""}
            id={props.id ? props.id : ""}
            download={props.download ? props.download : false}
        >
            {props.children}
        </a>
    );
}