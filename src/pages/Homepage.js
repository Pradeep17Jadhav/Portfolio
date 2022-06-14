import Intro from './../sections/Intro';
import AboutMe from './../sections/AboutMe';
import Experience from './../sections/Experience';
import Projects from './../sections/Projects.js';
import Footer from './../components/Footer';

import { Fragment, useEffect } from "react";

export default function Homepage() {
    const arrJumpScrollSections = ["intro", "aboutme"];

    useEffect(() => {
        setTimeout(() => {
            for (let i = 0; i < arrJumpScrollSections.length; i++) {
                let prevSectionElement = i >= 1 ? document.getElementById(arrJumpScrollSections[i-1]) : null;
                let currSectionElement = document.getElementById(arrJumpScrollSections[i]);
                let nextSectionElement = i < arrJumpScrollSections.length-1 ? document.getElementById(arrJumpScrollSections[i+1]) : null;
                currSectionElement.onwheel = function scroll(e) {
                    let top = 0;
                    let propogate = false;

                    if(e.deltaY < 0) {
                        if(prevSectionElement) {
                            let currEleTop = currSectionElement.offsetTop;
                            let currTop = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);

                            if(currEleTop >= currTop)
                                top = prevSectionElement.offsetTop;
                            else
                                propogate = true;
                        }
                        else
                            propogate = true;
                    }
                    else {
                        if(nextSectionElement) {
                            top = nextSectionElement.offsetTop;
                        }
                        else
                            propogate = true;
                    }
                    
                    if(!propogate) {
                        window.scrollTo({
                            top: top,
                            behavior: "smooth"
                        });
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            }
        }, 100);
    }, []);

    return (
        <Fragment>
            <Intro
                name={"Pradeep Jadhav"}
                id="intro"
            />
            <AboutMe id="aboutme" />
            <Experience id="experience" />
            <Projects id="projects" />
            <Footer />
        </Fragment>
    );
}