import { TOGGLE_USER_INFO } from '../actions/actionTypes';
import { TOGGLE_SIDE_NAV } from '../actions/actionTypes';
import { FETCH_USERS_BEGIN } from '../actions/actionTypes';
import { FETCH_USERS_SUCCESS } from '../actions/actionTypes';
import { FETCH_USERS_ERROR } from '../actions/actionTypes';

// navbar

export function toggleUserInfo() {
	return {
		type: TOGGLE_USER_INFO
	}
}

export function toggleSideNav() {
	return {
		type: TOGGLE_SIDE_NAV
	}
}

// users

export const fetchUsersBegin = () => ({
	type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
	type: FETCH_USERS_SUCCESS,
	payload: { users }
});

export const fetchUsersError = error => ({
	type: FETCH_USERS_ERROR,
	payload: { error }
});