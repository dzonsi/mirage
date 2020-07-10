import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { fetchUsers } from '../../action-creators/usersCreators';
//import { minWidth } from '../../../theme/mixins/minWidth';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import Users from './sections/Users';
import { LoadingStyled as Loading } from './Loading';

function Home(props) {

	const { users, loading, error } = props;

	useEffect(() => {
		if(!props.users.length) {
			props.dispatch(fetchUsers());
		}
	}, []);

	if(error) {
		return <h2>Error</h2>
	}

	return (
		<div className={props.className}>
			<h2>Home component</h2>
			<Users />
		</div>
	)
}

const mapStateToProps = state => ({
	users: state.usersReducer.users,
	loading: state.usersReducer.loading,
	error: state.usersReducer.error
});

const HomeConnected = connect(mapStateToProps) (Home);

export const HomeStyled = styled(HomeConnected)`
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	aligh-items: center;
`