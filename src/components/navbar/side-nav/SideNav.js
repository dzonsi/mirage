import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { DefaultButton as Button } from '../../shared/DefaultButton';

// redux
import { connect } from 'react-redux';
import { toggleSideNav } from '../../../action-creators/actionCreators';

import PropTypes from 'prop-types';

function SideNav(props) {
	return (
		<div className={props.className}>
			<nav>
				<Router>
					<NavLink to="/home"><Icon icon={['fas', 'list-ul']} />My apps & games</NavLink>
					<NavLink to="/about">Notifications</NavLink>
					<NavLink to="/left">Subscriptions</NavLink>
					<NavLink to="/right">Wishlist</NavLink>
					<NavLink to="/home">Account</NavLink>
					<NavLink to="/home">Payment methods</NavLink>
					<NavLink to="/home">Play Protect</NavLink>
					<NavLink to="/home">Settings</NavLink>
				</Router>
			</nav>
			<Button onClick={props.toggleSideNav}>
				<Icon icon={['fas', 'times']} />
			</Button>
		</div>
	)
}

SideNav.propTypes = {
	sideNavShow: PropTypes.bool.isRequired,
	toggleSideNav: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
   sideNavShow: state.navbarReducer.sideNavShow
  }
}

const mapDispatchToProps = {
	toggleSideNav
}

const SideNavStyled = styled(SideNav)`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: -100%;
	z-index: 15;
	background-color: ${({ theme }) => theme.delta
	};
	transform: translateX(0);
	transition: transform .3s linear;
	${({ sideNavShow }) => {
		if(sideNavShow) {
			return `
				transform: translateX(100%);
			`
		}
	}}


	& nav {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& a {
			font-size: 18px;
			font-weight: 700;
			color: ${({ theme }) => theme.beta};
			padding: 0.25rem 0.5rem;
			margin-bottom: 0.5rem;

			&.active {
				color: ${({ theme }) => theme.eta};
			}

			&:hover {
				color: ${({ theme }) => theme.zeta};
			}

		}

	}

	& button {
		font-size: 22px;
		color: ${({ theme }) => theme.beta};
		padding: 0 0.5rem;
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;

		&:hover {
			color: ${({ theme }) => theme.zeta};
		}

		&:active {
			padding: 0 0.5rem;
		}
	}
`

export const SideNavConnected = connect(mapStateToProps, mapDispatchToProps) (SideNavStyled);