import React, { useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchUsers } from '../../action-creators/usersCreators';
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

import { LoadingStyled as Loading } from '../shared/Loading';
import { UserHeadingStyled as UserHeading } from './UserHeading';
import { UserBodyStyled as UserBody } from './UserBody';
import { UserAddressStyled as UserAddress } from './UserAddress';
import { UserLinksStyled as UserLinks } from './UserLinks';
import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { SingleUserMoreStyled as More } from './SingleUserMore';

function SingleUser(props) {

	const { loading, users, error } = props;
	const history = useHistory();
	const params = useParams();
	const user = users[params.id - 1];

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

		return (
			<section className={props.className} id="single-user">
				<div className="wrapper">
					<div className="btn-container">
						<Button className="back" padding="0 5px" title="Go back" onClick={() => history.goBack()}>
							<Icon icon={['fas', 'arrow-left']} />
						</Button>
						<More />
					</div>
					<UserHeading user={user} />
					<hr className="divider"/>
					<UserBody user={user} />
					<hr className="divider"/>
					<UserAddress address={user.address} />
					<hr className="divider"/>
					<UserLinks />
				</div>
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
	margin: 20px 0 0;

	& .wrapper {

		margin: 20px 20px 0;

		${minWidth.md`
			margin: 20px auto 0;
			max-width: 952px;
		`}

	}

	& .wrapper .btn-container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		${minWidth.xs`
			justify-content: flex-end;
		`}

		& .back, & .more {
			color: ${({ theme }) => theme.beta};

			&:hover {
				color: ${({ theme }) => theme.zeta};
			}
		}

		& .back {
			${minWidth.xs`
				display: none;
			`}
		}

	}

	& .divider {
		background-color: ${({ theme }) => theme.name === 'light' ? theme.delta : theme.gamma};
		margin: 10px;
		transition: transform .2s linear;

		&:first-of-type {

			${minWidth.xs`
				transform: rotate(-15deg) translate(10px, -20px);
			`}

			${minWidth.sm`
				transform: rotate(-15deg) translate(10px, -35px);
			`}

		}

		&:nth-of-type(2) {

			${minWidth.xs`
				transform: rotate(5deg) translate(10px, 10px);
			`}

			${minWidth.md`
				transform: rotate(15deg) translate(10px, -10px);
			`}

		}

		&:nth-of-type(3) {

			${minWidth.xs`
				transform: rotate(-10deg) translate(0px, 0px);
			`}

			${minWidth.md`
				transform: rotate(-10deg) translate(0px, -20px);
			`}

		}

	}

`

export const SingleUserConnected = connect(mapStateToProps) (SingleUserStyled);