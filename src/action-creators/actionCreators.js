import { TOGGLE_USER_INFO } from '../actions/actionTypes';
import { TOGGLE_SIDE_NAV } from '../actions/actionTypes';

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