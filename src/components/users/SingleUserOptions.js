import React from "react";
import styled from 'styled-components';

function SingleUserOptions(props) {

	return (
		<div className={props.className}>
			<h2>Single user options</h2>
		</div>
	)

}

export const SingleUserOptionsStyled = styled(SingleUserOptions)`
	position: absolute;
	top: 100%;
	right: 200%;
	background-color: ${({ theme }) => theme.gamma};
	visibility: hidden;
	pointer-events: none;
	opacity: 0.3;
	transition: all .2s;

	${({show}) => show === true ? `
		visibility: visible;
		pointer-events: auto;
		top: 0;
		right: 100%;
		opacity: 1;
	` : null };
`