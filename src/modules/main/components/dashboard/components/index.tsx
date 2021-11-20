import BreadcrumbComponent from 'common/components/Breadcrumb/components';
import CardComponent from 'common/components/Card/components';

type Props = {};

const DashboardComponent: React.FC<Props> = () => {
	return (
		<>
			<BreadcrumbComponent className="mb-4">Dashboard</BreadcrumbComponent>
			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 lg:col-span-1 w-full">
					<CardComponent header="Dashboard 1">Dashboard 1</CardComponent>
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<CardComponent header="Dashboard 2">Dashboard 2</CardComponent>
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<CardComponent header="Dashboard 3">Dashboard 3</CardComponent>
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<CardComponent header="Dashboard 4">Dashboard 4</CardComponent>
				</div>
			</div>
		</>
	);
};

export default DashboardComponent;
