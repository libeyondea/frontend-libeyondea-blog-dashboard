import { Navigate, RouteObject } from 'react-router-dom';
import * as routeConstant from 'constants/route';
import SigninCompoment from './signin/components';
import SignupComponent from './signup/components';

const AuthRouter: RouteObject[] = [
	{
		path: `${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`,
		element: <SigninCompoment />
	},
	{
		path: `${routeConstant.ROUTE_NAME_AUTH_SIGNUP}`,
		element: <SignupComponent />
	},
	{
		path: '*',
		element: <Navigate to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`} />
	}
];

export default AuthRouter;
