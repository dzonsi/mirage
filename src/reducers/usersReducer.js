import { FETCH_USERS_BEGIN } from '../actions/actionTypes';
import { FETCH_USERS_SUCCESS } from '../actions/actionTypes';
import { FETCH_USERS_ERROR } from '../actions/actionTypes';
import { SORT_LOADING } from '../actions/actionTypes';
import { SORT_ID } from '../actions/actionTypes';
import { SORT_ASC } from '../actions/actionTypes';
import { SORT_DESC } from '../actions/actionTypes';
import { TOGGLE_USER_OPTIONS } from '../actions/actionTypes';
import { TOGGLE_USERS_OPTIONS } from '../actions/actionTypes';

const initialState = {
	users: [],
	loading: false,
	error: null,
	order: 'id',
	userOptions: false,
	usersOptions: false
};

export default function usersReducer(state = initialState, action) {
	switch(action.type) {
		// fetch users
		case FETCH_USERS_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			}
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload
			}
		case FETCH_USERS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
				users: []
			}
		// sort users
		case SORT_LOADING:
			return {
				...state,
				loading: true
			}
		case SORT_ID:
			const id = [...state.users];
			const idSorted = id.sort((a, b) => (a.id > b.id) ? 1 : -1);
			return {
				...state,
				users: idSorted,
				loading: false
			}
		case SORT_ASC:
			const asc = [...state.users];
			const ascSorted = asc.sort((a, b) => (a.name > b.name) ? 1 : -1);
			return {
				...state,
				users: ascSorted,
				loading: false
			}
		case SORT_DESC:
			const desc = [...state.users];
			const descSorted = desc.sort((a, b) => (a.name < b.name) ? 1 : -1);
			return {
				...state,
				users: descSorted,
				loading: false
			}
		// single user options
		case TOGGLE_USER_OPTIONS:
			return {
				...state,
				userOptions: !state.userOptions
			}
		// users options
		case TOGGLE_USERS_OPTIONS:
			return {
				...state,
				usersOptions: !state.usersOptions
			}
		default:
			return state;
	}

}