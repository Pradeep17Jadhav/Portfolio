import Intro from './../sections/Intro';
import AboutMe from './../sections/AboutMe';
import Experiance from './../sections/Experiance';
import { Fragment } from "react";

export default function Homepage() {
	return (
        <Fragment>
            <Intro
                name={"Pradeep Jadhav"}
            />
            <AboutMe />
            <Experiance />
        </Fragment>
	);
}