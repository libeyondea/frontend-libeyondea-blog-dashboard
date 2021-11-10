import { Navigate, RouteObject } from 'react-router-dom';
import PostComponent from './post/components';
import * as routeConstant from 'constants/route';

import DashboardComponent from './dashboard/components';

const MainRouter: RouteObject[] = [
	{
		path: `${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`,
		element: <DashboardComponent />
	},
	{
		path: `posts`,
		element: <PostComponent />
	},
	{
		path: '*',
		element: <Navigate to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`} />
	}
];

export default MainRouter;
