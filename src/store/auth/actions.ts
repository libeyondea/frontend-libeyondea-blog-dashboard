import { createAction } from '@reduxjs/toolkit';

export const actionTypes = {
	AUTH_REQUEST: 'AUTH_REQUEST',
	AUTH_SUCCESS: 'AUTH_SUCCESS'
};

export const authRequestAction = createAction(actionTypes.AUTH_REQUEST, (current: any) => ({
	payload: {
		current
	}
}));

export const authSuccessAction = createAction(actionTypes.AUTH_SUCCESS, (current: any) => ({
	payload: {
		current
	}
}));
