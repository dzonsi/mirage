import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { minWidth } from '../../../theme/mixins/minWidth';
import { connect } from 'react-redux';
import { toggleSideNav } from '../../../action-creators/navbarCreators';
import { moveFocusToTop, moveFocusToBottom } from '../../../functions/functions';

import PropTypes from 'prop-types';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { DefaultButton as Button } from '../../shared/DefaultButton';

function SideNav(props) {

	const { sideNavShow: show, toggleSideNav: toggle } = props;
	const home = useRef(null);
	const close = useRef(null);

	useEffect(() => {

		if(show) {
			home.current.focus();
			const toBottom = moveFocusToBottom(close);
			const toTop = moveFocusToTop(home);
			home.current.addEventListener('keydown', toBottom);
			close.current.addEventListener('keydown', toTop);

			return () => {
				home.current.removeEventListener('keydown', toBottom);
				close.current.removeEventListener('keydown', toTop);
			}
		}

	}, [show]);

	return (
		<div className={props.className}>
			<nav id="nav" className="nav" aria-label="Main">
				<ul className="links-container">
					<li>
						<NavLink className="link" activeClassName="active" onClick={toggle} exact to="/" ref={home}>Home</NavLink>
					</li>
					<li>
						<NavLink className="link" activeClassName="active" onClick={toggle} to="/users">Users</NavLink>
					</li>
					<li>
						<NavLink className="link" activeClassName="active" onClick={toggle} to="/posts">Posts</NavLink>
					</li>
					<li>
						<NavLink className="link" activeClassName="active" onClick={toggle} to="/comments">Comments</NavLink>
					</li>
					<li>
						<NavLink className="link" activeClassName="active" onClick={toggle} to="/todos">Todos</NavLink>
					</li>
					<li>
						<NavLink className="link" activeClassName="active" onClick={toggle} to="/photos">Photos</NavLink>
					</li>
					<li>
						<NavLink className="link" activeClassName="active" onClick={toggle} to="/contact">Contact Us</NavLink>
					</li>
					<li>
						<NavLink className="link" activeClassName="active" onClick={toggle} to="/about">About</NavLink>
					</li>
				</ul>
			</nav>
			<Button
				id="close-btn"
				className="close-btn"
				onClick={toggle}
				title="Close side navigation"
				aria-label="Close side navigation"
				aria-haspopup="true"
				aria-controls="nav"
				aria-expanded="true"
				ref={close}
			>
				<Icon icon={['fas', 'times']} />
			</Button>
			<div className="round-decoration"></div>
			<div className="square-decoration"></div>
			<div className="triange-decoration">
				<div className="triangle-container">
					<div className="side bottom"></div>
					<div className="side left"></div>
					<div className="side right"></div>
				</div>
			</div>
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
	visibility: hidden;
	transform: translateX(0);
	transition: transform .3s linear;
	${({ sideNavShow }) => {
		if(sideNavShow) {
			return `
				visibility: visible;
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

			${
				minWidth.sm`
					align-items: flex-start;
				`
			}
		}

		& .link {
			display: block;
			font-size: 20px;
			font-weight: 700;
			color: ${({ theme }) => theme.beta};
			padding: 0 0.5rem;
			margin-bottom: 0.5rem;
			transition: color .1s linear, font-size .1s linear;

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
					padding: 0 0.5rem;
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
		transition: all .1s linear;
		z-index: 14;

		&:hover {
			color: ${({ theme }) => theme.zeta};
		}

		&:active {
			padding: 0 0.8rem;
		}

		${
			minWidth.xs`
				top: 2rem;
				right: 2rem;
			`
		}

		${
			minWidth.sm`
				font-size: 2.5rem;
				padding: 0 1rem;
				top: 2rem;
				right: 2rem;

				&:active {
					padding: 0 1rem;
				}
			`
		}

		${
			minWidth.md`
				font-size: 3rem;
				padding: 0 1.2rem;
				top: 3rem;
				right: 3rem;

				&:active {
					padding: 0 1.2rem;
				}
			`
		}

		${
			minWidth.lg`
				top: 4rem;
				right: 8rem;
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
		transition: all .1s linear;
		z-index: 13;

		${
			minWidth.md`
				width: 300px;
				height: 300px;
				border-width: 40px;
				bottom: 90px;
				right: 70px;
			`
		}
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
		transition: all .1s linear;
		z-index: 13;

		${
			minWidth.md`
				width: 300px;
				height: 300px;
				border-width: 40px;
				top: 20px;
				left: 20px;
				transform: rotate(35deg);
			`
		}
	}

	.triange-decoration {
		position: absolute;
		bottom: 0;
		left: -130px;
		transition: all .1s linear;
		opacity: 0.2;
		transform: rotate(15deg);
		z-index: 13;

		& .triangle-container {
			position: relative;
		}

		& .side {
			width: 250px;
			height: 40px;
			background-color: ${({ theme }) => theme.lambda};
			border-radius: 30px;
			position: absolute;
			top: 0;
			bottom: 0;
		}

		& .left {
			transform: rotate(60deg);
			transform-origin: right center;
			top: 15px;
			left: -10px;
		}

		& .right {
			transform: rotate(-60deg);
			transform-origin: left center;
			top: 15px;
			left: 10px;
		}

		${
			minWidth.md`
				bottom: 150px;
				left: 220px;
				transform: rotate(35deg);
				transition: all .1s linear;
			`
		}

	}
`

export const SideNavConnected = connect(mapStateToProps, mapDispatchToProps) (SideNavStyled);