import * as actionTypes from './actionTypes';

const initalState = {
	initialized: 'INITIALIZED_APP_NO',
	sidebar: true
};

const appReducer = (state = initalState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_INITIALIZED_APP_SUCCEED:
			return {
				...state,
				initialized: action.payload.newInitializedApp
			};
		case actionTypes.CHANGE_SIDEBAR_APP_SUCCEED:
			return {
				...state,
				sidebar: action.payload.newSidebarApp
			};
		default:
			return {
				...state
			};
	}
};

export default appReducer;
