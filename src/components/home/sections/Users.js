import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";


import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

function Users(props) {

	const { loading, users, error } = props;

	if(loading) {
		return (
			<div>
				<Icon icon={['fas', 'spinner']} size="3x" spin />
			</div>
		)
	}
	if(users.length) {

		const items = users.map(user => {
			return (
				<div>
					<img width="100" height="100" src="https://via.placeholder.com/150/24f355" alt="User profile" />
					<p>{user.name}</p>
					<p>{user.address.city}</p>
				</div>
			);
		});

		return (
			<div>
				<NavLink to="users">
					<h2>Users</h2>
					<Icon icon={['fas', 'arrow-right']} />
				</NavLink>
				{items}
			</div>
		)
	}
	if(error) {
		return (
			<h2>Something went wrong!</h2>
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

export default connect(mapStateToProps) (Users);