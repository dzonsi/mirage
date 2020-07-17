import React from "react";
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';
import { NavLink, useParams } from 'react-router-dom';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

function UserLinks(props) {

	const params = useParams();
	console.log(params.id);

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
		display: inline-block;
		color: ${({ theme }) => theme.beta};
		font-weight: 700;
		padding: 0.5rem 1rem;
		border: 1px solid ${({ theme }) => theme.beta};
		border-radius: 21px;
		margin: 0 0.7rem 0 0;

		&:last-child {
			margin: 0;
		}
	}

`