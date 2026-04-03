import React, { useEffect, useState, useMemo } from "react";
import "./TypedText.css";

export default function Intro() {
	const textArray = useMemo(() => [
		"Software Engineer",
		"Full Stack Developer",
		"Web Developer",
	], []);

	const typingDelay = 100;
	const erasingDelay = 50;
	const newTextDelay = 1200;

	const [textIndex, setTextIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [charIndex, setCharIndex] = useState(0);

	useEffect(() => {
		const currentText = textArray[textIndex];
		let timeout;

		if (!isDeleting) {
			// Typing
			if (charIndex < currentText.length) {
				timeout = setTimeout(() => {
					setDisplayText((prev) => prev + currentText[charIndex]);
					setCharIndex((prev) => prev + 1);
				}, typingDelay);
			} else {
				timeout = setTimeout(() => setIsDeleting(true), newTextDelay);
			}
		} else {
			// Deleting
			if (charIndex > 0) {
				timeout = setTimeout(() => {
					setDisplayText((prev) => prev.slice(0, -1));
					setCharIndex((prev) => prev - 1);
				}, erasingDelay);
			} else {
				setIsDeleting(false);
				setTextIndex((prev) => (prev + 1) % textArray.length);
			}
		}

		return () => clearTimeout(timeout);
	}, [charIndex, isDeleting, textIndex, textArray]);

	return (
		<h2 className="typed-text-container">
			<span className="typed-text">{displayText}</span>
			<span className={`cursor ${isDeleting ? "" : "typing"}`}>&nbsp;</span>
		</h2>
	);
}