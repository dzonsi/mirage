import React, { useRef } from "react";
import styled from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';
import { useCloseEsc } from '../../hooks/useCloseEsc';
import { useManageFocus } from '../../hooks/useManageFocus';

import PropTypes from 'prop-types';

import { minWidth } from '../../theme/mixins/minWidth';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { optionsFadeIn } from '../../style/animations/optionsFadeIn';

function SingleUserOptions(props) {

	const { show, setShow } = props;
	const btn = props.getBtn();

	const element = useRef(null);
	const first = useRef(null);
	const last = useRef(null);

	useCloseOutside(element, btn, setShow);
	useCloseEsc(show, setShow);
	useManageFocus(show, first, last);

	return (
		<div className={props.className} ref={element}>
			<div className="options-container">
				<div className="link-container">
					<button className="link" ref={first}>
						<Icon icon={['fas', 'user-edit']} fixedWidth />
						<span className="text">Edit user</span>
					</button>
					<button className="link">
						<Icon icon={['fas', 'user-slash']} fixedWidth />
						<span className="text">Delete user</span>
					</button>
				</div>
				<hr className="separator"/>
				<div className="add-new-container">
					<p className="add-new">Add new:</p>
					<div className="link-container">
						<button className="link">
							<Icon icon={['fas', 'pencil-alt']} fixedWidth />
							<span className="text">Post</span>
						</button>
						<button className="link">
							<Icon icon={['fas', 'comments']} fixedWidth />
							<span className="text">Comment</span>
						</button>
						<button className="link">
							<Icon icon={['fas', 'check-double']} fixedWidth />
							<span className="text">Todo</span>
						</button>
						<button className="link" ref={last}>
							<Icon icon={['fas', 'images']} fixedWidth />
							<span className="text">Image</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)

}

SingleUserOptions.propTypes = {
	show: PropTypes.bool.isRequired,
	setShow: PropTypes.func.isRequired,
	getBtn: PropTypes.func.isRequired,
}

export const SingleUserOptionsStyled = styled(SingleUserOptions)`
	position: absolute;
	top: 0;
	right: 100%;
	font-size: 0.8rem;
	min-width: 160px;
	color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
	background-color: ${({ theme }) => theme.name === 'light' ? theme.delta : theme.gamma};
	border-radius: 20px;
	padding 0.5rem 1rem;
	animation: ${optionsFadeIn} .2s forwards;
	z-index: 9;

	${
		minWidth.xs`
			font-size: 1rem;
			min-width: 200px;
		`
	}

	.separator {
		width: 100%;
		background-color: ${({ theme }) => theme.beta};
		margin: 0.5rem 0 0.8rem;
		opacity: 0.5;

		${
			minWidth.xs`
				margin: 0.5rem 0 0.9rem;
			`
		}

	}

	& .options-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		& .add-new-container {
			width: 100%;
		}

		& .add-new {
			font-weight: 700;
			text-align: center;
			color: ${({ theme }) => theme.alpha};
			margin-bottom: 0.3rem;
		}

		& .link-container {
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		& .link {
			font-weight: 700;
			padding: .2rem 0;
			color: ${({ theme }) => theme.name === 'light' ? theme.gamma : theme.beta};
			background-color: transparent;
			border: none;
			margin: 0.3rem;
			transition: all .1s linear;
			display: flex;
			justify-content: center;
			align-items: center;

			&:hover {
				color: ${({ theme }) => theme.alpha};
			}

			&:active {
				color: ${({ theme }) => theme.zeta};
				transition: none;
			}

			& .text {
				display: inline-block;
				margin-left: 15px;
				flex: 1;
				text-align: left;
			}

		}

	}

`