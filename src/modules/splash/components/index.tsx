import httpRequest from 'helpers/httpRequest';
import { getCookie } from 'helpers/cookies';
import { appInitializedRequestAction } from 'store/app/actions';
import { authRequestAction } from 'store/auth/actions';
import ImageComponent from 'common/components/Image/components';
import config from 'config';
import { selectAuth } from 'store/auth/selectors';
import * as appStateConstant from 'constants/appState';
import * as cookiesConstant from 'constants/cookies';
import * as routeConstant from 'constants/route';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { useNavigate, useLocation } from 'react-router-dom';
import useDidMountEffect from 'hooks/useDidMountEffect';
import { signout } from 'helpers/auth';

type Props = {};

const SplashComponent: React.FC<Props> = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();
	const auth = useAppSelector(selectAuth);

	const appInitializedActionData = (state: any) => dispatch(appInitializedRequestAction(state));
	const authActionData = (state: any) => dispatch(authRequestAction(state));

	useDidMountEffect(() => {
		appInitializedActionData(appStateConstant.APP_STATE_INITIALIZED_YES);
		const accessToken = getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN);
		const refreshToken = getCookie(cookiesConstant.COOKIES_KEY_REFRESH_TOKEN);
		const initialUrl = location.state?.from?.pathname;

		if (auth) {
			if (initialUrl) {
				navigate(initialUrl, { replace: true });
			} else {
				navigate(`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`, { replace: true });
			}
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
				});
		} else {
			authActionData(null);
			if (initialUrl) {
				navigate(initialUrl, { replace: true });
			} else {
				navigate(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`, { replace: true });
			}
		}
	});

	return (
		<div className="flex h-screen">
			<ImageComponent className="m-auto animate-spin rounded-full h-32 w-32" src={config.LOGO_URL} alt="Loading..." />
		</div>
	);
};

export default SplashComponent;
