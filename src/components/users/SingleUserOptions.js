import React, { useRef } from "react";
import styled from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';

import { DefaultButton as Button } from '../shared/DefaultButton';

import { optionsFadeIn } from '../../style/animations/optionsFadeIn';

function SingleUserOptions(props) {

	const btn = props.getBtn();

	const element = useRef(null);
	useCloseOutside(element, btn, props.setShow);

	return (
		<div className={props.className} ref={element}>
			<div className="button-container">
				<Button className="button edit" padding=".6rem .8rem .6rem">Edit</Button>
				<Button className="button delete" padding=".6rem .8rem .6rem">Delete</Button>
				<div>
					<p className="add-new">Add new:</p>
					<div className="link-container">
						<button className="link post" padding=".6rem .8rem .6rem">Post</button>
						<button className="link album" padding=".6rem .8rem .6rem">Album</button>
						<button className="link todo" padding=".6rem .8rem .6rem">Todo</button>
						<button className="link image" padding=".6rem .8rem .6rem">Image</button>
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

			&:hover {
				opacity: 1;
			}

		}

		& .add-new {
			font-weight: 700;
			color: ${({ theme }) => theme.alpha};
			margin-bottom: 0.5rem;
		}

		& .link-container {
			display: flex;
			flex-wrap: wrap;
		}

		& .link {
			font-weight: 700;
			padding: .6rem 0;
			color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
			background-color: transparent;
			border: 2px solid ${({ theme }) => theme.name === 'light' ? theme.gamma : theme.beta};
			border-radius: .5rem;
			margin: 0.3rem;
			flex: 0 0 calc(50% - 0.6rem);
			transition: all .1s linear;

			&.post {
				color: ${({ theme }) => theme.iota};

				&:hover {
					color: ${({ theme }) => theme.iota};
					border-color: ${({ theme }) => theme.iota};
				}
			}

			&.album {
				color: ${({ theme }) => theme.kappa};

				&:hover {
					color: ${({ theme }) => theme.kappa};
					border-color: ${({ theme }) => theme.kappa};
				}
			}

			&.todo {
				color: ${({ theme }) => theme.lambda};

				&:hover {
					color: ${({ theme }) => theme.lambda};
					border-color: ${({ theme }) => theme.lambda};
				}
			}

			&.image {
				color: ${({ theme }) => theme.mu};

				&:hover {
					color: ${({ theme }) => theme.mu};
					border-color: ${({ theme }) => theme.mu};
				}
			}

		}

	}

`