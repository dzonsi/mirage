import React from 'react';
import styled from 'styled-components';

import { minWidth } from '../../../theme/mixins/minWidth';
// components
import { DefaultButton as Button } from '../../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

function UserData(props) {

	return (
		<div className={props.className}>
			<p><span>N</span></p>
			<p>nikola86_v@yahoo.com</p>
			{/* change to link, or nav link in necessary */}
			<Button>Manage your account</Button>
			<div>
				{/* change to link, or nav link in necessary */}
				<Button>Privacy Policy</Button>
				<span>
					<Icon icon={['fas', 'circle']} />
				</span>
				{/* change to link, or nav link in necessary */}
				<Button>Terms of Service</Button>
			</div>
			<Button onClick={props.toggle} title="Close user info">
				<Icon icon={['fas', 'times']} />
			</Button>
		</div>
	)
}

UserData.propTypes = {
	show: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
}

export const UserDataStyled = styled(UserData)`
	width: 19rem;
	height: 19rem;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.alpha};
	background-color: ${({ theme }) => theme.delta};
	border-radius: 50% 6px 50% 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 200%;
	right: 0;
	z-index: 12;
	transform: translateY(7rem);
	opacity: 0;
	visibility: hidden;
	transition: font-size .2s linear, opacity .5s, transform .5s;
	${({ show }) => {
		if(show) {
			return `
				transform: translateY(0);
				opacity: 1;
				visibility: visible;
			`
		}
	}}

	& p:first-child {
		margin-bottom: 0.5rem;
		& span {
			width: 3rem;
			height: 3rem;
			font-size: 2rem;
			${({ theme }) => theme.name === 'light' ?
				`color: ${theme.epsilon};` :
				null
			}
			background-color: ${({ theme }) => theme.theta};
			padding: 0;
			margin: 0;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	& p:nth-child(2) {
		color: ${({ theme }) => theme.beta};
	}

	& > button:first-of-type {
		color: ${({ theme }) => theme.alpha};
		padding: 0.25rem 0.75rem;
		margin-bottom: 0.5rem;
		border: 1px solid ${({ theme }) => theme.name === 'light' ?
			theme.gamma :
			theme.beta};
		border-radius: 1.5rem;
		transition: border-color .2s linear;
		&:hover {
			border-color: ${({ theme }) => theme.alpha};
		}
	}

	& div:nth-child(4) {
		font-size 0.8rem;
		color: ${({ theme }) => theme.beta};

		& button {
			transition: color .2s linear;

			&:hover {
				color: ${({ theme }) => theme.alpha};
			}
		}

		& span {
			display: inline-block;
			font-size: 0.5rem;
			margin: 0 0.5rem;
		}
	}

	& button:nth-child(5) {
		width: 2rem;
		height: 2rem;
		font-size: 1.5rem;
		color: ${({ theme }) => theme.beta};
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 1rem;
		right: 1rem;
		transition: color .2s linear;

		&:hover {
			color: ${({ theme }) => theme.alpha};
		}
	}

	${
		minWidth.xs`
			font-size: 1rem;
		`
	}
`