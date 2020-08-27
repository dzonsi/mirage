import { FETCH_USERS_BEGIN } from '../actions/actionTypes';
import { FETCH_USERS_SUCCESS } from '../actions/actionTypes';
import { FETCH_USERS_ERROR } from '../actions/actionTypes';
import { SORT_LOADING } from '../actions/actionTypes';
import { SORT_ID } from '../actions/actionTypes';
import { SORT_ASC } from '../actions/actionTypes';
import { SORT_DESC } from '../actions/actionTypes';

const initialState = {
	users: [],
	loading: false,
	error: null,
	order: 'id'
};

export default function usersReducer(state = initialState, action) {
	switch(action.type) {
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
		default:
			return state;
	}

}