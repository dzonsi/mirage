import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchUsers } from '../../action-creators/usersCreators';
import styled from 'styled-components';

import { LoadingStyled as Loading } from '../home/Loading';
import { ItemsContainerStyled as ItemsContainer } from '../home/ItemsContainer';
import { ItemStyled as Item } from '../home/Item';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

function AllUsers(props) {

	const { loading, users, error } = props;
	const history = useHistory();

	useEffect(() => {
		if(!props.users.length) {
			props.dispatch(fetchUsers());
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
				<div>
					<Icon
						icon={['fas', 'arrow-left']}
						onClick={() => history.goBack()}
					/>
					<h2>Users</h2>
				</div>
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

const AllUsersStyled = styled(AllUsers)`

	& div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	& svg {
		margin: 0 0 0 20px;
	}

	& h2 {
		margin: 0 0 0 18px;
	}
`

export const AllUsersConnected = connect(mapStateToProps) (AllUsersStyled);