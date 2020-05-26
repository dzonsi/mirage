import React from 'react';
import styled from 'styled-components';

import { DefaultButton as Button } from '../../shared/DefaultButton';

import PropTypes from 'prop-types';

function UserToggle(props) {
	return (
		<Button className={props.className} onClick={props.toggle}>
			<span>N</span>
		</Button>
	)
}

UserToggle.propTypes = {
	toggle: PropTypes.func.isRequired,
}

export const UserToggleStyled = styled(UserToggle)`
	color: ${({ theme }) => theme.name === 'light' ?
		theme.epsilon :
		theme.alpha
	};
	background-color: ${({ theme }) => theme.theta};
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	&:active {
		color: initial;
	}
`