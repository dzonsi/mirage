import React from "react";
// import { useHistory, useParams } from 'react-router-dom';
// import { connect } from "react-redux";
// import { fetchUsers } from '../../action-creators/usersCreators';
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

function UserAddress(props) {

	const { address } = props;

	if(address) {
		return (
			<div className={props.className}>
				<p><span>Street:</span> {address.street}</p>
				<p><span>Suite:</span> {address.suite}</p>
				<p><span>City:</span> {address.city}</p>
				<p><span>Zipcode:</span> {address.zipcode}</p>
			</div>
		)
	}

	if(!address) {
		return (
			<h2>Something went wrong while fetching user!</h2>
		)
	}

}

UserAddress.propTypes = {
	address: PropTypes.object.isRequired
}

export const UserAddressStyled = styled(UserAddress)`

`