import { removeCookie } from 'common/helpers/cookies';
import httpRequest from 'common/helpers/httpRequest';
import * as cookiesConstant from 'common/constants/cookies';
import * as routeConstant from 'common/constants/route';
import config from 'config';

export const logout = (history: any, auth: any, authActionData: any) => {
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
	history.push(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`);
};
