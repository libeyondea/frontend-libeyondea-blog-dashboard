import classNames from 'classnames';
import LinkComponent from 'common/components/Link/components';
import { ChartPieIcon, TableIcon, CogIcon, DotsHorizontalIcon } from '@heroicons/react/outline';
import { appSidebarRequestAction } from 'store/app/actions';
import ImageComponent from 'common/components/Image/components';
import config from 'config';
import { selectAppSidebar } from 'store/app/selectors';
import * as appStateConstant from 'constants/appState';
import * as routeConstant from 'constants/route';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import NavLinkComponent from 'common/components/NavLink/components';

type Props = {};

const SidebarComponent: React.FC<Props> = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const appSidebar = useAppSelector(selectAppSidebar);

	const changeAppSidebar = (state: any) => dispatch(appSidebarRequestAction(state));

	return (
		<div className="flex">
			<div
				className={classNames('fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden', {
					hidden: appSidebar === appStateConstant.APP_STATE_SIDEBAR_YES,
					block: appSidebar !== appStateConstant.APP_STATE_SIDEBAR_YES
				})}
				onClick={() => changeAppSidebar(appStateConstant.APP_STATE_SIDEBAR_YES)}
			></div>
			<div
				className={classNames(
					'fixed inset-y-0 left-0 max-w-full flex transition-all ease-in-out duration-500 flex-shrink-0 z-30 shadow-xl',
					{
						'-ml-64 lg:ml-0': appSidebar === appStateConstant.APP_STATE_SIDEBAR_YES,
						'ml-0 lg:-ml-64': appSidebar !== appStateConstant.APP_STATE_SIDEBAR_YES
					}
				)}
			>
				<div className="flex flex-col w-64 bg-gray-800">
					<div className="bg-gray-800 flex flex-col flex-shrink-0 fixed w-64 z-50 py-3 px-8">
						<LinkComponent href="/" className="flex items-center text-left focus:outline-none">
							<ImageComponent className="rounded-full h-9 w-9 mr-2" src={config.LOGO_URL} alt={config.APP_NAME} />
							<h2 className="text-2xl font-medium tracking-tighter cursor-pointer text-gray-200">
								{config.APP_NAME}
							</h2>
						</LinkComponent>
					</div>
					<div className="flex flex-col overflow-y-auto p-4 mt-14">
						<nav className="flex-1 bg-gray-800">
							<ul className="space-y-3">
								<li>
									<NavLinkComponent
										href={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_DASHBOARD}`}
										className="inline-flex items-center w-full px-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline"
										activeClassName="bg-gray-500 hover:bg-gray-500 font-bold text-white"
										notActiveClassName="hover:bg-gray-900 hover:text-white text-gray-400"
									>
										<ChartPieIcon className="w-5 h-5" />
										<span className="ml-4">Dashboard</span>
									</NavLinkComponent>
								</li>
								<li>
									<NavLinkComponent
										href={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_POST}`}
										className="inline-flex items-center w-full px-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline"
										activeClassName="bg-gray-500 hover:bg-gray-500 font-bold text-white"
										notActiveClassName="hover:bg-gray-900 hover:text-white text-gray-400"
									>
										<TableIcon className="w-5 h-5" />
										<span className="ml-4">Posts</span>
									</NavLinkComponent>
								</li>
								<li className="px-4 pt-6 pb-2 font-medium uppercase text-gray-200">Settings</li>
								<li>
									<Disclosure
										defaultOpen={
											!![
												`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_SETTING}`,
												`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_OTHER}`
											]
												.map((href) => href)
												.includes(location.pathname)
										}
									>
										{({ open }) => (
											<>
												<Disclosure.Button className="inline-flex items-center w-full px-4 py-2 mb-4 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-900 hover:text-white text-gray-400">
													<CogIcon className="w-5 h-5" />
													<span className="ml-4">Settings</span>
													<ChevronLeftIcon
														className={classNames('w-5 h-5 ml-auto', {
															'transform -rotate-90': open
														})}
													/>
												</Disclosure.Button>
												<Disclosure.Panel as="ul" className="space-y-4">
													<li>
														<NavLinkComponent
															href={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_SETTING}`}
															className="inline-flex items-center w-full pl-8 pr-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline"
															activeClassName="bg-gray-500 hover:bg-gray-500 font-bold text-white"
															notActiveClassName="hover:bg-gray-900 hover:text-white text-gray-400"
														>
															<CogIcon className="w-5 h-5" />
															<span className="ml-4">Settings</span>
														</NavLinkComponent>
													</li>
													<li>
														<NavLinkComponent
															href={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_OTHER}`}
															className="inline-flex items-center w-full pl-8 pr-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline"
															activeClassName="bg-gray-500 hover:bg-gray-500 font-bold text-white"
															notActiveClassName="hover:bg-gray-900 hover:text-white text-gray-400"
														>
															<DotsHorizontalIcon className="w-5 h-5" />
															<span className="ml-4">Other</span>
														</NavLinkComponent>
													</li>
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidebarComponent;
