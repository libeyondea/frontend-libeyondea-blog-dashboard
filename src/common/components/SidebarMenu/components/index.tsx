import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import NavLinkComponent from 'common/components/NavLink/components';

type Props = {
	menus: Array<{
		title: string;
		href?: string;
		icon?: JSX.Element;
		child?: Array<{
			title: string;
			href: string;
			icon: JSX.Element;
		}>;
	}>;
};

const SidebarMenu: React.FC<Props> = ({ menus }) => {
	const location = useLocation();

	return (
		<ul className="space-y-3">
			{menus.map((m, index) =>
				m.href && m.hasOwnProperty('href') ? (
					<li key={index}>
						<NavLinkComponent
							href={m.href}
							className="inline-flex items-center w-full px-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline"
							activeClassName="bg-gray-500 hover:bg-gray-500 font-bold text-white"
							notActiveClassName="hover:bg-gray-900 hover:text-white text-gray-400"
						>
							{m.icon}
							<span className="ml-4">{m.title}</span>
						</NavLinkComponent>
					</li>
				) : m.hasOwnProperty('child') ? (
					<li key={index}>
						<Disclosure
							defaultOpen={
								m.child && !!m.child.length && !!m.child.map(({ href }) => href).includes(location.pathname)
							}
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
										{m.child &&
											!!m.child.length &&
											m.child.map((m, index) => (
												<li key={index}>
													<NavLinkComponent
														href={m.href}
														className="inline-flex items-center w-full pl-8 pr-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline"
														activeClassName="bg-gray-500 hover:bg-gray-500 font-bold text-white"
														notActiveClassName="hover:bg-gray-900 hover:text-white text-gray-400"
													>
														{m.icon}
														<span className="ml-4">{m.title}</span>
													</NavLinkComponent>
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
	);
};

export default SidebarMenu;
