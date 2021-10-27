import classNames from 'classnames';
import React from 'react';

const CardComponent = ({ header, children, className }) => {
	return (
		<div
			className={classNames('shadow-lg rounded-md p-4 bg-white w-full', {
				[className]: className
			})}
		>
			{header && <div className="font-bold text-md text-black mb-6">{header}</div>}
			<div>{children}</div>
		</div>
	);
};

export default CardComponent;
