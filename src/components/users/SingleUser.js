import React, { useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchUsers } from '../../action-creators/usersCreators';
import styled from 'styled-components';

import { LoadingStyled as Loading } from '../home/Loading';
import { UserHeadingStyled as UserHeading } from './UserHeading';
import { UserBodyStyled as UserBody } from './UserBody';
import { UserAddressStyled as UserAddress } from './UserAddress';
import { UserLinksStyled as UserLinks } from './UserLinks';
import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

function SingleUser(props) {

	const { loading, users, error } = props;
	const history = useHistory();
	const params = useParams();
	const user = users[params.id - 1];

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

		return (
			<section className={props.className}>
				<Button onClick={() => history.goBack()}>
					<Icon icon={['fas', 'arrow-left']} />
				</Button>
				<UserHeading user={user} />
				<hr />
				<UserBody user={user} />
				<hr />
				<UserAddress address={user.address} />
				<UserLinks />
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

const SingleUserStyled = styled(SingleUser)`
	margin: 20px;

	& hr {
		background-color: ${({ theme }) => theme.delta};
		margin: 10px;
	}
`

export const SingleUserConnected = connect(mapStateToProps) (SingleUserStyled);