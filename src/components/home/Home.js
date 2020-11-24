import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchUsers } from '../../action-creators/usersCreators';
import { minWidth } from '../../theme/mixins/minWidth';

import Users from './sections/Users';
import { SectionNavLinkStyled as SectionNavLink } from './SectionNavLink';
import { HomeLinksStyled as HomeLinks } from './sections/HomeLinks';

import { pageIn, pageOut } from '../../style/animations/page';

function Home(props) {

	useEffect(() => {
		if(!props.users.length) {
			props.dispatch(fetchUsers());
		}
		const transitionContainer = document.getElementById('transition-container');
		transitionContainer.removeAttribute('style');
	}, []);

	return (
		<div className={props.className}>
			<div className='wrapper'>
				<Users />
			</div>
			<div className='wrapper'>
				<HomeLinks />
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