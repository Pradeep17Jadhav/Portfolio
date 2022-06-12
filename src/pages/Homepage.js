import Intro from './../sections/Intro';
import AboutMe from './../sections/AboutMe';
import Experience from '../sections/Experience';
import { Fragment } from "react";

export default function Homepage() {
	return (
        <Fragment>
            <Intro
                name={"Pradeep Jadhav"}
            />
            <AboutMe />
            <Experience />
        </Fragment>
	);
}