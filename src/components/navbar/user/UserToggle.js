import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { DefaultButton as Button } from '../../shared/DefaultButton';

import PropTypes from 'prop-types';

function UserToggle(props) {

	const { show, toggle, first, toggleFirst } = props;
	const btn = useRef(null);

	useEffect(() => {
		// first render of app, don't set focus to button element
		// and set first to false
		if(first) {
			toggleFirst();
			return;
		}
		// every other render, hide button for screen readers
		// when user info menu is open and set focus
		// back to button when user info menu is closed
		if(!show) {
			btn.current.removeAttribute('aria-hidden');
			btn.current.focus();
		} else {
			btn.current.setAttribute('aria-hidden', true);
		}
	}, [show]);

	return (
		<Button
			className={props.className}
			onClick={toggle}
			title="Show user info"
			ref={btn}
			aria-label="Show user info"
			aria-haspopup="true"
			aria-controls="user-info"
		>
			<span>N</span>
		</Button>
	)
}

UserToggle.propTypes = {
	show: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
	first: PropTypes.bool.isRequired,
	toggleFirst: PropTypes.func.isRequired,
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