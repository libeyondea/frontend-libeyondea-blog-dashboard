import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import CustomImageComponent from 'common/components/CustomImage/components';
import CustomLinkComponent from 'common/components/CustomLink/components';
import { signout } from 'helpers/auth';
import { authRequestAction } from 'store/auth/actions';
import { appSidebarRequestAction } from 'store/app/actions';
import classNames from 'classnames';
import { selectAppSidebar } from 'store/app/selectors';
import { selectAuth } from 'store/auth/selectors';
import * as appStateConstant from 'constants/appState';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';

type Props = {};

const NavbarComponent: React.FC<Props> = () => {
	const dispatch = useAppDispatch();
	const appSidebar = useAppSelector(selectAppSidebar);
	const auth = useAppSelector(selectAuth);
	const navigate = useNavigate();
	const appSidebarActionData = (state: any) => dispatch(appSidebarRequestAction(state));
	const authActionData = (state: any) => dispatch(authRequestAction(state));

	const logoutHandler = () => {
		signout(navigate, auth, authActionData);
	};

	const changeSidebar = () => {
		appSidebarActionData(
			appSidebar === appStateConstant.APP_STATE_SIDEBAR_YES
				? appStateConstant.APP_STATE_SIDEBAR_NO
				: appStateConstant.APP_STATE_SIDEBAR_YES
		);
	};

	return (
		<nav
			className={classNames('bg-white shadow-lg fixed z-20 inset-x-0 top-0 transition-all ease-in-out duration-500', {
				'lg:ml-64': appSidebar === appStateConstant.APP_STATE_SIDEBAR_YES,
				'ml-0': appSidebar === appStateConstant.APP_STATE_SIDEBAR_NO
			})}
		>
			<div className="xl:container mx-auto px-4">
				<div className="flex items-center h-14">
					<div className="flex items-center mr-auto">
						<button
							className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
							onClick={changeSidebar}
						>
							<MenuIcon className="h-6 w-6" />
						</button>
						<div className="block">
							<div className="ml-4 flex items-baseline space-x-4">
								<CustomLinkComponent
									className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									href="/"
								>
									Home
								</CustomLinkComponent>
							</div>
						</div>
					</div>
					<div className="block">
						<div className="flex items-center">
							<div className="relative">
								<Menu as="div" className="relative inline-block text-left">
									<div>
										<Menu.Button className="flex items-center justify-center w-full rounded-md px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-500 focus:outline-none">
											<CustomImageComponent
												className="rounded-full h-8 w-8"
												src={auth?.user?.avatarUrl}
												alt={auth?.user?.userName}
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
											<Menu.Item>
												{({ active }) => (
													<CustomLinkComponent
														href="/"
														className={classNames('block px-4 py-2 rounded-md text-md', {
															'bg-gray-300 text-gray-700': active,
															'text-gray-900': !active
														})}
													>
														<span>Settings</span>
													</CustomLinkComponent>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<button
														type="button"
														className={classNames(
															'block px-4 py-2 rounded-md text-left text-md w-full',
															{
																'bg-gray-300 text-gray-700': active,
																'text-gray-900': !active
															}
														)}
														onClick={logoutHandler}
													>
														<span>Logout</span>
													</button>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavbarComponent;
