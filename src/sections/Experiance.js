import React from 'react';
import Section from '../components/Section';
import './Experiance.css';

export default function Experiance(props) {
    return (
        <Section 
            className="experiance"
            title="Experiance"
            large
        >
            <div className="section-box">
                <span className="company">
                    Zeus Learning Pvt. Ltd.
                </span>
                <ul className="bullets">
                    <li>
                        Working on an e-learning based digital whiteboard web application as a full stack developer.
                    </li>
                    <li>
                        Took ownership of scaling and refactoring legacy code and turned it into smaller reusable object-oriented code. Assessed and Improved efficiency of various systems by more than 50%.
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
        </Section>
    )
}