import React, { useState, useEffect } from "react";
import { Sun, Moon } from "heroicons-react";
import "./styles.scss";
const ThemeChanger = () => {
	const [themeState, setThemeState] = useState(false);

	const handleChange = () => {
		setThemeState(!themeState);
		if (themeState) {
			localStorage.setItem("Theme", "dark");
			document.body.classList.add("dark-mode");
		} else {
			localStorage.setItem("Theme", "light");
			document.body.classList.remove("dark-mode");
		}
	};
	useEffect(() => {
		const getTheme = localStorage.getItem("Theme");
		if (getTheme === "dark") return document.body.classList.add("dark-mode");
	});

	return (
		<button onClick={handleChange} className="ch4__dark-mode-btn">
			{themeState ? <Moon fontSize={30} /> : <Sun fontSize={30} />}
		</button>
	);
};

export default ThemeChanger;
