import React from 'react';
import './Section.css';
import Zoom from 'react-reveal/Zoom';

export default function Section(props) {
    const newClassName = "section " + (props.className ? props.className : "");
    const style = props.lightBackground ? {backgroundColor: "#1c1d24"} : {};
    let holderClass = "holder";

    if(props.large)
        holderClass += "-large";
    else if(props.extralarge)
        holderClass += "-extralarge";
    else if(props.fullwidth)
        holderClass += "-fullwidth";

    const content = (
        <div className="content">
            <span className="brackets">{"< "}</span>
            <h1 className="title">
                {props.title}
            </h1>
            <span className="brackets">{" />"}</span>
            
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
            <section className={newClassName}  id={props.id ? props.id : ""} style={style}>
                <div className={holderClass}>
                    {content}
                </div>
            </section>
        )
    }
    else {
        return (
            <section className={newClassName}  id={props.id ? props.id : ""} style={style}>
                <div className={holderClass}>
                    <Zoom>
                        {content}
                    </Zoom>
                </div>
            </section>
        )
    }
};