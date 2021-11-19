import classNames from 'classnames';
import LinkComponent from 'common/components/Link/components';
import { ChartPieIcon, TableIcon, CogIcon, TemplateIcon } from '@heroicons/react/outline';
import { appSidebarRequestAction } from 'store/app/actions';
import ImageComponent from 'common/components/Image/components';
import config from 'config';
import { selectAppSidebar } from 'store/app/selectors';
import * as appStateConstant from 'constants/appState';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import SidebarMenuComponent from 'common/components/SidebarMenu/components';

type Props = {};

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

const SidebarComponent: React.FC<Props> = () => {
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
						<LinkComponent href="/" className="flex items-center text-left focus:outline-none">
							<ImageComponent className="rounded-full h-9 w-9 mr-2" src={config.LOGO_URL} alt={config.APP_NAME} />
							<h2 className="text-2xl font-medium tracking-tighter cursor-pointer text-gray-200">
								{config.APP_NAME}
							</h2>
						</LinkComponent>
					</div>
					<div className="flex flex-col overflow-y-auto p-4 mt-14">
						<nav className="flex-1 bg-gray-800">
							<SidebarMenuComponent menus={menus} />
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidebarComponent;
