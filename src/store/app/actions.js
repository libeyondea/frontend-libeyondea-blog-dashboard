import * as actionTypes from './actionTypes.js';

export const changeInitializedApp = (newInitializedApp) => ({
	type: actionTypes.CHANGE_INITIALIZED_APP_REQUESTED,
	payload: {
		newInitializedApp
	}
});

export const changeSidebarApp = (newSidebarApp) => ({
	type: actionTypes.CHANGE_SIDEBAR_APP_REQUESTED,
	payload: {
		newSidebarApp
	}
});
