import React from 'react';
import Section from '../components/Section';
import ZeusLogo from './../resources/experience/zeuslearning_logo.png';
import InformaticaLogo from './../resources/experience/infa_logo.png';
import ReltioLogo from './../resources/experience/reltio_logo.png';
import { motion } from "framer-motion";

import './Experience.css';

export default function Experience(props) {
    const experiances = [
        {
            company: "Reltio",
            logo: ReltioLogo,
            designation: "UI Developer (SDE2)",
            duration: "Nov 2022 - Dec 2023",
            summary: ["Working with the UI Core team as a frontend developer. Tech-stack: ReactJs, Typescript, Redux, MaterialUI.",
                "Migrated Quick Filters panel to reusable library and integrated with FERN initiative.",
                "Single handedly built the architecture to migrate the whole project from MUI Styles to CSS modules.",
                "Played an active role in developing the Segmentation feature from scratch. Built core modules in a micro-frontend architecture and helped deliver ahead of schedule.",
                "Enabled working on sensitive data by implementing data masking for PII attributes in the entire MDM UI. Worked extensively on Micro Frontend, Redux Saga, Context, Reducer and Custom hooks.",
                "Improved History Slices feature by implementing a highly optimized approach for data unmasking.",
                "Served as a Scrum Master for the 1.2 years, leading Agile processes and managing team dynamics.",
                "Contributed to the Bulk Match by adding new features, optimizing performance and enhancing usability.",
                "Delivered multiple features in RIA - AI Chatbot - Threads, conversation history, search result table mode.",
                "Made relationships trustworthy by implementing Autovoting possibility in entity relationships.",
                "Stabilized the codebase by writing tests in RTL and Jest, and migrated old tests from Enzyme"]
        },
        {
            company: "Informatica",
            logo: InformaticaLogo,
            designation: "Software Engineer (SDE2)",
            duration: "Nov 2022 - Dec 2023",
            summary: [
                "Worked on MDM Cloud Product 360 product.Tech - stack: ReactJs, Typescript, Java Springboot.",
                "Contributed in design, UI/UX and development of Category Filtering using React and Typescript, while also strengthening product stability by writing Jest, RTL unit tests and documenting the architecture.",
                "Enhanced user accessibility by working on the Sequential Edit feature in ReactJs, which enables users to work on multiple records simultaneously. Wrote 40+ E2E tests to cover the feature.",
                "Contributed to write a highly optimized logic in Java for Dynamic Fields Inheritance, capable of calculating inheritance for up to 5 million records simultaneously.",
                "Enabled preview of inheritance through the development of a DFD Preview API in Java, Spring boot, providing users the ability to visualize inheritance on UI, without actually performing the inheritance.",
            ]
        }, {
            company: "Zeus Learning",
            logo: ZeusLogo,
            designation: "Software Engineer",
            duration: "Aug 2020 - Present",
            summary: [
                "Working on an e-learning based digital whiteboard web application “Annotate” as a full stack developer. Tech-stack used: Javascript ES6+, C#, ReactJs, NodeJS, PHP and MySQL.",
                "Planned, designed and developed a PDF viewer application from scratch using Google’s PDFium in VanillaJS. Integrated it with the web application, Chrome extension and Google Classroom.",
                "Developed an Assignment interface using ReactJs to allow interaction with Google Classroom Assignments. Used Google Classroom API and Google Drive API to fetch and store data.",
                "Made teacher-student interaction easier by designing and implementing Comments feature on Chrome extension, for PDF viewer and websites, with serialization and deserialization support.",
                "Introduced media comment feature by adding voice, video and screen recording support in the comments.",
                "Revamped user experience by building temporary save architecture for unsaved web annotations.",
                "Enhanced saving experience by introducing a scalable auto-save annotation feature in Chrome Extension.",
                "Designed and developed Web Whiteboard feature to provide easier access to the annotations.",
                "Supported plotting graph from tables using C#, in the Graphing Calculator mathematical tool.",
                "Took ownership of scaling and refactoring legacy code and turned it into smaller reusable object-oriented code. Assessed and Improved efficiency of various systems by more than 50%.",
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
                experiances.map((exp, index) => {
                    return (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            key={index}
                        >
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
                                        exp.summary.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    {item}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </motion.div>
                    )
                })
            }
        </Section>
    )
}