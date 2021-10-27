import { logout } from 'common/utils/auth';
import history from 'common/utils/history';
import httpRequest from 'common/utils/httpRequest';
import { getCookie, removeCookie } from 'common/utils/cookies';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeInitializedApp } from 'store/app/actions';
import { changeAuth } from 'store/auth/actions';
import CustomImageComponent from 'common/components/CustomImage/components';
import config from 'config';

const SplashComponent = () => {
	const authState = useSelector((state) => state.authState);
	const dispatch = useDispatch();

	const changeAuthData = useCallback((newAuth) => dispatch(changeAuth(newAuth)), [dispatch]);
	const changeInitializedAppData = useCallback(
		(newInitializedApp) => dispatch(changeInitializedApp(newInitializedApp)),
		[dispatch]
	);

	useEffect(() => {
		changeInitializedAppData('INITIALIZED_APP_YES');

		const token = getCookie('token');
		const initialUrl = getCookie('initial_url');

		if (authState.current) {
			if (initialUrl) {
				removeCookie('initial_url');
				history.replace(initialUrl);
			} else {
				history.replace('/main/dashboard');
			}
		} else if (token) {
			httpRequest
				.get({
					url: `/current-user`,
					token: token
				})
				.then((response) => {
					if (!response.data.success) {
						logout(history, authState.current, changeAuthData);
						return;
					}
					changeAuthData(response.data.data);
					if (initialUrl) {
						removeCookie('initial_url');
						history.replace(initialUrl);
					} else {
						history.replace('/main/dashboard');
					}
				})
				.catch((error) => {
					console.log(error);
					logout(history, authState.current, changeAuthData);
				});
		} else {
			changeAuthData(null);
			removeCookie('initial_url');
			history.replace('/auth/signin');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="">
			<CustomImageComponent className="rounded-circle" src={config.LOGO_URL} alt="Loading..." />
		</div>
	);
};

export default withRouter(SplashComponent);
