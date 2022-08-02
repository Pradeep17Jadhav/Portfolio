import React, { Fragment } from 'react';
import Section from '../components/Section';
import Zoom from 'react-reveal/Zoom';

import './Skills.css';

export default function Skills(props) {
    const arrSkills = [
        {skillName: "C", logoSrc: require("./../resources/images/skills/C.webp")},
        {skillName: "C++", logoSrc: require("./../resources/images/skills/CPP.webp")},
        {skillName: "C#", logoSrc: require("./../resources/images/skills/CS.webp")},
        {skillName: "Python", logoSrc: require("./../resources/images/skills/Python.webp")},
        {skillName: "Java", logoSrc: require("./../resources/images/skills/Java.webp")},
        {skillName: "HTML", logoSrc: require("./../resources/images/skills/HTML.webp")},
        {skillName: "CSS", logoSrc: require("./../resources/images/skills/CSS.webp")},
        {skillName: "Javascript", logoSrc: require("./../resources/images/skills/Javascript.webp")},
        {skillName: "ReactJs", logoSrc: require("./../resources/images/skills/ReactJs.webp")},
        {skillName: "NodeJs", logoSrc: require("./../resources/images/skills/NodeJs.webp")},
        {skillName: "PHP", logoSrc: require("./../resources/images/skills/PHP.webp")},
        {skillName: "SQL", logoSrc: require("./../resources/images/skills/SQL.webp")},
        {skillName: "MongoDB", logoSrc: require("./../resources/images/skills/MongoDB.webp")},
        {skillName: "Git", logoSrc: require("./../resources/images/skills/Git.webp")},
        {skillName: "Bootstrap", logoSrc: require("./../resources/images/skills/Bootstrap.webp")},
        {skillName: "jQuery", logoSrc: require("./../resources/images/skills/jQuery.webp")},
    ];

    return (
        <Section 
            className="skills" 
            id={props.id ? props.id : ""}
            title={"Skills"}
            extralarge
            lightBackground
        >
            <Zoom>
                <div className="section-box">
                    <div className="skill-set">
                        {
                            arrSkills.map((skill, index) => {
                                return (
                                    <div className="skill-item" key={index}>
                                        <div className="skill-logo">
                                            <img src={skill.logoSrc} alt={skill.skillName} />
                                        </div>
                                        <div className="skill-name">
                                            {skill.skillName}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </Zoom>
        </Section>
    )
}