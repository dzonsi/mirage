import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	body {
  	font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
		color: ${({ theme }) => theme.alpha};
	}
	a {
		color: inherit;
		&:hover {
			color: inherit;
			text-decoration: none;
		}
	}
	ul {
		list-style-type: none;
		padding-left: 0;
		margin-bottom: 0;
	}
`