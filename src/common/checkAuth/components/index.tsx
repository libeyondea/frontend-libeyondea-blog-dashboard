import { signout } from 'helpers/auth';
import httpRequest from 'helpers/httpRequest';
import { getCookie } from 'helpers/cookies';
import { useState } from 'react';
import { authRequestAction } from 'store/auth/actions';
import CustomImageComponent from 'common/components/CustomImage/components';
import config from 'config';
import { selectAuth } from 'store/auth/selectors';
import * as cookiesConstant from 'constants/cookies';
import * as routeConstant from 'constants/route';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { useNavigate, useLocation } from 'react-router-dom';
import useDidUpdateEffect from 'hooks/useDidUpdateEffect';
import useDidMountEffect from 'hooks/useDidMountEffect';

const CheckAuthComponent = ({ children }: { children: JSX.Element }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();
	const auth = useAppSelector(selectAuth);
	const [isLoading, setIsLoading] = useState(true);

	const authActionData = (state: any) => dispatch(authRequestAction(state));

	useDidMountEffect(() => {
		const accessToken = getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN);
		const refreshToken = getCookie(cookiesConstant.COOKIES_KEY_REFRESH_TOKEN);
		const initialUrl = location.pathname;

		if (auth) {
			if (initialUrl) {
				navigate(initialUrl, { replace: true });
			} else {
				navigate(`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`, { replace: true });
			}
			setIsLoading(false);
		} else if (accessToken) {
			httpRequest
				.get({
					url: config.API.END_POINT.ME,
					token: accessToken
				})
				.then((response) => {
					if (!response.data.success) {
						signout(navigate, auth, authActionData);
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
						navigate(initialUrl, { replace: true });
					} else {
						navigate(`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`, {
							replace: true
						});
					}
				})
				.catch((error) => {
					console.log(error);
					signout(navigate, auth, authActionData);
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			authActionData(null);
			navigate(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`, { replace: true });
			setIsLoading(false);
		}
	});

	useDidUpdateEffect(() => {
		if (location.pathname.indexOf(routeConstant.ROUTE_NAME_AUTH) > -1 && auth) {
			navigate(`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`, { replace: true });
		} else if (location.pathname.indexOf(routeConstant.ROUTE_NAME_MAIN) > -1 && !auth) {
			navigate(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`);
		}
	}, [location]);

	return isLoading ? (
		<div className="flex h-screen">
			<CustomImageComponent className="m-auto animate-spin rounded-full h-32 w-32" src={config.LOGO_URL} alt="Loading..." />
		</div>
	) : (
		children
	);
};

export default CheckAuthComponent;
