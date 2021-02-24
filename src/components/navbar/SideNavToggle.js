import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { minWidth } from '../../theme/mixins/minWidth';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { DefaultButton as Button } from '../shared/DefaultButton';

// redux
import { connect } from 'react-redux';
import { toggleSideNav } from '../../action-creators/navbarCreators';
import { toggleSideNavFirst } from '../../action-creators/navbarCreators';

import PropTypes from 'prop-types';

function SideNavToggle(props) {

	const {
		toggleSideNav: toggle,
		sideNavShow: show,
		sideNavFirst: first,
		toggleSideNavFirst: toggleFirst
	} = props;
	const btn = useRef(null);

	useEffect(() => {
		// first render of app, don't set focus to button element
		// and set first to false
		if(first) {
			toggleFirst();
			return;
		}
		// every other render, hide button when side menu is open
		// and set focus back to button when side menu is closed
		if(!show) {
			btn.current.style.visibility = 'visible';
			btn.current.focus();
		} else {
			btn.current.style.visibility = 'hidden';
		}
	}, [show]);

	return (
		<Button
			className={props.className}
			onClick={toggle}
			title="Open side navigation"
			ref={btn}
			aria-label="Open side navigation"
			aria-haspopup="true"
			aria-controls="nav"
		>
			<Icon icon={['fas', 'bars']} />
		</Button>
	)
}

SideNavToggle.propTypes = {
	sideNavShow: PropTypes.bool.isRequired,
	toggleSideNav: PropTypes.func.isRequired,
	sideNavFirst: PropTypes.bool.isRequired,
	toggleSideNavFirst: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  sideNavShow: state.navbarReducer.sideNavShow,
  sideNavFirst: state.navbarReducer.sideNavFirst
})

const mapDispatchToProps = {
	toggleSideNav,
	toggleSideNavFirst
}

const SideNavToggleStyled = styled(SideNavToggle)`
	font-size: 1rem;
	color: ${({ theme }) => theme.name === 'light' ?
		theme.alpha :
		theme.beta
	};
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin: 0 1rem 0 0.6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: font-size .2s linear;

	&:hover {
		color: ${({ theme }) => theme.name === 'light' ?
		theme.beta :
		theme.alpha
		};
	}

	&:active {
		color: ${({ theme }) => theme.zeta};
	}

	${minWidth.md`
		font-size: 1.5rem;
	`}
`

export const SideNavToggleConnected = connect(mapStateToProps, mapDispatchToProps) (SideNavToggleStyled);