import React from 'react';
import Section from '../components/Section';
import ZeusLogo from './../resources/experience/zeuslearning_logo.png';
import Zoom from 'react-reveal/Zoom';

import './Experience.css';

export default function Experience(props) {
    const experiances = [{
        company: "Zeus Learning Pvt. Ltd.",
        logo: ZeusLogo,
        designation: "Software Engineer",
        duration: "Sept 2020 - Present",
        summary: [
            "Working on an e-learning based digital whiteboard web application as a full stack developer.",
            "Took ownership of scaling and refactoring legacy code and turned it into smaller reusable object-oriented code. Assessed and Improved efficiency of various systems by more than 50%.",
            "Revamped user experience by building temporary save architecture for unsaved web annotations.",
            "Enhanced saving experience by introducing a scalable auto-save annotation feature in Chrome Extension.",
            "Made teacher-student interaction easier by designing and implementing Comments feature on PDF viewer and websites, with serialization and deserialization support.",
            "Introduced media comments feature by adding voice and screen recording support in the comments.",
            "Developed an Assignment interface using ReactJs to allow interaction with Google Classroom Assignments. Used Google Classroom API and Google Drive API to fetch and store data.",
            "Planned, designed and developed a PDF viewer application from scratch using Google’s PDFium in VanillaJS. Integrated it with the web application, Chrome extension and Google Classroom.",
            "Supported plotting graph using table in Graphing Calculator mathematical tool.",
        ]
    },
    {
        company: "Zeus Learning Pvt. Ltd.",
        logo: ZeusLogo,
        designation: "Software Engineer (Internship)",
        duration: "Aug 2020 - Aug 2020",
        summary: [
            "Worked on UI improvements on various forms and dialogs.",
            "Tested various features and fixed the bugs found during testing."
        ]
    }
    ]
    return (
        <Section
            className="experience"
            id={props.id ? props.id : ""}
            title="Experience"
            extralarge
            noreveal
        >
            {
                experiances.map(exp => {
                    return (
                        <Zoom>
                            <div className="section-box">
                                <div className="company">
                                    <img src={exp.logo} width="18px" alt={exp.company} />
                                    <span className="company-name">{exp.company}</span>
                                </div>
                                <div className="role">
                                    <div className="designation">
                                        {exp.designation}
                                    </div>
                                    <div className="duration">
                                        {exp.duration}
                                    </div>
                                </div>
                                <ul className="bullets">
                                    {
                                        exp.summary.map(item => {
                                            return (
                                                <li>
                                                    {item}
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </Zoom>
                    )
                })
            }
        </Section>
    )
}