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
			<NavLink to={`users/${params.id}/posts`}>Posts</NavLink>
			<NavLink to={`users/${params.id}/albums`}>Albums</NavLink>
			<NavLink to={`users/${params.id}/todos`}>Todos</NavLink>
		</div>
	)

}

export const UserLinksStyled = styled(UserLinks)`
	margin: 10px;

`