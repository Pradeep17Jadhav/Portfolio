import Intro from './../sections/Intro';
import AboutMe from './../sections/AboutMe';
import { Fragment } from "react";

export default function Homepage() {
	return (
        <Fragment>
            <Intro
                name={"Pradeep Jadhav"}
            />
            <AboutMe />
        </Fragment>
	);
}