import React from "react";
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';

function UserLinks(props) {

	const params = useParams();

	return (
		<div className={props.className}>
			<NavLink to={`/users/${params.id}/posts`}>Posts</NavLink>
			<NavLink to={`/users/${params.id}/albums`}>Albums</NavLink>
			<NavLink to={`/users/${params.id}/todos`}>Todos</NavLink>
		</div>
	)

}

export const UserLinksStyled = styled(UserLinks)`
	margin: 20px 10px 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	& a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
		color: ${({ theme }) => theme.name === 'light' ? theme.gamma : theme.epsilon };
		background-color: ${({ theme }) => theme.beta};
		font-weight: 700;
		padding: 0.5rem 1rem;
		border-radius: 25px;
		margin: 0 1rem 0 0;
    background: linear-gradient(-45deg, rgba(0,0,0,0.2), rgba(255,255,255,0.25));

		&:last-child {
			margin: 0;
		}

		&:hover {
			color: ${({ theme }) => theme.name === 'light' ? theme.gamma : theme.epsilon };
			box-shadow: ${({ theme }) => theme.name === 'light' ? `2px 2px 8px 0 rgba(0, 0, 0, 0.5),
			-2px -2px 8px 0 rgba(255, 255, 255, 0.2);` : `2px 2px 8px 0 rgba(0, 0, 0, 0.9),
			-2px -2px 8px 0 rgba(255, 255, 255, 0.1);` };
		}

		&:active {
			background: linear-gradient(-45deg, rgba(255,255,255,0.25 ), rgba(0,0,0,0.2));
			box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5),
			-2px -2px 8px 0 rgba(255, 255, 255, 0.2);
		}
	}

`