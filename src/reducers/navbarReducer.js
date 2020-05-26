import { TOGGLE_USER_INFO } from '../actions/actionTypes';

const initialState = {
	userInfoShow: false
};

function navbarReducer(state = initialState, action) {
	switch(action.type) {
		case TOGGLE_USER_INFO:
    	return {
    		...state,
    		userInfoShow: !state.userInfoShow
    	}
    default:
     return state;
	}
}

export default navbarReducer;