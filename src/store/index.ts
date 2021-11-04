import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as authEpics from 'store/auth/epics';
import { authReducer, AuthState } from 'store/auth/reducers';

import * as appEpics from 'store/app/epics';
import { appReducer, AppState } from 'store/app/reducers';
import config from 'config';

const epicMiddleware = createEpicMiddleware();

export interface RootState {
	appState: AppState;
	authState: AuthState;
}

const configureStore = () => {
	const store = createStore(
		combineReducers({
			appState: appReducer,
			authState: authReducer
		}),
		composeWithDevTools(
			applyMiddleware(
				createLogger({
					predicate: () => config.LOGGER.REDUX
				}),
				epicMiddleware
			)
		)
	);

	epicMiddleware.run(combineEpics(...Object.values(appEpics), ...Object.values(authEpics)));

	return store;
};

export default configureStore;
