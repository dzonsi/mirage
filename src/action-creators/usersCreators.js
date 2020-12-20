import { FETCH_USERS_BEGIN } from '../actions/actionTypes';
import { FETCH_USERS_SUCCESS } from '../actions/actionTypes';
import { FETCH_USERS_ERROR } from '../actions/actionTypes';
import { SORT_LOADING } from '../actions/actionTypes';
import { SORT_ID } from '../actions/actionTypes';
import { SORT_ASC } from '../actions/actionTypes';
import { SORT_DESC } from '../actions/actionTypes';
import { TOGGLE_USER_OPTIONS } from '../actions/actionTypes';
import { TOGGLE_USER_EDIT } from '../actions/actionTypes';
import { TOGGLE_USERS_OPTIONS } from '../actions/actionTypes';

import axios from 'axios';

// fetch users

export const fetchUsersBegin = () => ({
	type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
	type: FETCH_USERS_SUCCESS,
	payload: users
});

export const fetchUsersError = error => ({
	type: FETCH_USERS_ERROR,
	payload: error
});

export function fetchUsers() {
	return function(dispatch) {
		dispatch(fetchUsersBegin());
		return setTimeout(() => {
			axios.get('https://jsonplaceholder.typicode.com/users')
			.then( response => {
				dispatch(fetchUsersSuccess(response.data));
			})
			.catch(error => {
				dispatch(fetchUsersError(error));
			})
		}, 500);
	}
}

// sort users

export const sortLoading = () => ({
	type: SORT_LOADING
});

export const sortId = () => ({
	type: SORT_ID
});

export const sortAsc = () => ({
	type: SORT_ASC
});

export const sortDesc = () => ({
	type: SORT_DESC
});

export const sortBy = type => {
	return dispatch => {
		dispatch(sortLoading());
		return setTimeout(() => {
			switch(type) {
				case SORT_ID:
				 	return dispatch(sortId());
				case SORT_ASC:
				 	return dispatch(sortAsc());
				case SORT_DESC:
				 	return dispatch(sortDesc());
				default:
					return dispatch(sortId());
			}
		}, 500);
	}
};

// single user options

export const toggleUserOptions = () => ({
	type: TOGGLE_USER_OPTIONS
});

// single user edit
export const toggleUserEdit = () => ({
	type: TOGGLE_USER_EDIT
});

// users options

export const toggleUsersOptions = () => ({
	type: TOGGLE_USERS_OPTIONS
});