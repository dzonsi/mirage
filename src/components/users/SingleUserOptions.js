import React, { useRef } from "react";
import styled, { keyframes } from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';

function SingleUserOptions(props) {

	const btn = props.getBtn();

	const element = useRef(null);
	useCloseOutside(element, btn, props.setShow);

	return (
		<div className={props.className} ref={element}>
			<h2>Single user options</h2>
		</div>
	)

}

const animation = keyframes`
	0% { top: 100%; right: 200%; opacity: 0.3; }
	100% { top: 0; right: 100%; opacity: 1; }
`

export const SingleUserOptionsStyled = styled(SingleUserOptions)`
	position: absolute;
	top: 100%;
	right: 200%;
	background-color: ${({ theme }) => theme.gamma};
	visibility: visible;
	pointer-events: auto;
	opacity: 0.3;
	transition: all .2s;
	animation-name: ${animation};
	animation-duration: .2s;
	animation-fill-mode: forwards;
`