import { useEffect, useState } from 'react';

export const useDarkMode = () => {
	// current theme
	const [theme, setTheme] = useState('light');
	// state to prevent light theme initially
	const [componentMounted, setComponentMounted] = useState(false);

	// save theme to local storage and set state theme
	const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };
  // toggle theme
	const toggleTheme = () => {
		if(theme === 'light') {
			setMode('dark');
		} else {
			setMode('light');
		}
	};

	useEffect(() => {
		// get theme from local storage if exist
		const localTheme = window.localStorage.getItem('theme');
		// check if window.matchMedia exist
		// if exist check if dark mode is suported and on
		// and if local theme is not set
		// set mode to dark
		window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
			setMode('dark') :
			localTheme ?
				setTheme(localTheme) :
				setMode('light');
		setComponentMounted(true);
	}, []);

	return [theme, toggleTheme, componentMounted];
};