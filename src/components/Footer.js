import React from 'react';
import './Footer.css';

export default function Footer(props) {
    return (
        <footer className="footer">
            <p className="credits">
                {"Made with ❤️ by "}
                <a
                    href="https://github.com/Pradeep17Jadhav/Portfolio/"
                    target="_blank"
                    rel="noreferrer"
                    title="Click to open source code of this portfolio"
                >
                    {"Pradeep Jadhav"}
                </a>
            </p>
        </footer>
    )
}