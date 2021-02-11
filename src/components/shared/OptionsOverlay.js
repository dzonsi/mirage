import React from 'react';
import styled from 'styled-components';

function OptionsOverlay(props) {
	return (
		<div
			className={props.className}
		/>
	)
}

export const OptionsOverlayStyled = styled(OptionsOverlay)`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: transparent;
	z-index: 8;
`