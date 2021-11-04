import * as actionTypes from './actionTypes';

export const authAction = (current: any) => ({
	type: actionTypes.AUTH_REQUESTED,
	payload: {
		current
	}
});

export const authSucceedAction = (current: any) => ({
	type: actionTypes.AUTH_SUCCEED,
	payload: {
		current
	}
});
