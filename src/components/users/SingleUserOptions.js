import React, { useRef } from "react";
import styled from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';

import { minWidth } from '../../theme/mixins/minWidth';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { optionsFadeIn } from '../../style/animations/optionsFadeIn';

function SingleUserOptions(props) {

	const btn = props.getBtn();

	const element = useRef(null);
	useCloseOutside(element, btn, props.setShow);

	return (
		<div className={props.className} ref={element}>
			<div className="options-container">
				<div className="link-container">
					<button className="link edit" padding=".6rem .8rem .6rem">
						<Icon icon={['fas', 'user-edit']} fixedWidth />
						<span className="text">Edit user</span>
					</button>
					<button className="link delete" padding=".6rem .8rem .6rem">
						<Icon icon={['fas', 'trash-alt']} fixedWidth />
						<span className="text">Delete user</span>
					</button>
				</div>
				<hr className="separator"/>
				<div className="add-new-container">
					<p className="add-new">Add new:</p>
					<div className="link-container">
						<button className="link post" padding=".6rem .8rem .6rem">
							<Icon icon={['fas', 'pencil-alt']} fixedWidth />
							<span className="text">Post</span>
						</button>
						<button className="link album" padding=".6rem .8rem .6rem">
							<Icon icon={['fas', 'comments']} fixedWidth />
							<span className="text">Comment</span>
						</button>
						<button className="link todo" padding=".6rem .8rem .6rem">
							<Icon icon={['fas', 'check-double']} fixedWidth />
							<span className="text">Todo</span>
						</button>
						<button className="link image" padding=".6rem .8rem .6rem">
							<Icon icon={['fas', 'images']} fixedWidth />
							<span className="text">Image</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)

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