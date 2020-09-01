import React from "react";
import styled, { keyframes } from 'styled-components';

function AllUsersOptions(props) {

	return (
		<h3 className={props.className}>Users options</h3>
	)

}

const animation = keyframes`
	0% { top: 100%; right: 200%; opacity: 0.3; }
	100% { top: 0; right: 100%; opacity: 1; }
`

export const AllUsersOptionsStyled = styled(AllUsersOptions)`
	position: absolute;
	top: 0;
	right: 100%;
	background-color: ${({ theme }) => theme.gamma};
	opacity: 0.3;
	transition: all .2s;
	animation-name: ${animation};
	animation-duration: .2s;
	animation-fill-mode: forwards;
`