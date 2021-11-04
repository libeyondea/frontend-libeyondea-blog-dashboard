import { Redirect } from 'react-router-dom';
import PostComponent from './post/components';
import * as routeConstant from 'common/constants/route';
import { lazy } from 'react';

const DashboardComponent = lazy(() => import('./dashboard/components'));

const MainRouter = [
	{
		path: `/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`,
		exact: true,
		component: DashboardComponent
	},
	{
		path: `/${routeConstant.ROUTE_NAME_MAIN}/posts`,
		exact: true,
		component: PostComponent
	},
	{
		path: '*',
		component: () => <Redirect to="/" />
	}
];

export default MainRouter;
