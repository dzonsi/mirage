import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchUsers } from '../../action-creators/usersCreators';

import { LoadingStyled as Loading } from '../home/Loading';
import { ItemsContainerStyled as ItemsContainer } from '../home/ItemsContainer';
import { ItemStyled as Item } from '../home/Item';
import { StatusConnectedStyled as Status } from '../shared/Status';
import { AllUsersOptionsStyled as Options } from './AllUsersOptions';

function AllUsers(props) {

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
			<section className={props.className}>
				<Status
					type="Users"
					options={<Options />}
				/>
				<ItemsContainer show="all">
					{items}
				</ItemsContainer>
			</section>
		)
	}
	if(error) {
		return (
			<h2>Something went wrong while fetching users!</h2>
		)
	}

	return (
		<h2>Users</h2>
	)

}

const mapStateToProps = state => ({
	users: state.usersReducer.users,
	loading: state.usersReducer.loading,
	error: state.usersReducer.error
});

const mapDispatchToProps = {
	fetchUsers
}

const AllUsersStyled = styled(AllUsers)`

`

export const AllUsersConnected = connect(mapStateToProps, mapDispatchToProps) (AllUsersStyled);