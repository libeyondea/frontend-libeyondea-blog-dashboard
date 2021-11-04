import classNames from 'classnames';
import React from 'react';

const BreadcrumbComponent: React.FC<any> = ({ children, className }) => {
	return (
		<div
			className={classNames('flex', {
				[className]: className
			})}
		>
			<h3 className="text-2xl font-bold">{children}</h3>
		</div>
	);
};

export default BreadcrumbComponent;
