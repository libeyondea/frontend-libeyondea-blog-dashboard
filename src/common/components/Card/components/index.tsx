import classNames from 'classnames';
import React from 'react';

const CardComponent: React.FC<any> = ({ children, header, className }) => {
	return (
		<div
			className={classNames('shadow-lg rounded-md p-4 bg-white w-full', {
				[className]: className
			})}
		>
			{header && <div className="font-bold text-md text-black mb-4">{header}</div>}
			<div className="w-full">{children}</div>
		</div>
	);
};

export default CardComponent;
