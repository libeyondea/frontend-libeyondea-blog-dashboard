import { createReducer } from '@reduxjs/toolkit';
import { authSuccessAction } from './actions';

type AuthState = {
	current:
		| {
				tokens: any;
				user: any;
		  }
		| null
		| undefined;
};

const initialState: AuthState = {
	current: null
};

const authReducer = createReducer(initialState, (builder) => {
	builder.addCase(authSuccessAction, (state, action) => ({
		...state,
		current: action.payload.current
	}));
});

export default authReducer;
