import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	body {
  	font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
		color: ${({ theme }) => theme.alpha};
		margin: 0;
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
	.u-s-n {
		user-select: none;
	}
`