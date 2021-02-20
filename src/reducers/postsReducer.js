import { FETCH_POSTS_BEGIN } from '../actions/actionTypes';
import { FETCH_POSTS_SUCCESS } from '../actions/actionTypes';
import { FETCH_POSTS_ERROR } from '../actions/actionTypes';
import { TOGGLE_POSTS_OPTIONS } from '../actions/actionTypes';
import { CHANGE_POSTS_FILTER } from '../actions/actionTypes';

const initialState = {
	posts: [],
	loading: false,
	error: null,
	postsOptions: false,
	postsFilter: ''
};

export default function postsReducer(state = initialState, action) {
	switch(action.type) {
		// fetch posts
		case FETCH_POSTS_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			}
		case FETCH_POSTS_SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.payload
			}
		case FETCH_POSTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
				posts: []
			}
		case TOGGLE_POSTS_OPTIONS:
			return {
				...state,
				postsOptions: !state.postsOptions
			}
		case CHANGE_POSTS_FILTER:
			return {
				...state,
				postsFilter: action.payload
			}
		default:
			return state;
	}

}