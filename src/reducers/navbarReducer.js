import { TOGGLE_USER_INFO } from '../actions/actionTypes';
import { TOGGLE_SIDE_NAV } from '../actions/actionTypes';
import { TOGGLE_SIDE_NAV_FIRST } from '../actions/actionTypes';
import { TOGGLE_USER_INFO_FIRST } from '../actions/actionTypes';

const initialState = {
	userInfoShow: false,
  userInfoFirst: true,
  sideNavShow: false,
  sideNavFirst: true
};

function navbarReducer(state = initialState, action) {
	switch(action.type) {
		case TOGGLE_USER_INFO:
    	return {
    		...state,
    		userInfoShow: !state.userInfoShow
    	}
    case TOGGLE_USER_INFO_FIRST:
      return {
        ...state,
        userInfoFirst: !state.userInfoFirst
      }
    case TOGGLE_SIDE_NAV:
      return {
        ...state,
        sideNavShow: !state.sideNavShow
      }
    case TOGGLE_SIDE_NAV_FIRST:
      return {
        ...state,
        sideNavFirst: !state.sideNavFirst
      }
    default:
     return state;
	}
}

export default navbarReducer;