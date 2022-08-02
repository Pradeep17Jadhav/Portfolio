import Intro from './../sections/Intro';
import AboutMe from './../sections/AboutMe';
import Experience from './../sections/Experience';
import Projects from './../sections/Projects.js';
import Skills from './../sections/Skills.js';
import Certificates from './../sections/Certificates.js';
import Footer from './../components/Footer';

import './Homepage.css';

import { Fragment, useEffect } from "react";

export default function Homepage() {
    return (
        <Fragment>
            <Intro
                name={"Pradeep Jadhav"}
                id="intro"
            />
            <AboutMe id="aboutme" />
            <Skills id="skills" />
            <Experience id="experience" />
            <Projects id="projects" />
            <Certificates id="certificates" />
            <Footer />
        </Fragment>
    );
}