import { createAction } from '@reduxjs/toolkit';

export const actionTypes = {
	APP_INITIALIZED_REQUEST: 'APP_INITIALIZED_REQUEST',
	APP_INITIALIZED_SUCCESS: 'APP_INITIALIZED_SUCCESS',
	APP_SIDEBAR_REQUEST: 'APP_SIDEBAR_REQUEST',
	APP_SIDEBAR_SUCCESS: 'APP_SIDEBAR_SUCCESS'
};

export const appInitializedRequestAction = createAction(actionTypes.APP_INITIALIZED_REQUEST, (initialized: string) => ({
	payload: {
		initialized
	}
}));

export const appInitializedSuccessAction = createAction(actionTypes.APP_INITIALIZED_SUCCESS, (initialized: string) => ({
	payload: {
		initialized
	}
}));

export const appSidebarRequestAction = createAction(actionTypes.APP_SIDEBAR_REQUEST, (sidebar: string) => ({
	payload: {
		sidebar
	}
}));

export const appSidebarSuccessAction = createAction(actionTypes.APP_SIDEBAR_SUCCESS, (sidebar: string) => ({
	payload: {
		sidebar
	}
}));
