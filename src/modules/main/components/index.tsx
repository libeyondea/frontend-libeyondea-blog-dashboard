import { renderRoutes } from 'react-router-config';
import NavbarComponent from './navbar';
import SidebarComponent from './sidebar';
import FooterComponent from './footer';
import MainRouter from './router';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { selectAppSidebar } from 'store/app/selectors';
import * as appStateConstant from 'common/constants/appState';
import { withRouter } from 'react-router';

const MainComponent = () => {
	const appSidebar = useSelector(selectAppSidebar);

	return (
		<div className="bg-gray-100">
			<NavbarComponent />
			<SidebarComponent />
			<div
				className={classNames('mt-14 transition-all ease-in-out duration-500', {
					'lg:ml-64': appSidebar === appStateConstant.APP_STATE_SIDEBAR_YES,
					'ml-0': appSidebar === appStateConstant.APP_STATE_SIDEBAR_NO
				})}
			>
				<div className="xl:container mx-auto p-4">{renderRoutes(MainRouter)}</div>
			</div>
			<FooterComponent />
		</div>
	);
};

export default withRouter(MainComponent);
