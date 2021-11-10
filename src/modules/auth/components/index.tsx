import { useRoutes } from 'react-router-dom';
import AuthRouter from './router';

const AuthComponent: React.FC<any> = () => {
	return <div className="flex flex-col h-screen">{useRoutes(AuthRouter)}</div>;
};

export default AuthComponent;
