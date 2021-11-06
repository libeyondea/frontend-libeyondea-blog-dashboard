import { logout } from 'common/helpers/auth';
import history from 'common/helpers/history';
import httpRequest from 'common/helpers/httpRequest';
import { getCookie, removeCookie } from 'common/helpers/cookies';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { appInitializedAction } from 'store/app/actions';
import { authAction } from 'store/auth/actions';
import CustomImageComponent from 'common/components/CustomImage/components';
import config from 'config';
import { selectAuth } from 'store/auth/selectors';
import * as appStateConstant from 'common/constants/appState';
import * as cookiesConstant from 'common/constants/cookies';
import * as routeConstant from 'common/constants/route';

const SplashComponent = () => {
	const dispatch = useDispatch();
	const auth = useSelector(selectAuth);

	const authActionData = useCallback((state) => dispatch(authAction(state)), [dispatch]);
	const appInitializedActionData = useCallback((state) => dispatch(appInitializedAction(state)), [dispatch]);

	useEffect(() => {
		appInitializedActionData(appStateConstant.APP_STATE_INITIALIZED_YES);

		const accessToken = getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN);
		const refreshToken = getCookie(cookiesConstant.COOKIES_KEY_REFRESH_TOKEN);
		const initialUrl = getCookie(cookiesConstant.COOKIES_KEY_INITIAL_URL);

		if (auth) {
			if (initialUrl) {
				removeCookie(cookiesConstant.COOKIES_KEY_INITIAL_URL);
				history.replace(initialUrl);
			} else {
				history.replace(`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`);
			}
		} else if (accessToken) {
			httpRequest
				.get({
					url: config.API.END_POINT.ME,
					token: accessToken
				})
				.then((response) => {
					if (!response.data.success) {
						logout(history, auth, authActionData);
						return;
					}
					authActionData({
						tokens: {
							accessToken,
							refreshToken
						},
						user: response.data.data
					});
					if (initialUrl) {
						removeCookie(cookiesConstant.COOKIES_KEY_INITIAL_URL);
						history.replace(initialUrl);
					} else {
						history.replace(`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`);
					}
				})
				.catch((error) => {
					console.log(error);
					logout(history, auth, authActionData);
				});
		} else {
			authActionData(null);
			if (initialUrl) {
				removeCookie(cookiesConstant.COOKIES_KEY_INITIAL_URL);
				history.replace(initialUrl);
			} else {
				history.replace(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex h-screen">
			<CustomImageComponent className="m-auto animate-spin rounded-full h-32 w-32" src={config.LOGO_URL} alt="Loading..." />
		</div>
	);
};

export default withRouter(SplashComponent);
