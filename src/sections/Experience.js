import React from 'react';
import Section from '../components/Section';
import ZeusLogo from './../resources/experience/zeuslearning_logo.png';
import Zoom from 'react-reveal/Zoom';

import './Experience.css';

export default function Experience(props) {
    return (
        <Section 
            className="experience"
            title="Experience"
            large
            noreveal
        >
            <Zoom>
                <div className="section-box">
                    <div className="company">
                        <img src={ZeusLogo}></img>
                        &nbsp;&nbsp;&nbsp;Zeus Learning Pvt. Ltd.
                    </div>
                    <div className="role">
                        <div className="designation col">
                            Software Engineer
                        </div>
                        <div className="duration col">
                            Sept 2020 - Present
                        </div>
                    </div>
                    <ul className="bullets">
                        <li>
                            Working on an e-learning based digital whiteboard web application as a full stack developer.
                        </li>
                        <li>
                            Took ownership of scaling and refactoring legacy code and turned it into smaller reusable object-oriented code. Assessed and Improved efficiency of various systems by <b>more than 50%</b>.
                        </li>
                        <li>
                            Implemented auto-save feature for all the annotation tools in the Chrome Extension.
                        </li>
                        <li>
                            Designed and introduced Comments feature on pdf viewer and web, with serialization support.
                        </li>
                        <li>
                            Developed a Google Classroom assignment interface in ReactJs. Used Google Classroom API and Google Drive API for fetching the data and communicating with the backend.
                        </li>
                        <li>
                            Planned, designed and developed a pdf viewer application from scratch using Google’s PDFium. Integrated it with the web application, Chrome extension and Google Classroom.
                        </li>
                        <li>
                            Added table support in Graphing Calculator mathematical tool.
                        </li>
                    </ul>
                </div>
            </Zoom>

            <Zoom>
                <div className="section-box">
                        <div className="company">
                            <img src={ZeusLogo} width="18px"></img>
                            &nbsp;&nbsp;&nbsp;Zeus Learning Pvt. Ltd.
                        </div>
                        <div className="role">
                            <div className="designation col">
                                Software Engineer (Internship)
                            </div>
                            <div className="duration col">
                                Aug 2020 - Aug 2020
                            </div>
                        </div>
                    <ul className="bullets">
                        <li>
                            Worked on UI improvements on various forms and dialogs.
                        </li>
                        <li>
                            Tested the various features and fixed the bugs found during testing.
                        </li>
                    </ul>
                </div>
            </Zoom>
        </Section>
    )
}