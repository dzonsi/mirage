import React from 'react';
import styled from 'styled-components';
// components
import { UserToggleStyled as UserToggle } from './UserToggle';
import { UserDataStyled as UserData } from './UserData';
// action from redux
import { connect } from 'react-redux';
import { toggleUserInfo } from '../../../action-creators/navbarCreators';
import { toggleUserInfoFirst } from '../../../action-creators/navbarCreators';

import PropTypes from 'prop-types';

function UserInfo(props) {

	const {
		userInfoShow: show,
		toggleUserInfo: toggle,
		userInfoFirst: first,
		toggleUserInfoFirst: toggleFirst
	} = props;

	return (
		<div id="user-info" className={props.className}>
			<UserToggle
				show={show}
				toggle={toggle}
				first={first}
				toggleFirst={toggleFirst}
			/>
			<UserData
				show={show}
				toggle={toggle}
			/>
		</div>
	)
}

UserInfo.propTypes = {
	userInfoShow: PropTypes.bool.isRequired,
	toggleUserInfo: PropTypes.func.isRequired,
	userInfoFirst: PropTypes.bool.isRequired,
	toggleUserInfoFirst: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    ...state.navbarReducer
  }
}

const mapDispatchToProps = {
	toggleUserInfo,
	toggleUserInfoFirst
}

const UserInfoStyled = styled(UserInfo)`
	position: relative;
	margin: 0.5rem 1rem;
`

export const UserInfoConnected = connect(mapStateToProps, mapDispatchToProps) (UserInfoStyled);