import classNames from 'classnames';
import CustomLinkComponent from 'common/components/CustomLink/components';
import { NavLink, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChartPieIcon, ChevronLeftIcon, TableIcon, CogIcon, TemplateIcon } from '@heroicons/react/outline';
import { appSidebarRequestAction } from 'store/app/actions';
import CustomImageComponent from 'common/components/CustomImage/components';
import config from 'config';
import { selectAppSidebar } from 'store/app/selectors';
import * as appStateConstant from 'constants/appState';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';

const menus = [
	{
		title: 'Dashboard',
		href: '/main/dashboard',
		icon: <ChartPieIcon className="w-5 h-5" />
	},
	{
		title: 'Posts',
		href: '/main/posts',
		icon: <TableIcon className="w-5 h-5" />
	},
	{
		title: 'Settings'
	},
	{
		title: 'Settings',
		icon: <CogIcon className="w-5 h-5" />,
		child: [
			{
				title: 'Themes 1',
				href: '/main/posts',
				icon: <TemplateIcon className="w-5 h-5" />
			},
			{
				title: 'Themes 2',
				href: '/main/themes-2',
				icon: <TemplateIcon className="w-5 h-5" />
			}
		]
	}
];

const SidebarComponent = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const appSidebar = useAppSelector(selectAppSidebar);

	const appSidebarActionData = (state: any) => dispatch(appSidebarRequestAction(state));

	return (
		<div className="flex">
			<div
				className={classNames('fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden', {
					hidden: appSidebar === appStateConstant.APP_STATE_SIDEBAR_YES,
					block: appSidebar === appStateConstant.APP_STATE_SIDEBAR_NO
				})}
				onClick={() => appSidebarActionData(appStateConstant.APP_STATE_SIDEBAR_YES)}
			></div>
			<div
				className={classNames(
					'fixed inset-y-0 left-0 max-w-full flex transition-all ease-in-out duration-500 flex-shrink-0 z-30 shadow-xl',
					{
						'-ml-64 lg:ml-0': appSidebar === appStateConstant.APP_STATE_SIDEBAR_YES,
						'ml-0 lg:-ml-64': appSidebar === appStateConstant.APP_STATE_SIDEBAR_NO
					}
				)}
			>
				<div className="flex flex-col w-64 bg-gray-800">
					<div className="bg-gray-800 flex flex-col flex-shrink-0 fixed w-64 z-50 py-3 px-8">
						<CustomLinkComponent href="/" className="flex items-center text-left focus:outline-none">
							<CustomImageComponent
								className="rounded-full h-9 w-9 mr-2"
								src={config.LOGO_URL}
								alt={config.APP_NAME}
							/>
							<h2 className="text-2xl font-medium tracking-tighter cursor-pointer text-gray-200">
								{config.APP_NAME}
							</h2>
						</CustomLinkComponent>
					</div>
					<div className="flex flex-col overflow-y-auto p-4 mt-14">
						<nav className="flex-1 bg-gray-800">
							<ul className="space-y-3">
								{menus.map((m: any, index) =>
									Object.keys(m).includes('href') ? (
										<li key={index}>
											<NavLink
												to={m.href}
												className={({ isActive }) =>
													classNames(
														'inline-flex items-center w-full px-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline',
														{
															'bg-gray-500 hover:bg-gray-500 font-bold text-white': isActive,
															'hover:bg-gray-900 hover:text-white text-gray-400': !isActive
														}
													)
												}
											>
												{m.icon}
												<span className="ml-4">{m.title}</span>
											</NavLink>
										</li>
									) : Object.keys(m).includes('child') ? (
										<li key={index}>
											<Disclosure
												defaultOpen={!!m.child.map(({ href }: any) => href).includes(location.pathname)}
											>
												{({ open }) => (
													<>
														<Disclosure.Button className="inline-flex items-center w-full px-4 py-2 mb-4 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-900 hover:text-white text-gray-400">
															{m.icon}
															<span className="ml-4">{m.title}</span>
															<ChevronLeftIcon
																className={classNames('w-5 h-5 ml-auto', {
																	'transform -rotate-90': open
																})}
															/>
														</Disclosure.Button>
														<Disclosure.Panel as="ul" className="space-y-4">
															{m.child.map((m: any, index: number) => (
																<li key={index}>
																	<NavLink
																		className={({ isActive }) =>
																			classNames(
																				'inline-flex items-center w-full pl-8 pr-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline',
																				{
																					'bg-gray-500 hover:bg-gray-500 font-bold text-white':
																						isActive,
																					'hover:bg-gray-900 hover:text-white text-gray-400':
																						!isActive
																				}
																			)
																		}
																		to={m.href}
																	>
																		{m.icon}
																		<span className="ml-4">{m.title}</span>
																	</NavLink>
																</li>
															))}
														</Disclosure.Panel>
													</>
												)}
											</Disclosure>
										</li>
									) : (
										<li className="px-4 pt-6 pb-2 font-medium uppercase text-gray-200" key={index}>
											{m.title}
										</li>
									)
								)}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidebarComponent;
