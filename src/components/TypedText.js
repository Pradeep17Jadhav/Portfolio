import React, { useEffect } from 'react';
import './TypedText.css';

export default function Intro(props) {
    const textArray = ["Software Engineer", "Full Stack Developer", "Web Developer"];
    const initialValue = textArray[0];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 1000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = initialValue.length-1;

    const type = () => {
        let typedTextSpan = document.querySelector(".typed-text");
        let cursorSpan = document.querySelector(".cursor");

        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    const erase = () => {
        let typedTextSpan = document.querySelector(".typed-text");
        let cursorSpan = document.querySelector(".cursor");

        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    useEffect(() => {
        setTimeout(erase, newTextDelay * 2);
    }, []);

    return (
        <h2 className="typed-text-container">
            <span className="typed-text typing">{textArray[0]}</span>
            <span className="cursor">&nbsp;</span>
        </h2>
    )

}

