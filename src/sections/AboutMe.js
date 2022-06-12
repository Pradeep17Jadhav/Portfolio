import React from 'react';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import Section from '../components/Section';
import './AboutMe.css';

export default function AboutMe(props) {
    const title = "About Me";
    const summary = `Software Engineer with 2 years of experience as a full stack developer in design, development and maintenance of an e-learning project. A result-oriented professional with the ability to work effectively & efficiently in a fast-paced environment. Eager to learn new technologies and methodologies.`;
    return (
        <Section 
            className="about-me" 
            title={title}
            summary={summary}
            lightBackground
        >
            <ButtonPrimary 
                text="View Resume"
                bNewTab={true}
                href="https://drive.google.com/file/d/1JB5WU_Fy3hs5PGjc2TDiqshy04SP0Llj/view?usp=sharing"
            />
            <ButtonPrimary 
                text="Download Resume"
                bNewTab={true}
                href="https://drive.google.com/file/d/1JB5WU_Fy3hs5PGjc2TDiqshy04SP0Llj/view?usp=sharing"
            />
        </Section>
    )
}