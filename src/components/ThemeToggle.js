import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'theme-preference';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

function getInitialTheme() {
	const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
	if (savedTheme === DARK_THEME || savedTheme === LIGHT_THEME) {
		return savedTheme;
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? DARK_THEME
		: LIGHT_THEME;
}

function applyTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
}

export default function ThemeToggle() {
	const [theme, setTheme] = useState(LIGHT_THEME);

	useEffect(() => {
		const initialTheme = getInitialTheme();
		setTheme(initialTheme);
		applyTheme(initialTheme);
	}, []);

	function toggleTheme() {
		const nextTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
		setTheme(nextTheme);
		applyTheme(nextTheme);
		window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
	}

	return (
		<button
			type="button"
			className="themeToggle"
			aria-label={theme === DARK_THEME ? 'Switch to light mode' : 'Switch to dark mode'}
			aria-pressed={theme === DARK_THEME}
			title={theme === DARK_THEME ? 'Light mode' : 'Night mode'}
			onClick={toggleTheme}
		>
			<span className="themeToggleTrack" aria-hidden="true">
				<span className="themeToggleThumb">
					{theme === DARK_THEME ? '🌙' : '☀️'}
				</span>
			</span>
		</button>
	);
}
