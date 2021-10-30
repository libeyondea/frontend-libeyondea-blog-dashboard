import httpRequest from './httpRequest';
import { removeCookie } from './cookies';

export function logout(history, auth, changeAuthData) {
	if (auth) {
		httpRequest.post({
			url: '/auth/logout',
			data: {
				refreshToken: auth.tokens.refreshToken
			}
		});
	}
	removeCookie('accessToken');
	removeCookie('refreshToken');
	changeAuthData(null);
	history.push('/auth/signin');
}
