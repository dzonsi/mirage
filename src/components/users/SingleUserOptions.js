import React, { useRef } from "react";
import styled from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';

import { optionsFadeIn } from '../../style/animations/optionsFadeIn';

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

export const SingleUserOptionsStyled = styled(SingleUserOptions)`
	position: absolute;
	top: 0;
	right: 100%;
	background-color: ${({ theme }) => theme.gamma};
	animation: ${optionsFadeIn} .2s forwards;
`