import cookie from 'js-cookie';

export const setCookie = (key, value, sessionCookie = false) => {
	const options = {
		expires: sessionCookie ? 1 / 4000 : 2,
		domain: process.env.COOKIE_DOMAIN
	};
	if (!process.env.COOKIE_DOMAIN) delete options.domain;
	cookie.set(key, value, options);
};

export const removeCookie = (key, opt) => cookie.remove(key, opt);
export const getCookie = (key, req) => getCookieFromBrowser(key);
const getCookieFromBrowser = (key) => cookie.get(key);
