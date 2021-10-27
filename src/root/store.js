import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { changeAuthEpic } from 'store/auth/epics';
import authReducer from 'store/auth/reducers';

import { changeInitializedAppEpic, changeSidebarAppEpic } from 'store/app/epics';
import appReducer from 'store/app/reducers';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
	const store = createStore(
		combineReducers({
			appState: appReducer,
			authState: authReducer
		}),
		composeEnhancers(
			applyMiddleware(
				createLogger({
					predicate: () => true
				}),
				epicMiddleware
			)
		)
	);

	epicMiddleware.run(combineEpics(...[changeInitializedAppEpic, changeSidebarAppEpic], changeAuthEpic));

	return store;
};

export default configureStore;
