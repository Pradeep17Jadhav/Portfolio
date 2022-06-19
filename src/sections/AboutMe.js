import React from 'react';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import Section from '../components/Section';
import './AboutMe.css';

export default function AboutMe(props) {
    const title = "About Me";
    const summary = "Software Engineer with 2 years of experience as a full stack developer in design, development and maintenance of an e-learning project. Worked extensively on Javascript, PHP, SQL to write modern, clean and scalable code. A result-oriented professional with the ability to work effectively and efficiently in a fast-paced environment.";
    const viewResumeHref = "https://drive.google.com/file/d/1JB5WU_Fy3hs5PGjc2TDiqshy04SP0Llj/view?usp=sharing";
    const downloadResumeHref = "https://drive.google.com/file/d/1JB5WU_Fy3hs5PGjc2TDiqshy04SP0Llj/view?usp=sharing";
    return (
        <Section 
            className="about-me" 
            id={props.id ? props.id : ""}
            title={title}
            summary={summary}
            lightBackground
        >
            <ButtonPrimary
                bNewTab={true}
                href={viewResumeHref}
            >
                View Resume
            </ButtonPrimary>

            <ButtonPrimary
                bNewTab={true}
                href={downloadResumeHref}
            >
                Download Resume
            </ButtonPrimary>
        </Section>
    )
}