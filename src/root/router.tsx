import { Navigate, RouteObject } from 'react-router-dom';
import * as routeConstant from 'constants/route';
import CheckAuthComponent from 'common/checkAuth/components';
import { lazy, Suspense } from 'react';

const AuthComponent = lazy(() => import('modules/auth/components'));
const MainComponent = lazy(() => import('modules/main/components'));

const RootRouter: RouteObject[] = [
	{
		path: `/${routeConstant.ROUTE_NAME_AUTH}/*`,
		element: (
			<Suspense fallback={null}>
				<CheckAuthComponent>
					<AuthComponent />
				</CheckAuthComponent>
			</Suspense>
		)
	},
	{
		path: `/${routeConstant.ROUTE_NAME_MAIN}/*`,
		element: (
			<Suspense fallback={null}>
				<CheckAuthComponent>
					<MainComponent />
				</CheckAuthComponent>
			</Suspense>
		)
	},
	{
		path: '*',
		element: <Navigate to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`} />
	}
];

export default RootRouter;
