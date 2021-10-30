import React from 'react';
import { Redirect } from 'react-router-dom';
import PostComponent from './post/components';
import DashboardComponent from './dashboard/components';

const MainRouter = [
	{
		path: `/main/dashboard`,
		exact: true,
		component: DashboardComponent
	},
	{
		path: `/main/posts`,
		exact: true,
		component: PostComponent
	},
	{
		path: '*',
		component: () => <Redirect to="/" />
	}
];

export default MainRouter;
