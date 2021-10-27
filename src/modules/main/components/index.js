import React, { useCallback } from 'react';
import { renderRoutes } from 'react-router-config';
import NavbarComponent from './navbar';
import SidebarComponent from './sidebar';
import FooterComponent from './footer';
import MainRouter from './router';
import { useDispatch, useSelector } from 'react-redux';
import { changeSidebarApp } from 'store/app/actions';
import useMousedown from 'common/hooks/useMousedown';

const MainComponent = () => {
	const appState = useSelector((state) => state.appState);
	const dispatch = useDispatch();
	const changeSidebarAppData = useCallback((newSidebarApp) => dispatch(changeSidebarApp(newSidebarApp)), [dispatch]);

	const { wrapperRef } = useMousedown(changeSidebarAppData, 1024);

	return (
		<div className="bg-gray-100">
			<NavbarComponent className={appState.sidebar ? 'lg:ml-64' : 'ml-0'} />
			<SidebarComponent className={appState.sidebar ? '-ml-64 lg:ml-0' : 'ml-0 lg:-ml-64'} wrapperRef={wrapperRef} />
			<div className={`mt-14 transition-all ease-in-out duration-500 ${appState.sidebar ? 'lg:ml-64' : 'ml-0'}`}>
				<div className="xl:container mx-auto p-4">{renderRoutes(MainRouter)}</div>
			</div>
			<FooterComponent className={appState.sidebar ? 'lg:ml-64' : 'ml-0'} />
		</div>
	);
};

export default MainComponent;
