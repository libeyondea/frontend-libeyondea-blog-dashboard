import BreadcrumbComponent from 'common/components/Breadcrumb/components';
import PostCardComponent from 'common/components/PostCard/components';

type Props = {};

const DashboardComponent: React.FC<Props> = () => {
	return (
		<>
			<BreadcrumbComponent className="mb-4">Dashboard</BreadcrumbComponent>
			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<PostCardComponent />
				</div>
			</div>
		</>
	);
};

export default DashboardComponent;
