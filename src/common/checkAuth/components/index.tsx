import * as appStateConstant from 'constants/appState';
import { selectAuth } from 'store/auth/selectors';
import { selectAppInitialized } from 'store/app/selectors';
import * as routeConstant from 'constants/route';
import useAppSelector from 'hooks/useAppSelector';
import { useLocation, Navigate } from 'react-router-dom';

type Props = {
	children: JSX.Element;
};

const CheckAuthComponent: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const auth = useAppSelector(selectAuth);
	const appInitialized = useAppSelector(selectAppInitialized);

	if (location.pathname !== routeConstant.ROUTE_NAME_SPLASH && appInitialized !== appStateConstant.APP_STATE_INITIALIZED_YES) {
		return <Navigate to={`${routeConstant.ROUTE_NAME_SPLASH}`} state={{ from: location }} />;
	} else if (location.pathname.indexOf(routeConstant.ROUTE_NAME_AUTH) > -1 && auth) {
		return <Navigate to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`} />;
	} else if (location.pathname.indexOf(routeConstant.ROUTE_NAME_MAIN) > -1 && !auth) {
		return (
			<Navigate
				to={`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`}
				state={{ from: location }}
			/>
		);
	}
	return children;
};

export default CheckAuthComponent;
