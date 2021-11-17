import BreadcrumbComponent from 'common/components/Breadcrumb/components';
import CardComponent from 'common/components/Card/components';

type Props = {};

const PostComponent: React.FC<Props> = () => {
	return (
		<>
			<BreadcrumbComponent className="mb-4">Posts</BreadcrumbComponent>
			<div className="grid grid-cols-1 gap-4">
				<div className="col-span-1 w-full">
					<CardComponent>Test</CardComponent>
				</div>
			</div>
		</>
	);
};

export default PostComponent;
