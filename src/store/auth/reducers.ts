import * as actionTypes from './actionTypes';

export interface AuthState {
	current: any;
}

export const initialState = {
	current: null
};

export const authReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case actionTypes.AUTH_SUCCEED:
			return {
				current: action.payload.current
			};
		default:
			return {
				...state
			};
	}
};
