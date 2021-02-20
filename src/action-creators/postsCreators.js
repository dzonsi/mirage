import { FETCH_POSTS_BEGIN } from '../actions/actionTypes';
import { FETCH_POSTS_SUCCESS } from '../actions/actionTypes';
import { FETCH_POSTS_ERROR } from '../actions/actionTypes';
import { TOGGLE_POSTS_OPTIONS } from '../actions/actionTypes';
import { CHANGE_POSTS_FILTER } from '../actions/actionTypes';

import axios from 'axios';

// fetch posts

export const fetchPostsBegin = () => ({
	type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = posts => ({
	type: FETCH_POSTS_SUCCESS,
	payload: posts
});

export const fetchPostsError = error => ({
	type: FETCH_POSTS_ERROR,
	payload: error
});

export function fetchPosts() {
	return function(dispatch) {
		dispatch(fetchPostsBegin());
		return setTimeout(() => {
			axios.get('https://jsonplaceholder.typicode.com/posts')
			.then( response => {
				dispatch(fetchPostsSuccess(response.data));
			})
			.catch(error => {
				dispatch(fetchPostsError(error));
			})
		}, 500);
	}
}

// posts options
export const togglePostsOptions = () => ({
	type: TOGGLE_POSTS_OPTIONS
});

export const changePostsFilter = text => ({
	type: CHANGE_POSTS_FILTER,
	payload: text
});