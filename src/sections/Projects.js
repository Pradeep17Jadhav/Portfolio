import React from 'react';
import Section from '../components/Section';
import Fade from 'react-reveal/Fade';
import GithubImage from './../resources/images/github.jpg';

import './Projects.css';
import BoxWithInfo from '../components/BoxWithInfo';

export default function Projects(props) {
    let projectKey = 0;
    const arrProjects = [
        {
            title: "Ping Chatroom",
            tagline: "room chat application",
            image: GithubImage,
            desc: "Ping is a group chat application built using WebSocket in VanillaJs, ReactJs, NodeJs, Express. Multiple people can chat after joining the room.",
            href: "https://github.com/Pradeep17Jadhav/Ping/"
        },
        {
            title: "Typing Speed Challenge",
            tagline: "game",
            image: GithubImage,
            desc: "A simple typing speed challenge game built using ReactJs. User can challenge in sorted and random order",
            href: "https://github.com/Pradeep17Jadhav/TypingSpeedChallenge/"
        },
        {
            title: "Travelhood",
            tagline: "tours & travels",
            image: GithubImage,
            desc: "A responsive website for tours and travels, developed using ReactJs, NodeJs, MongoDB Atlas.",
            href: "https://github.com/Pradeep17Jadhav/Travelhood/"
        }
    ];


    return (
        <Section 
            className="projects"
            id={props.id ? props.id : ""}
            title="Projects"
            extralarge
            noreveal
            lightBackground
        >
            <div className="container projects">

                <div className="row">
                    {
                        arrProjects.map((project, index)=> {
                            return (
                                <Fade left key={index}>
                                    <div className="col-12 col-lg-4 col-md-6 col-sm-6 col-xs-12" key={projectKey++}>
                                        <BoxWithInfo
                                            title={project.title}
                                            tagline={project.tagline}
                                            image={project.image}
                                            desc={project.desc}
                                            href={project.href}
                                            tooltip={"Click to open project on Github"}
                                        >
                                        </BoxWithInfo>
                                    </div> 
                                </Fade>
                            );
                        })
                    }
                </div>
            </div>
        </Section>
    )
}