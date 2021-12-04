import BreadcrumbComponent from 'common/components/Breadcrumb/components';
import PostCardComponent from 'common/components/PostCard/components';

type Props = {};

const SettingComponent: React.FC<Props> = () => {
	return (
		<>
			<BreadcrumbComponent className="mb-4">Settings</BreadcrumbComponent>
			<div className="grid grid-cols-1 gap-4">
				<div className="col-span-1 w-full">
					<PostCardComponent />
				</div>
			</div>
		</>
	);
};

export default SettingComponent;
