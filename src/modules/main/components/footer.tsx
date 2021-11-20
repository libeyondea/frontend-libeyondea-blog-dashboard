import ImageComponent from 'common/components/Image/components';
import config from 'config';
import classNames from 'classnames';
import { selectAppSidebar } from 'store/app/selectors';
import * as appStateConstant from 'constants/appState';
import useAppSelector from 'hooks/useAppSelector';

type Props = {};

const FooterComponent: React.FC<Props> = () => {
	const appSidebar = useAppSelector(selectAppSidebar);

	return (
		<footer
			className={classNames('py-4 bg-gray-200 transition-all ease-in-out duration-500', {
				'lg:ml-64': appSidebar === appStateConstant.APP_STATE_SIDEBAR_YES,
				'ml-0': appSidebar !== appStateConstant.APP_STATE_SIDEBAR_YES
			})}
		>
			<div className="xl:container mx-auto px-4">
				<div className="flex justify-center items-center">
					<ImageComponent className="rounded-full h-9 w-9 mr-2" src={config.LOGO_URL} alt={config.APP_NAME} />
					<small>
						Copyright &copy; {new Date().getFullYear()}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://libeyondea.com"
							className="text-indigo-800 font-bold ml-1"
						>
							{config.APP_NAME}
						</a>
					</small>
				</div>
			</div>
		</footer>
	);
};

export default FooterComponent;
