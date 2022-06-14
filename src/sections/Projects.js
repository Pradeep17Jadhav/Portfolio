import React from 'react';
import Section from '../components/Section';
import Zoom from 'react-reveal/Zoom';

import './Projects.css';
import BoxWithInfo from '../components/BoxWithInfo';

export default function Projects(props) {
    let projectKey = 0;
    const arrProjects = [
        {
            title: "Ping Chatroom",
            tagline: "room chat application",
            image: "https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg",
            desc: "Ping is a group chat application built using WebSocket in VanillaJs, ReactJs, NodeJs, Express. Multiple people can chat after joining the room.",
            href: "https://github.com/Pradeep17Jadhav/Ping/"
        },
        {
            title: "Typing Speed Challenge",
            tagline: "game",
            image: "https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg",
            desc: "A simple typing speed challenge game built using ReactJs. User can challenge in sorted and random order",
            href: "https://github.com/Pradeep17Jadhav/TypingSpeedChallenge/"
        },
        {
            title: "Travelhood",
            tagline: "tours & travels",
            image: "https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg",
            desc: "A responsive website for tours and travels, developed using ReactJs, NodeJs, MongoDB Atlas.",
            href: "https://github.com/Pradeep17Jadhav/Travelhood/"
        }
    ];


    return (
        <Section 
            className="projects"
            title="Projects"
            extralarge
            noreveal
            lightBackground
        >
            <div className="container projects">

                <div className="row">
                    {
                        arrProjects.map(project => {
                            return (
                                <div className="col-12 col-lg-4 col-md-6 col-sm-6 col-xs-12" key={projectKey++}>
                                    <BoxWithInfo
                                        title={project.title}
                                        tagline={project.tagline}
                                        image={project.image}
                                        desc={project.desc}
                                        href={project.href}
                                    >
                                    </BoxWithInfo>
                                </div> 
                            );
                        })
                    }
                </div>
            </div>
        </Section>
    )
}