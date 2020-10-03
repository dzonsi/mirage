import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchUsers } from '../../action-creators/usersCreators';

import { LoadingStyled as Loading } from '../shared/Loading';
import { ItemsContainerStyled as ItemsContainer } from '../shared/ItemsContainer';
import { ItemStyled as Item } from '../shared/Item';

function AllUsersBody(props) {

	const { loading, users, error } = props;

	useEffect(() => {
		if(!props.users.length) {
			props.fetchUsers();
		}
	}, []);

	if(loading) {
		return (
			<Loading />
		)
	}
	if(users.length) {

		const items = users.map((user, index) => {
			return (
				<Item user={user} key={user.id} show="all" />
			);
		});

		return (
			<div className={props.className}>
				<ItemsContainer show="all">
					{items}
				</ItemsContainer>
			</div>
		)
	}
	if(error) {
		return (
			<h2>Something went wrong while fetching users!</h2>
		)
	}

	return null

}

const mapStateToProps = state => ({
	users: state.usersReducer.users,
	loading: state.usersReducer.loading,
	error: state.usersReducer.error
});

const mapDispatchToProps = {
	fetchUsers
}

const AllUsersBodyConnected = connect(mapStateToProps, mapDispatchToProps) (AllUsersBody);

export const AllUsersBodyStyled = styled(AllUsersBodyConnected)`

`