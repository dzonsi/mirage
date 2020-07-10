import React from "react";
import { connect } from "react-redux";

import { LoadingStyled as Loading } from '../home/Loading';
import { ItemsContainerStyled as ItemsContainer } from '../home/ItemsContainer';
import { ItemStyled as Item } from '../home/Item';

function AllUsers(props) {

	const { loading, users, error } = props;

	if(loading) {
		return (
			<Loading />
		)
	}
	if(users.length) {

		const items = users.map((user, index) => {
			// return (
			// 	<Item user={user} key={user.id}/>
			// );
			return false;
		});

		return (
			<section>
				<h2>All users!</h2>
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

export const AllUsersConnected = connect(mapStateToProps) (AllUsers);