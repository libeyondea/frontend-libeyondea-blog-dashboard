import RootRouter from './router';
import { useRoutes } from 'react-router-dom';
import 'styles/index.css';

const Root = () => {
	return useRoutes(RootRouter);
};

export default Root;
