import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { toggleUsersOptions } from '../../action-creators/usersCreators';

import { StatusStyled as Status } from '../shared/Status';
import { AllUsersOptionsStyled as Options } from './AllUsersOptions';
import { AllUsersBodyStyled as AllUsersBody } from './AllUsersBody';

function AllUsers(props) {

	const {
		showOptions,
		toggleUsersOptions
	} = props;

	return (
		<section className={props.className} id="all-users">
			<Status
				type="Users"
				options={<Options />}
				showOptions={showOptions}
				toggleUsersOptions={toggleUsersOptions}
			/>
			<AllUsersBody />
		</section>
	)

}

const mapStateToProps = state => ({
	showOptions: state.usersReducer.usersOptions
});

const mapDispatchToProps = {
	toggleUsersOptions
}

const AllUsersConnected = connect(mapStateToProps, mapDispatchToProps) (AllUsers);

export const AllUsersStyled = styled(AllUsersConnected)`

`