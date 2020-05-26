import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Overlay(props) {

	const { show, toggle } = props;

	const close = () => {
		if(show) {
			toggle();
		}
	}

	return (
		<div
			className={props.className}
			onClick={close}
		/>
	)
}

Overlay.propTypes = {
	show: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
}

export const OverlayStyled = styled(Overlay)`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 100%;
	z-index: 11;
	transition: background-color .3s linear;
	${props => {
		if(props.show) {
			return `
				left: 0;
				background-color: rgba(0, 0, 0, 0.7);
			`
		}
	}}
`