import { FETCH_POSTS_BEGIN } from '../actions/actionTypes';
import { FETCH_POSTS_SUCCESS } from '../actions/actionTypes';
import { FETCH_POSTS_ERROR } from '../actions/actionTypes';

const initialState = {
	posts: [],
	loading: false,
	error: null,
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
		default:
			return state;
	}

}