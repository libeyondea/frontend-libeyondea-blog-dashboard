import { Link } from 'react-router-dom';

type Props = {
	href: string;
	children: React.ReactNode;
	className?: string;
};

const CustomLinkComponent: React.FC<Props> = ({ className, href, children, ...props }) => (
	<Link to={href} className={className} {...props}>
		{children}
	</Link>
);

export default CustomLinkComponent;
