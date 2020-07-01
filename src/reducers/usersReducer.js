import { FETCH_USERS_BEGIN } from '../actions/actionTypes';
import { FETCH_USERS_SUCCESS } from '../actions/actionTypes';
import { FETCH_USERS_ERROR } from '../actions/actionTypes';

const initialState = {
	users: [],
	loading: false,
	error: null
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
		default:
			return state;
	}

}