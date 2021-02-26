import React from "react";
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

function UserLinks(props) {

	const params = useParams();

	return (
		<div className={props.className}>
			<div className="link-container">
				<NavLink className="link" to={`/users/${params.id}/posts`}>Posts</NavLink>
				<NavLink className="link" to={`/users/${params.id}/comments`}>Comments</NavLink>
			</div>
			<div className="link-container">
				<NavLink className="link" to={`/users/${params.id}/todos`}>Todos</NavLink>
				<NavLink className="link" to={`/users/${params.id}/photos`}>Photos</NavLink>
			</div>
		</div>
	)

}

export const UserLinksStyled = styled(UserLinks)`
	margin: 10px 10px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	${minWidth.xs`
		margin-top: 50px;
	`}

	${minWidth.sm`
		margin-top: 70px;
	`}

	& .link-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1 1 100%;

		${minWidth.sm`
			flex: 0 0 50%;

			&:first-of-type {
				justify-content: flex-end;
			}

			&:nth-of-type(2) {
				justify-content: flex-start;
			}
		`}
	}

	& .link {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 0 calc(50% - 1rem);
		font-weight: 700;
		color: ${({ theme }) => theme.name === 'light' ? theme.beta : theme.alpha};
		background-color: ${({ theme }) => theme.name === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
		border-radius: 6px;
		padding: 0.5rem 1rem;
		margin: 0.25rem;
		opacity: 0.6;
		transition: all .1s linear;

		${minWidth.sm`
			flex: 0 0 auto;
			margin: 0 1rem;
		`}

		${minWidth.md`
			font-size: 1.2rem;
		`}

		&:hover {
			opacity: 1;
		}

		&:focus {
			opacity: 1;
		}

		&:active {
			opacity: 1;
		}
	}

`