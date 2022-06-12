import React from 'react';
import './Section.css';
import Zoom from 'react-reveal/Zoom';

export default function Section(props) {
    const newClassName = "section " + (props.className ? props.className : "");
    return (
        <section className={newClassName}>
            <div className="container">
                <Zoom>
                    <div className="content">
                        <h1 className="title">
                            {props.title}
                        </h1>
                        
                        <p className="summary">
                            {props.summary}
                        </p>

                        {props.children}
                    </div>
                </Zoom>
            </div>

        </section>
    )
};