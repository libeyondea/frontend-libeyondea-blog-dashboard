import { Redirect } from 'react-router-dom';
import { lazy } from 'react';
import * as routeConstant from 'common/constants/route';

const SigninCompoment = lazy(() => import('./signin/components'));
const SignupComponent = lazy(() => import('./signup/components'));

const AuthRouter = [
	{
		path: `/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`,
		exact: true,
		component: SigninCompoment
	},
	{
		path: `/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNUP}`,
		exact: true,
		component: SignupComponent
	},
	{
		path: '*',
		component: () => <Redirect to={routeConstant.ROUTE_NAME_SPLASH} />
	}
];

export default AuthRouter;
