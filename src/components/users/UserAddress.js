import React, { useState } from "react";
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

function UserAddress(props) {

	const { address } = props;
	const [show, setShow] = useState(false);
	const [style, setStyle] = useState({display: 'none'});

	if(address) {
		return (
			<div className={props.className} show={show}>
				<Button onClick={() => {
					setShow(!show);
					show ?
						setStyle({display: 'none'}) :
						setStyle({display: 'block'})
					}}>
					<span>Address</span>
					{show ?
						<Icon icon={['fas', 'caret-up']} /> :
						<Icon icon={['fas', 'caret-down']} />
					}
				</Button>
				<div style={style}>
					<p><span>Street:</span> {address.street}</p>
					<p><span>Suite:</span> {address.suite}</p>
					<p><span>City:</span> {address.city}</p>
					<p><span>Zipcode:</span> {address.zipcode}</p>
				</div>
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
	background-color: ${({ theme }) => theme.delta};
	padding: 10px;
	margin: 10px;
	border-radius: 15px;

	& span {
		font-weight: 700;
		color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.beta};
	}

	& div {
		display: ${({ show }) => show ? 'block' : 'none'};
	}

`