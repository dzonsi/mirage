import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from '../../../action-creators/usersCreators';
import styled from 'styled-components';

import { minWidth } from '../../../theme/mixins/minWidth';

import { SectionLoadingStyled as Loading } from '../SectionLoading';
import { SectionNavLinkStyled as SectionNavLink } from '../SectionNavLink';

function HomeLinks(props) {

	const { loading, users, error } = props;

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
			<div className={props.className}>
				<div className="links-container">
					<SectionNavLink to="posts" iconName="pencil-alt" iconPrefix="fas" color="iota" />
					<SectionNavLink to="comments" iconName="comments" iconPrefix="fas" color="kappa" />
					<SectionNavLink to="todos" iconName="check-double" iconPrefix="fas" color="lambda" />
					<SectionNavLink to="photos" iconName="images" iconPrefix="fas" color="mu" />
				</div>
			</div>
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

const HomeLinksConnected = connect(mapStateToProps) (HomeLinks);

export const HomeLinksStyled = styled(HomeLinksConnected)`

	${minWidth.md`
		margin-top: 50px;
	`}

	.links-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

`