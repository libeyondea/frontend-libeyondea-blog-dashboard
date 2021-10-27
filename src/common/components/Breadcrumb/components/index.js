import React from 'react';

const BreadcrumbComponent = ({ children }) => {
	return (
		<div className="flex">
			<h3 className="text-2xl font-bold">{children}</h3>
		</div>
	);
};

export default BreadcrumbComponent;
