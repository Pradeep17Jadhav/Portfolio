import React from 'react';
import './Intro.css';
import Social from '../components/Social'
import TypedText from '../components/TypedText'

export default function Intro(props) {
    return (
        <section className="intro">
            <div id="particles-js"></div>
                <div className="container">
                    <div className="info">
                        <div>
                            <h1 className="name">
                                {props.name}
                            </h1>
                            <TypedText />
                            <Social />
                        </div>
                    </div>
                </div>
            
        </section>
    );
}