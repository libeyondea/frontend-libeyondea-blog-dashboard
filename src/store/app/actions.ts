import * as actionTypes from './actionTypes';

export const appInitializedAction = (initialized: any) => ({
	type: actionTypes.APP_INITIALIZED_REQUESTED,
	payload: {
		initialized
	}
});

export const appInitializedSucceedAction = (initialized: any) => ({
	type: actionTypes.APP_INITIALIZED_SUCCEED,
	payload: {
		initialized
	}
});

export const appSidebarAction = (sidebar: any) => ({
	type: actionTypes.APP_SIDEBAR_REQUESTED,
	payload: {
		sidebar
	}
});

export const appSidebarSucceedAction = (sidebar: any) => ({
	type: actionTypes.APP_SIDEBAR_SUCCEED,
	payload: {
		sidebar
	}
});
