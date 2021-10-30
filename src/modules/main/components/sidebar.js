import classNames from 'classnames';
import React, { useCallback } from 'react';
import CustomLinkComponent from 'common/components/CustomLink/components';
import { useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChartPieIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { changeSidebarApp } from 'store/app/actions';
import CustomImageComponent from 'common/components/CustomImage/components';
import config from 'config';

const menus = [
	{
		title: 'Dashboard',
		href: '/main/dashboard'
	},
	{
		title: 'Posts',
		href: '/main/posts'
	},
	{
		title: 'Settings'
	},
	{
		title: 'Settings',
		child: [
			{
				title: 'Themes',
				href: '/main/themes'
			},
			{
				title: 'Themes',
				href: '/main/themes'
			}
		]
	}
];

const SidebarComponent = () => {
	const appState = useSelector((state) => state.appState);
	const location = useLocation();
	const dispatch = useDispatch();
	const changeSidebarAppData = useCallback((newSidebarApp) => dispatch(changeSidebarApp(newSidebarApp)), [dispatch]);

	return (
		<div className="flex">
			<div
				className={classNames('fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden', {
					hidden: appState.sidebar,
					block: !appState.sidebar
				})}
				onClick={() => changeSidebarAppData(true)}
			></div>
			<div
				className={classNames(
					'fixed inset-y-0 left-0 max-w-full flex transition-all ease-in-out duration-500 flex-shrink-0 z-30 shadow-xl',
					{
						'-ml-64 lg:ml-0': appState.sidebar,
						'ml-0 lg:-ml-64': !appState.sidebar
					}
				)}
			>
				<div className="flex flex-col w-64 bg-gray-800">
					<div className="bg-gray-800 flex flex-col flex-shrink-0 fixed w-64 z-50 py-3 px-8">
						<CustomLinkComponent href="/" className="flex items-center text-left focus:outline-none">
							<CustomImageComponent className="rounded-full h-9 w-9 mr-2" src={config.LOGO_URL} alt="Libeyondea" />
							<h2 className="text-2xl font-medium tracking-tighter cursor-pointer text-gray-200">Libeyondea</h2>
						</CustomLinkComponent>
					</div>
					<div className="flex flex-col overflow-y-auto p-4 mt-14">
						<nav className="flex-1 bg-gray-800">
							<ul className="space-y-3">
								{menus.map((m, index) =>
									Object.keys(m).includes('href') ? (
										<li key={index}>
											<CustomLinkComponent
												href={m.href}
												className={classNames(
													'inline-flex items-center w-full px-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline',
													{
														'bg-gray-500 hover:bg-gray-500 font-bold text-white': location.pathname === m.href,
														'hover:bg-gray-900 hover:text-white text-gray-400': location.pathname !== m.href
													}
												)}
											>
												<ChartPieIcon className="w-5 h-5" />
												<span className="ml-4">{m.title}</span>
											</CustomLinkComponent>
										</li>
									) : Object.keys(m).includes('child') ? (
										<li key={index}>
											<Disclosure defaultOpen={!!m.child.map(({ href }) => href).includes(location.pathname)}>
												{({ open }) => (
													<>
														<Disclosure.Button className="inline-flex items-center w-full px-4 py-2 mb-4 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-900 hover:text-white text-gray-400">
															<ChartPieIcon className="w-4 h-4" />
															<span className="ml-4">{m.title}</span>
															<ChevronLeftIcon className={`${open ? 'transform -rotate-90' : ''} w-5 h-5 ml-auto`} />
														</Disclosure.Button>
														<Disclosure.Panel as="ul" className="space-y-4">
															{m.child.map((m, index) => (
																<li key={index}>
																	<CustomLinkComponent
																		className={classNames(
																			'inline-flex items-center w-full pl-8 pr-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline',
																			{
																				'bg-gray-500 hover:bg-gray-500 font-bold text-white': location.pathname === m.href,
																				'hover:bg-gray-900 hover:text-white text-gray-400': location.pathname !== m.href
																			}
																		)}
																		href={m.href}
																	>
																		<ChartPieIcon className="w-4 h-4" />
																		<span className="ml-4">{m.title}</span>
																	</CustomLinkComponent>
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
