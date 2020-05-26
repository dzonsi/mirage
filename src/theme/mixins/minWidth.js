import { css } from 'styled-components';
import { breakPoints } from '../breakPoints';

export const minWidth = Object.keys(breakPoints).reduce((accumulator, label) => {
	accumulator[label] = (...arg) => css`
		@media (min-width: ${breakPoints[label]}) {
			${css(...arg)};
		}
	`;
	return accumulator;
}, {});