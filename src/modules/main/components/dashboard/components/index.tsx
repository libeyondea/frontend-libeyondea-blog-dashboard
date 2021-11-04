import BreadcrumbComponent from 'common/components/Breadcrumb/components';
import CardComponent from 'common/components/Card/components';
import { withRouter } from 'react-router';

const DashboardComponent = () => {
	return (
		<>
			<BreadcrumbComponent className="mb-4">Dashboard</BreadcrumbComponent>
			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 lg:col-span-1 w-full">
					<CardComponent header="MultiType Chart">GG</CardComponent>
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<CardComponent header="MultiType Chart">GG</CardComponent>
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<CardComponent header="MultiType Chart">GG</CardComponent>
				</div>
			</div>
		</>
	);
};

export default withRouter(DashboardComponent);
