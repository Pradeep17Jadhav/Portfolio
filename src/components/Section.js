import React from 'react';
import './Section.css';
import Zoom from 'react-reveal/Zoom';

export default function Section(props) {
    const newClassName = "section " + (props.className ? props.className : "");
    const containerClass = "container" + (props.large ? "-large" : "");
    const style = props.lightBackground ? {backgroundColor: "#1c1d24"} : {};
    const content = (
        <div className="content">
            <h1 className="title">
                {props.title}
            </h1>
            
            {
                props.summary ? 
                    <p className="summary">
                        {props.summary}
                    </p>
                : null
            }

            {props.children}
        </div>
    );

    if(props.noreveal) {
        return (
            <section className={newClassName} style={style}>
                <div className={containerClass}>
                    {content}
                </div>
            </section>
        )
    }
    else {
        return (
            <section className={newClassName} style={style}>
                <div className={containerClass}>
                    <Zoom>
                        {content}
                    </Zoom>
                </div>
            </section>
        )
    }
};