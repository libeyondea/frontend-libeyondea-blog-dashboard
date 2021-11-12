import { Navigate, RouteObject } from 'react-router-dom';
import * as routeConstant from 'constants/route';
import { lazy, Suspense } from 'react';

const SigninCompoment = lazy(() => import('./signin/components'));
const SignupComponent = lazy(() => import('./signup/components'));

const AuthRouter: RouteObject[] = [
	{
		path: `${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`,
		element: (
			<Suspense fallback={null}>
				<SigninCompoment />
			</Suspense>
		)
	},
	{
		path: `${routeConstant.ROUTE_NAME_AUTH_SIGNUP}`,
		element: (
			<Suspense fallback={null}>
				<SignupComponent />
			</Suspense>
		)
	},
	{
		path: '*',
		element: <Navigate to={`${routeConstant.ROUTE_NAME_SPLASH}`} />
	}
];

export default AuthRouter;
