import React from 'react';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import AuthRouter from './router';

const AuthComponent = () => {
	return (
		<div className="flex-col md:flex-row justify-between flex items-start bg-gray-200 h-screen">
			<div className="m-auto flex">{renderRoutes(AuthRouter)}</div>
		</div>
	);
};

export default withRouter(AuthComponent);
