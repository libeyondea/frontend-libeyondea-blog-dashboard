import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Suspense } from 'react';

import configureStore from 'store';
import history from 'common/helpers/history';
import * as accessControl from './accessControl';
import RootRouter from './router';
import 'styles/index.css';
import useDidMountEffect from 'common/hooks/useDidMountEffect';

const store = configureStore();
accessControl.checkRoute(store, history, history.location.pathname);

const Root = () => {
	useDidMountEffect(() =>
		history.listen((location) => {
			accessControl.checkRoute(store, history, location.pathname);
			window.scrollTo(0, 0);
		})
	);

	return (
		<Provider store={store}>
			<Router history={history}>
				<Suspense fallback={null}>{renderRoutes(RootRouter)}</Suspense>
			</Router>
		</Provider>
	);
};

export default Root;
