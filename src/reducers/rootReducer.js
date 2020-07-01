import { combineReducers } from 'redux';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';

export default combineReducers({
	navbarReducer,
	usersReducer
});