import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { minWidth } from '../../../theme/mixins/minWidth';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { DefaultButton as Button } from '../../shared/DefaultButton';

// redux
import { connect } from 'react-redux';
import { toggleSideNav } from '../../../action-creators/navbarCreators';

import PropTypes from 'prop-types';

function SideNav(props) {

	const toggle = props.toggleSideNav;

	return (
		<div className={props.className}>
			<nav className="nav">
				<div className="links-container">
					<NavLink onClick={toggle} exact to="/">Home</NavLink>
					<NavLink onClick={toggle} to="/users">Users</NavLink>
					<NavLink onClick={toggle} to="/posts">Posts</NavLink>
					<NavLink onClick={toggle} to="/comments">Comments</NavLink>
					<NavLink onClick={toggle} to="/todos">Todos</NavLink>
					<NavLink onClick={toggle} to="/photos">Photos</NavLink>
					<NavLink onClick={toggle} to="/contact">Contact Us</NavLink>
					<NavLink onClick={toggle} to="/about">About</NavLink>
				</div>
			</nav>
			<Button className="close-btn" onClick={toggle} title="Close side navigation">
				<Icon icon={['fas', 'times']} />
			</Button>
			<div className="round-decoration"></div>
			<div className="square-decoration"></div>
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
	overflow: hidden;
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


	& .nav {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& .links-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		& a {
			font-size: 20px;
			font-weight: 700;
			color: ${({ theme }) => theme.beta};
			padding: 0.25rem 0.5rem;
			margin-bottom: 0.5rem;
			transition: font-size .1s linear;

			&.active {
				color: ${({ theme }) => theme.eta};
			}

			&:hover {
				color: ${({ theme }) => theme.zeta};
			}

			${
				minWidth.sm`
					font-size: 25px;
				`
			}

			${
				minWidth.lg`
					font-size: 30px;
				`
			}

		}

	}

	& .close-btn {
		font-size: 2rem;
		color: ${({ theme }) => theme.beta};
		padding: 0 0.8rem;
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;

		&:hover {
			color: ${({ theme }) => theme.zeta};
		}

		&:active {
			padding: 0 0.5rem;
		}

		${
			minWidth.sm`
				font-size: 28px;
				padding: 0 0.7rem;
				top: 1rem;
				right: 1rem;

				&:active {
					padding: 0 0.7rem;
				}
			`
		}

		${
			minWidth.lg`
				font-size: 38px;
				padding: 0 1rem;
				top: 2rem;
				right: 2rem;

				&:active {
					padding: 0 1rem;
				}
			`
		}

	}

	.round-decoration {
		width: 250px;
		height: 250px;
		border: 30px solid ${({ theme }) => theme.zeta};
		border-radius: 50%;
		opacity: 0.2;
		position: absolute;
		bottom: -50px;
		right: -50px;
	}

	.square-decoration {
		width: 200px;
		height: 200px;
		border: 30px solid ${({ theme }) => theme.kappa};
		border-radius: 20px;
		opacity: 0.2;
		transform: rotate(45deg);
		position: absolute;
		top: -50px;
		left: -50px;
	}
`

export const SideNavConnected = connect(mapStateToProps, mapDispatchToProps) (SideNavStyled);