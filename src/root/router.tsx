import AuthComponent from 'modules/auth/components';
import MainComponent from 'modules/main/components';
import SplashComponent from 'modules/splash/components';
import { Redirect } from 'react-router-dom';
import * as routeConstant from 'constants/route';

const RootRouter = [
	{
		path: routeConstant.ROUTE_NAME_SPLASH,
		exact: true,
		component: SplashComponent
	},
	{
		path: `/${routeConstant.ROUTE_NAME_AUTH}`,
		component: AuthComponent
	},
	{
		path: `/${routeConstant.ROUTE_NAME_MAIN}`,
		component: MainComponent
	},
	{
		path: '*',
		component: () => <Redirect to={routeConstant.ROUTE_NAME_SPLASH} />
	}
];

export default RootRouter;
