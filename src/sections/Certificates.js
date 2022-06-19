import React from 'react';
import Section from '../components/Section';
import Zoom from 'react-reveal/Zoom';

import './Certificates.css';

export default function Certificates(props) {
    const arrCertificateData = [
        {"name": "Programming with Python", "href": "https://trainings.internshala.com/verify_certificate"},
        {"name": "Python for Data Science", "href": "https://courses.cognitiveclass.ai/certificates/fd349dd20d31467c9ba0705af8716cb3"},
        {"name": "The Web Developer Bootcamp", "href": "https://www.udemy.com/certificate/UC-CBZYQHZQ/"},
        {"name": "Machine Learning with Python", "href": "https://courses.cognitiveclass.ai/certificates/56ee20f03f334855989651e145d268b5"},
        {"name": "Machine Learning A-Z: Hands-On Python & R In Data Science", "href": "https://www.udemy.com/certificate/UC-JY3QZ8YD/"},
        {"name": "Machine Learning by Andrew N.G.", "href": "https://www.coursera.org/account/accomplishments/verify/832NRQ87FRCG"},
        {"name": "Introduction to TensorFlow for AI, ML, and DL", "href": "https://www.coursera.org/account/accomplishments/verify/A8C7ESBQG383"},
        {"name": "Convolutional Neural Networks in TensorFlow", "href": "https://www.coursera.org/account/accomplishments/verify/RH32NDER9VR8"},
        {"name": "Natural Language Processing in TensorFlow", "href": "https://www.coursera.org/account/accomplishments/verify/NZRC6889XB6C"},
        {"name": "Hackerrank Python Assessment", "href": "https://www.hackerrank.com/certificates/8691963192e8"},
        {"name": "Hackerrank Problem Solving Assessment", "href": "https://www.hackerrank.com/certificates/3017e3d571e1"},
        {"name": "Hackerrank JavaScript Assessment", "href": "https://www.hackerrank.com/certificates/d2c4eeadcacc"},
    ]

    return (
        <Section 
            className="certificates" 
            id={props.id ? props.id : ""}
            title={"Certificates"}
            extralarge
        >
            <Zoom>
                <div className="section-box">
                    <div className="skill-set">
                        {
                            arrCertificateData.map((cert, index) => {
                                return (
                                    <a href={cert.href} key={index} target="_blank" title={cert.name}>
                                        <img 
                                            className="certificate-img"
                                            src={require(`./../resources/images/certificates/thumbnail_${index+1}.jpg`)}
                                            alt={cert.name}
                                        />
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </Zoom>
        </Section>
    )
}