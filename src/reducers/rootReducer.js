import { combineReducers } from 'redux';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';

export default combineReducers({
	navbarReducer,
	usersReducer,
	postsReducer
});