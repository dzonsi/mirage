import React, { useRef } from "react";
import styled, { keyframes } from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';

import PropTypes from 'prop-types';

function AllUsersOptions(props) {

	const btn = props.getBtn();
	const close = props.toggleOptions;

	const element = useRef(null);
	useCloseOutside(element, btn, close);

	return (
		<div className={props.className} ref={element}>
			<h3 className={props.className}>Users options</h3>
		</div>
	)

}

AllUsersOptions.propsTypes = {
	getBtn: PropTypes.func.isRequired,
	toggleOptions: PropTypes.func.isRequired,
}

const animation = keyframes`
	0% { top: 100%; right: 200%; opacity: 0.3; }
	100% { top: 0; right: 100%; opacity: 1; }
`

export const AllUsersOptionsStyled = styled(AllUsersOptions)`
	position: absolute;
	top: 100%;
	right: 100%;
	background-color: ${({ theme }) => theme.gamma};
	opacity: 0.3;
	transition: all .2s;
	animation-name: ${animation};
	animation-duration: .2s;
	animation-fill-mode: forwards;
`