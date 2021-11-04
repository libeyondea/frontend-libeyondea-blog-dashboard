import { Link } from 'react-router-dom';

const CustomLinkComponent: React.FC<any> = ({ className, href, children, ...props }) => (
	<Link to={href} className={className} {...props}>
		{children}
	</Link>
);

export default CustomLinkComponent;
