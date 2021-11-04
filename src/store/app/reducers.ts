import * as appStateConstant from 'common/constants/appState';
import * as actionTypes from './actionTypes';

export interface AppState {
	initialized: string;
	sidebar: string;
}

export const initialState = {
	initialized: appStateConstant.APP_STATE_INITIALIZED_NO,
	sidebar: appStateConstant.APP_STATE_SIDEBAR_YES
};

export const appReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case actionTypes.APP_INITIALIZED_SUCCEED:
			return {
				...state,
				initialized: action.payload.initialized
			};
		case actionTypes.APP_SIDEBAR_SUCCEED:
			return {
				...state,
				sidebar: action.payload.sidebar
			};
		default:
			return {
				...state
			};
	}
};
