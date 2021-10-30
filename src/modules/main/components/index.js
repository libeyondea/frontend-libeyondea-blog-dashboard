import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavbarComponent from './navbar';
import SidebarComponent from './sidebar';
import FooterComponent from './footer';
import MainRouter from './router';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

const MainComponent = () => {
	const appState = useSelector((state) => state.appState);

	return (
		<div className="bg-gray-100">
			<NavbarComponent />
			<SidebarComponent />
			<div
				className={classNames('mt-14 transition-all ease-in-out duration-500', {
					'lg:ml-64': appState.sidebar,
					'ml-0': !appState.sidebar
				})}
			>
				<div className="xl:container mx-auto p-4">{renderRoutes(MainRouter)}</div>
			</div>
			<FooterComponent />
		</div>
	);
};

export default MainComponent;
