import { FETCH_USERS_BEGIN } from '../actions/actionTypes';
import { FETCH_USERS_SUCCESS } from '../actions/actionTypes';
import { FETCH_USERS_ERROR } from '../actions/actionTypes';

import axios from 'axios';

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
				console.log(response.data);
				dispatch(fetchUsersSuccess(response.data));
			})
			.catch(error => {
				dispatch(fetchUsersError(error));
			})
		}, 5000);
	}
}