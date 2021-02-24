import { TOGGLE_USER_INFO } from '../actions/actionTypes';
import { TOGGLE_SIDE_NAV } from '../actions/actionTypes';
import { TOGGLE_SIDE_NAV_FIRST } from '../actions/actionTypes';

const initialState = {
	userInfoShow: false,
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