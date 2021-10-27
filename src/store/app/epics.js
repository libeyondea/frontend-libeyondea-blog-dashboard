import { filter, map } from 'rxjs/operators';
import * as actionTypes from './actionTypes';

export const changeInitializedAppEpic = (action$) =>
	action$.pipe(
		filter((action) => action.type === actionTypes.CHANGE_INITIALIZED_APP_REQUESTED),
		map((action) => ({
			type: actionTypes.CHANGE_INITIALIZED_APP_SUCCEED,
			payload: {
				...action.payload
			}
		}))
	);

export const changeSidebarAppEpic = (action$) =>
	action$.pipe(
		filter((action) => action.type === actionTypes.CHANGE_SIDEBAR_APP_REQUESTED),
		map((action) => ({
			type: actionTypes.CHANGE_SIDEBAR_APP_SUCCEED,
			payload: {
				...action.payload
			}
		}))
	);
