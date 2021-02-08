import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchUsers } from '../../action-creators/usersCreators';
import { minWidth } from '../../theme/mixins/minWidth';

import Users from './sections/Users';

import { HomeLinksStyled as HomeLinks } from './sections/HomeLinks';


function Home(props) {

	useEffect(() => {
		if(!props.users.length) {
			props.dispatch(fetchUsers());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

		margin: 20px 20px 0;
		max-width: 992px;

		${minWidth.md`
			margin: auto;
		`}
	}

`