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
				<Button className="edit" padding=".6rem .8rem .6rem">Edit</Button>
				<Button className="delete" padding=".6rem .8rem .6rem">Delete</Button>
				<hr />
				<div>
					<p>Add new:</p>
					<Button padding=".6rem .8rem .6rem">Post</Button>
					<Button padding=".6rem .8rem .6rem">Album</Button>
					<Button padding=".6rem .8rem .6rem">Todo</Button>
					<Button padding=".6rem .8rem .6rem">Image</Button>
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

	& div.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		& button {
			font-weight: 700;
			border-radius: 0.5rem;
			margin: 0 0 0.5rem;
			opacity: 0.7;
			width: 100%;

			&.edit {
				color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
				border: 1px solid ${({ theme }) => theme.zeta};

				&:hover {
					color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
				}
			}

			&.delete {
				color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
				border: 1px solid ${({ theme }) => theme.eta};

				&:hover {
					color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
				}

			}

			&:hover {
				color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
				opacity: 1;
			}

		}

	}

`