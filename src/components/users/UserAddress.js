import React from "react";
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

import PropTypes from 'prop-types';

function UserAddress(props) {

	const { address } = props;

	if(address) {
		return (
			<div className={props.className}>
				<p><span className="u-s-n">Street: </span>{address.street}</p>
				<p><span className="u-s-n">Suite: </span>{address.suite}</p>
				<p><span className="u-s-n">City: </span>{address.city}</p>
				<p><span className="u-s-n">Zipcode: </span>{address.zipcode}</p>
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
	margin: 10px;
	transition: margin .2s linear;

	${minWidth.xs`
		margin: 10px 10px 10px 125px;
	`}

	${minWidth.md`
		margin: -30px 10px 0 200px;
	`}

	& p {
		font-size: 0.8rem;
		margin: 0 0 0.5rem 0;
		font-weight: 700;

		${minWidth.xs`
			font-size: 1rem;
		`}

		${minWidth.md`
			font-size: 1.2rem;
		`}

	}

	& span {
		font-weight: 400;
		color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.beta};
	}

`