import Intro from './../sections/Intro';
import AboutMe from './../sections/AboutMe';
import Experience from './../sections/Experience';
import Projects from './../sections/Projects.js';
import Footer from './../components/Footer';

import { Fragment } from "react";

export default function Homepage() {
	return (
        <Fragment>
            <Intro
                name={"Pradeep Jadhav"}
            />
            <AboutMe />
            <Experience />
            <Projects />
			<Footer />
        </Fragment>
	);
}