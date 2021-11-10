import AuthComponent from 'modules/auth/components';
import MainComponent from 'modules/main/components';
import { Navigate, RouteObject } from 'react-router-dom';
import * as routeConstant from 'constants/route';
import CheckAuthComponent from 'common/checkAuth/components';

const RootRouter: RouteObject[] = [
	{
		path: `/${routeConstant.ROUTE_NAME_AUTH}/*`,
		element: (
			<CheckAuthComponent>
				<AuthComponent />
			</CheckAuthComponent>
		)
	},
	{
		path: `/${routeConstant.ROUTE_NAME_MAIN}/*`,
		element: (
			<CheckAuthComponent>
				<MainComponent />
			</CheckAuthComponent>
		)
	},
	{
		path: '*',
		element: <Navigate to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`} />
	}
];

export default RootRouter;
