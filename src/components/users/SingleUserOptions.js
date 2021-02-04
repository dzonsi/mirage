import React, { useRef } from "react";
import styled from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { optionsFadeIn } from '../../style/animations/optionsFadeIn';

function SingleUserOptions(props) {

	const btn = props.getBtn();

	const element = useRef(null);
	useCloseOutside(element, btn, props.setShow);

	return (
		<div className={props.className} ref={element}>
			<div className="button-container">
				<div className="e-d-container">
					<p className="add-new">Choose action:</p>
					<button className="link edit" padding=".6rem .8rem .6rem">
						<Icon icon={['fas', 'user-edit']} fixedWidth />
						<span className="text">Edit</span>
					</button>
					<button className="link delete" padding=".6rem .8rem .6rem">
						<Icon icon={['fas', 'trash-alt']} fixedWidth />
						<span className="text">Delete</span>
					</button>
				</div>
				<hr className="divider"/>
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
	font-size: 1rem;
	width: 200px;
	text-align: center;
	color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
	background-color: ${({ theme }) => theme.name === 'light' ? theme.delta : theme.gamma};
	border-radius: 20px;
	padding: 1rem;
	animation: ${optionsFadeIn} .2s forwards;
	z-index: 9;

	.divider {
		background-color: white;
		width: 100%;
	}

	& .button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		& .button {
			font-weight: 700;
			padding: .6rem .8rem .6rem;
			border-radius: 0.5rem;
			margin: 0 0 0.5rem;
			opacity: 0.7;
			width: 100%;

			&.edit, &.delete {
				color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
				background-color: ${({ theme }) => theme.name === 'light' ? theme.epsilon : theme.alpha};

				&:hover {
					color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
				}
			}

			&.delete {
				background-color: ${({ theme }) => theme.eta};
			}

			&:hover {
				opacity: 1;
			}

		}

		& .e-d-container {
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		& .add-new-container {
			width: 100%;
		}

		& .add-new {
			font-weight: 700;
			color: ${({ theme }) => theme.alpha};
			margin-bottom: 0.3rem;
		}

		& .link-container {
			display: flex;
			flex-direction: column;
		}

		& .link {
			font-weight: 700;
			padding: .2rem 0;
			color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
			background-color: transparent;
			border: none;
			margin: 0.3rem;
			flex: 0 0 calc(50% - 0.6rem);
			transition: all .1s linear;
			display: flex;
			justify-content: center;
			align-items: center;

			& .text {
				display: inline-block;
				margin-left: 15px;
				flex: 1;
				text-align: left;
			}

			&.edit {
				&:hover {
					color: ${({ theme }) => theme.alpha};
				}
			}

			&.delete {
				&:hover {
					color: ${({ theme }) => theme.alpha};
				}
			}

			&.post {

				&:hover {
					color: ${({ theme }) => theme.alpha};
				}

			}

			&.album {

				&:hover {
					color: ${({ theme }) => theme.alpha};
				}

			}

			&.todo {

				&:hover {
					color: ${({ theme }) => theme.alpha};
				}

			}

			&.image {

				&:hover {
					color: ${({ theme }) => theme.alpha};
				}

			}

		}

	}

`