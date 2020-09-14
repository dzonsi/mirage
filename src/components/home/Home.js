import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { fetchUsers } from '../../action-creators/usersCreators';
import { minWidth } from '../../theme/mixins/minWidth';

import Users from './sections/Users';

function Home(props) {

	useEffect(() => {
		if(!props.users.length) {
			props.dispatch(fetchUsers());
		}
	}, []);

	return (
		<div className={props.className}>
			<Users />
		</div>
	)
}

const mapStateToProps = state => ({
	users: state.usersReducer.users
});

const HomeConnected = connect(mapStateToProps) (Home);

export const HomeStyled = styled(HomeConnected)`
	margin: 20px;
	max-width: 992px;

	${minWidth.md`
		margin: auto;
	`}
`