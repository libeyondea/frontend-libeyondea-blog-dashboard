import BreadcrumbComponent from 'common/components/Breadcrumb/components';
import CardComponent from 'common/components/Card/components';
import React from 'react';

const PostComponent = () => {
	return (
		<>
			<div className="mb-4">
				<BreadcrumbComponent>Posts</BreadcrumbComponent>
			</div>
			<div className="grid grid-cols-1 gap-4">
				<div className="col-span-1 w-full">
					<CardComponent>Test</CardComponent>
				</div>
			</div>
		</>
	);
};

export default PostComponent;
