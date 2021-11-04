import { filter, map } from 'rxjs/operators';

import { appInitializedSucceedAction, appSidebarSucceedAction } from './actions';
import * as actionTypes from './actionTypes';

export const appInitializedEpic = (action$: any) =>
	action$.pipe(
		filter((action: any) => action.type === actionTypes.APP_INITIALIZED_REQUESTED),
		map((action: any) => appInitializedSucceedAction(action.payload.initialized))
	);

export const appSidebarEpic = (action$: any) =>
	action$.pipe(
		filter((action: any) => action.type === actionTypes.APP_SIDEBAR_REQUESTED),
		map((action: any) => appSidebarSucceedAction(action.payload.sidebar))
	);
