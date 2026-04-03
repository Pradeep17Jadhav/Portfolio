import React from 'react';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import Section from '../components/Section';
import ResumeDownloadHref from '../resources/resume/Resume_Pradeep.pdf'

import './AboutMe.css';

export default function AboutMe(props) {
    const title = "About Me";
    const summary = "I’m a Software Engineer with 5.9 years of experience in full-stack development, specializing in building modern, scalable web applications. I’ve worked at product-based companies like Reltio, Informatica, and Zeus Learning, where I contributed to developing high-quality products. My expertise includes ReactJS, JavaScript, TypeScript, and Node.js, with a strong focus on writing clean, maintainable, and efficient code. I’m passionate about continuously learning new technologies and tools to stay aligned with evolving industry trends.";
    const viewResumeHref = "https://drive.google.com/file/d/1tvMtXHXbB6lxmnAvBdnkePjka7Bp5tzo/view?usp=sharing";

    return (
        <Section
            className="about-me"
            id={props.id ? props.id : ""}
            title={title}
            summary={summary}
        >
            <ButtonPrimary
                bNewTab={true}
                href={viewResumeHref}
                id="btn-view-resume"
            >
                View Resume
            </ButtonPrimary>

            <ButtonPrimary
                bNewTab={true}
                href={ResumeDownloadHref}
                id="btn-download-resume"
                download="Pradeep_Jadhav_Resume.pdf"
            >
                Download Resume
            </ButtonPrimary>
        </Section>
    )
}