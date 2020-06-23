import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { DefaultButton as Button } from '../../shared/DefaultButton';


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
			<Button onClick={props.toggle}>
				<Icon icon={['fas', 'times']} />
			</Button>
		</div>
	)
}

export const SideNavStyled = styled(SideNav)`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 15;
	background-color: ${({ theme }) => theme.name === 'light' ?
		theme.alpha :
		theme.delta
	};

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
			color: ${({ theme }) => theme.gamma};
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
		color: ${({ theme }) => theme.gamma};
		position: absolute;
		top: 0;
		right: 0;
	}
`