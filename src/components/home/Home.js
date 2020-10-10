import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { fetchUsers } from '../../action-creators/usersCreators';
import { minWidth } from '../../theme/mixins/minWidth';
import { NavLink } from 'react-router-dom';
import Users from './sections/Users';

import { pageIn, pageOut } from '../../style/animations/page';

function Home(props) {

	useEffect(() => {
		if(!props.users.length) {
			props.dispatch(fetchUsers());
		}
	}, []);

	return (
		<div className={props.className}>
			<div className='wrapper'>
				<Users />
				<NavLink to="/ds;af">Play Protect</NavLink>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	users: state.usersReducer.users
});

const HomeConnected = connect(mapStateToProps) (Home);

export const HomeStyled = styled(HomeConnected)`

	& .wrapper {

		margin: 20px;
		max-width: 992px;

		${minWidth.md`
			margin: auto;
		`}
	}

	position: absolute;
	top: 0;
	left: 0;
	width: 100%;

	&.page-enter {
		opacity: 0.5;
		transform: translateX(-100%);
	}
	&.page-enter-active {
		opacity: 1;
		transform: translateX(0);
		transition: all .3s linear;
	}

	&.page-exit {
		opacity: 1;
		transform: translateX(0);
	}
	&.page-exit-active {
		opacity: 0.5;
		transform: translateX(-100%);
		transition: all .3s linear;
	}


`