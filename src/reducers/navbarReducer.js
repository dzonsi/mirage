import { TOGGLE_USER_INFO } from '../actions/actionTypes';
import { TOGGLE_SIDE_NAV } from '../actions/actionTypes';

const initialState = {
	userInfoShow: false,
  sideNavShow: false
};

function navbarReducer(state = initialState, action) {
	switch(action.type) {
		case TOGGLE_USER_INFO:
    	return {
    		...state,
    		userInfoShow: !state.userInfoShow
    	}
    case TOGGLE_SIDE_NAV:
      return {
        ...state,
        sideNavShow: !state.sideNavShow
      }
    default:
     return state;
	}
}

export default navbarReducer;