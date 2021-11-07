import { setCookie } from 'helpers/cookies';
import * as appStateConstant from 'constants/appState';
import * as cookiesConstant from 'constants/cookies';
import * as routeConstant from 'constants/route';

export const checkRoute = (store: any, history: any, pathname: string) => {
	const rootState = store.getState();
	if (
		pathname !== routeConstant.ROUTE_NAME_SPLASH &&
		rootState.appState.initialized !== appStateConstant.APP_STATE_INITIALIZED_YES
	) {
		setCookie(cookiesConstant.COOKIES_KEY_INITIAL_URL, pathname);
		history.push(`${routeConstant.ROUTE_NAME_SPLASH}`);
		return;
	}
	if (pathname.indexOf(routeConstant.ROUTE_NAME_AUTH) > -1 && rootState.authState.current) {
		history.replace(`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`);
		return;
	}
	if (pathname.indexOf(routeConstant.ROUTE_NAME_MAIN) > -1 && !rootState.authState.current) {
		history.push(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`);
		return;
	}
};
