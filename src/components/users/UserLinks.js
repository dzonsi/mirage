import React from "react";
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

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
	padding: 0 0 20px;
	margin: 20px 10px 0;
	display: flex;
	justify-content: center;
	align-items: center;

	${minWidth.xs`
		margin-top: 50px;
	`}

	& a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80px;
		height: 80px;
		color: ${({ theme }) => theme.name === 'light' ? theme.beta : theme.beta };
		background-color: ${({ theme }) => theme.beta};
		font-weight: 700;
		padding: 0.5rem 1rem;
		border-radius: 50%;
		margin: 0 0.5rem;
    background: linear-gradient(-45deg, rgba(0,0,0,0.3), rgba(255,255,255,0.25));
    box-shadow: none;
    transition: all .1s linear;

    ${minWidth.xs`
			width: 100px;
			height: 100px;
		`}

		${minWidth.sm`
			margin: 0 1rem;
		`}

		${minWidth.md`
			font-size: 1.1rem;
			width: 120px;
			height: 120px;
		`}

		${minWidth.lg`
			font-size: 1.2rem;
		`}

		&:hover {
			color: ${({ theme }) => theme.name === 'light' ? theme.beta : theme.beta };
			box-shadow: ${({ theme }) => theme.name === 'light' ? `4px 4px 16px 0 rgba(0, 0, 0, 0.5),
			-4px -4px 16px 0 rgba(255, 255, 255, 0.2);` : `4px 4px 16px 0 #000,
			-4px -4px 16px 0 rgba(255, 255, 255, 0.2);` };

			${minWidth.xs`
				font-size: 1.3rem;
			`}

			${minWidth.lg`
				font-size: 1.4rem;
			`}

		}

		&:active {
			background: linear-gradient(-45deg, rgba(255,255,255,0.25 ), rgba(0,0,0,0.2));
			box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5),
			-2px -2px 8px 0 rgba(255, 255, 255, 0.2);
		}
	}

`