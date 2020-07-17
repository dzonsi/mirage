import React from "react";
// import { useHistory, useParams } from 'react-router-dom';
// import { connect } from "react-redux";
// import { fetchUsers } from '../../action-creators/usersCreators';
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

function UserBody(props) {

	const { user } = props;

	if(user) {
		return (
			<div className={props.className}>
				<p><span>Phone:</span> {user.phone}</p>
				<p><span>Website:</span> {user.website}</p>
				<p><span>Company:</span> {user.company.name}</p>
			</div>
		)
	}

	if(!user) {
		return (
			<h2>Something went wrong while fetching user!</h2>
		)
	}

}

UserBody.propTypes = {
	user: PropTypes.object.isRequired
}

export const UserBodyStyled = styled(UserBody)`
	margin: 10px;

	& span {
		font-weight: 700;
		color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.beta};
	}
`