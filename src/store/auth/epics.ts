import { filter, map } from 'rxjs/operators';

import { authSucceedAction } from './actions';
import * as actionTypes from './actionTypes';

export const authEpic = (action$: any) =>
	action$.pipe(
		filter((action: any) => action.type === actionTypes.AUTH_REQUESTED),
		map((action: any) => authSucceedAction(action.payload.current))
	);
