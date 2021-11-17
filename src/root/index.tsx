import RootRouter from './router';
import { useRoutes } from 'react-router-dom';
import 'styles/index.css';

type Props = {};

const Root: React.FC<Props> = () => {
	return useRoutes(RootRouter);
};

export default Root;
