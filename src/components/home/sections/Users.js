import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from '../../../action-creators/usersCreators';

import { SectionLoadingStyled as Loading } from '../SectionLoading';
import { SectionHeadingStyled as Heading } from '../SectionHeading';
import { ItemsContainerStyled as ItemsContainer } from '../../shared/ItemsContainer';
import { ItemStyled as Item } from '../../shared/Item';

function Users(props) {

	const { loading, users, error } = props;

	useEffect(() => {
		if(!props.users.length) {
			props.dispatch(fetchUsers());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if(loading) {
		return (
			<Loading />
		)
	}
	if(users.length) {

		const items = users.map((user, index) => {
			// show 5 users
			if(index > 4) return false;
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