import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchUsers } from '../../action-creators/usersCreators';
import { sortById } from '../../action-creators/usersCreators';
import { sortByAsc } from '../../action-creators/usersCreators';
import { sortByDesc } from '../../action-creators/usersCreators';

import { LoadingStyled as Loading } from '../home/Loading';
import { ItemsContainerStyled as ItemsContainer } from '../home/ItemsContainer';
import { ItemStyled as Item } from '../home/Item';
import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { StatusConnectedStyled as Status } from '../shared/Status';
import { AllUsersOptionsStyled as Options } from './AllUsersOptions';

function AllUsers(props) {

	const {
		loading,
		users,
		error,
		sortById,
		sortByAsc,
		sortByDesc
	} = props;
	const history = useHistory();
	const goBack = history.goBack;

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
				<div>
					<Button onClick={() => history.goBack()}>
						<Icon icon={['fas', 'arrow-left']} />
					</Button>
					<h2>Users</h2>
					<button onClick={sortById}>Id</button>
					<button onClick={sortByAsc}>Asc</button>
					<button onClick={sortByDesc}>Desc</button>
					<Button onClick={() => {console.log('Options')}}>
						<Icon icon={['fas', 'ellipsis-v']} />
					</Button>
				</div>
				<Status
					type="Users"
					options={<Options />}
					goBack={goBack}
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
	fetchUsers,
	sortById,
	sortByAsc,
	sortByDesc
}

const AllUsersStyled = styled(AllUsers)`

`

export const AllUsersConnected = connect(mapStateToProps, mapDispatchToProps) (AllUsersStyled);