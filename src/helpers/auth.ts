import { removeCookie } from 'helpers/cookies';
import httpRequest from 'helpers/httpRequest';
import * as cookiesConstant from 'constants/cookies';
import * as routeConstant from 'constants/route';
import config from 'config';
import { NavigateFunction } from 'react-router-dom';

export const signout = (navigate: NavigateFunction, auth: any, authActionData: any) => {
	if (auth) {
		httpRequest.post({
			url: config.API.END_POINT.SIGNOUT,
			data: {
				refreshToken: auth.tokens.refreshToken
			}
		});
	}
	removeCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN);
	removeCookie(cookiesConstant.COOKIES_KEY_REFRESH_TOKEN);
	authActionData(null);
	navigate(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`);
};
