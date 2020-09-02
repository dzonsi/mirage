import React from "react";
import { connect } from "react-redux";

import { SectionLoadingStyled as Loading } from '../SectionLoading';
import { SectionHeadingStyled as Heading } from '../SectionHeading';
import { ItemsContainerStyled as ItemsContainer } from '../../shared/ItemsContainer';
import { ItemStyled as Item } from '../../shared/Item';

function Users(props) {

	const { loading, users, error } = props;

	if(loading) {
		return (
			<Loading />
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

export default connect(mapStateToProps) (Users);