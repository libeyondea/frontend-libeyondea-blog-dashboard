import classNames from 'classnames';
import React from 'react';
import CustomLinkComponent from 'common/components/CustomLink/components';
import { useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChartPieIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon } from '@heroicons/react/solid';

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

const SidebarComponent = ({ wrapperRef, className }) => {
	const location = useLocation();

	return (
		<div
			className={classNames('fixed inset-y-0 left-0 max-w-full flex z-40 transition-all ease-in-out duration-500', {
				[className]: className
			})}
			ref={wrapperRef}
		>
			<div className="flex flex-shrink-0 shadow-xl">
				<div className="flex flex-col w-64 bg-gray-800">
					<div className="bg-gray-800 flex flex-col flex-shrink-0 px-4 fixed w-64 z-50">
						<CustomLinkComponent href="/" className="text-left focus:outline-none">
							<h2 className="py-3 px-4 text-2xl font-medium tracking-tighter cursor-pointer text-gray-200">Libeyondea</h2>
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
												<ChartPieIcon className="w-4 h-4" />
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
