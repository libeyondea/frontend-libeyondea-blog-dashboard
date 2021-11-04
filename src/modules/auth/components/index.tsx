import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import AuthRouter from './router';

const AuthComponent: React.FC<any> = () => {
	return <div className="flex flex-col h-screen">{renderRoutes(AuthRouter)}</div>;
};

export default withRouter(AuthComponent);
