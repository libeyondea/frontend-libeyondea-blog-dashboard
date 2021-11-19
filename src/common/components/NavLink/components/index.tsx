import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
	href: string;
	children: React.ReactNode;
	className: string;
	activeClassName: string;
	notActiveClassName?: string;
};

const NavLinkComponent: React.FC<Props> = ({ className, activeClassName, notActiveClassName, href, children, ...props }) => (
	<NavLink
		to={href}
		className={({ isActive }) =>
			classNames(className, {
				[activeClassName]: isActive,
				...(notActiveClassName && { [notActiveClassName]: !isActive })
			})
		}
		{...props}
	>
		{children}
	</NavLink>
);

export default NavLinkComponent;
