import React from 'react';
import styled from 'styled-components';
// components
import { UserToggleStyled as UserToggle } from './UserToggle';
import { UserDataStyled as UserData } from './UserData';
// action from redux
import { connect } from 'react-redux';
import { toggleUserInfo } from '../../../action-creators/actionCreators';


function UserInfo(props) {
	return (
		<div className={props.className}>
			<UserToggle
				toggle={props.toggleUserInfo}
			/>
			<UserData
				show={props.userInfoShow}
				toggle={props.toggleUserInfo}
			/>
		</div>
	)
}

const mapStateToProps = state => {
  return {
    ...state.navbarReducer
  }
}

const mapDispatchToProps = {
	toggleUserInfo
}

const UserInfoStyled = styled(UserInfo)`
	position: relative;
	margin: 0.5rem 1rem;
`

export const UserInfoConnected = connect(mapStateToProps, mapDispatchToProps) (UserInfoStyled);