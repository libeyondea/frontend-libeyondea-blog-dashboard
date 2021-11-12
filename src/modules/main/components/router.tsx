import { Navigate, RouteObject } from 'react-router-dom';
import * as routeConstant from 'constants/route';
import { lazy, Suspense } from 'react';

const DashboardComponent = lazy(() => import('./dashboard/components'));
const PostComponent = lazy(() => import('./post/components'));

const MainRouter: RouteObject[] = [
	{
		path: `${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`,
		element: (
			<Suspense fallback={null}>
				<DashboardComponent />
			</Suspense>
		)
	},
	{
		path: `posts`,
		element: (
			<Suspense fallback={null}>
				<PostComponent />
			</Suspense>
		)
	},
	{
		path: '*',
		element: <Navigate to={`${routeConstant.ROUTE_NAME_SPLASH}`} />
	}
];

export default MainRouter;
