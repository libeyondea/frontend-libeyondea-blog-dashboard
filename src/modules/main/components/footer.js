import moment from 'moment';
import React from 'react';
import CustomImageComponent from 'common/components/CustomImage/components';
import config from 'config';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const FooterComponent = () => {
	const appState = useSelector((state) => state.appState);

	return (
		<footer
			className={classNames('py-4 bg-gray-200 transition-all ease-in-out duration-500', {
				'lg:ml-64': appState.sidebar,
				'ml-0': !appState.sidebar
			})}
		>
			<div className="xl:container mx-auto px-4">
				<div className="flex justify-center items-center">
					<CustomImageComponent className="rounded-full h-9 w-9 mr-2" src={config.LOGO_URL} alt="Libeyondea" />
					<small>
						Copyright &copy; {moment().year()}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://twitter.com/libeyondea"
							className="text-indigo-800 font-bold ml-1"
						>
							Libeyondea
						</a>
					</small>
				</div>
			</div>
		</footer>
	);
};

export default FooterComponent;
