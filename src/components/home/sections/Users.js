import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { SectionHeadingStyled as Heading } from '../SectionHeading';
import { ItemsContainerStyled as ItemsContainer } from '../ItemsContainer';
import { ItemStyled as Item } from '../Item';

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

		const items = users.map((user, index) => {
			// show 6 users
			if(index > 5) return false;
			return (
				<Item user={user} key={user.id}/>
			);
		});

		return (
			<section>
				<Heading to="users" />
				<ItemsContainer>
					{items}
				</ItemsContainer>
			</section>
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