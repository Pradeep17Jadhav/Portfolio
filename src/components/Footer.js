import React from 'react';
import './Footer.css';

export default function Footer(props) {
    return (
        <footer className="footer">
            <p className="credits">
                {"Made with ❤️ by <"}
                <a href="https://www.linkedin.com/in/pradeep-jadhav/" target="_blank" rel="noreferrer">
                    {"Pradeep Jadhav"}
                </a>
                {"/>"}
            </p>
        </footer>
    )
}