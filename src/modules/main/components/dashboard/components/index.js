import Breadcrumb from 'common/components/Breadcrumb/components';
import CardComponent from 'common/components/Card/components';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			type: 'line',
			label: 'Dataset 1',
			borderColor: 'rgb(54, 162, 235)',
			borderWidth: 2,
			fill: false,
			data: [rand(), rand(), rand(), rand(), rand(), rand()]
		},
		{
			type: 'bar',
			label: 'Dataset 2',
			backgroundColor: 'rgb(255, 99, 132)',
			data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
			borderColor: 'white',
			borderWidth: 2
		},
		{
			type: 'bar',
			label: 'Dataset 3',
			backgroundColor: 'rgb(75, 192, 192)',
			data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
		}
	]
};

const DashboardComponent = () => {
	return (
		<>
			<div className="mb-4">
				<Breadcrumb>Dashboard</Breadcrumb>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 lg:col-span-1 w-full">
					<CardComponent header="MultiType Chart">
						<Bar data={data} />
					</CardComponent>
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<CardComponent header="MultiType Chart">
						<Bar data={data} />
					</CardComponent>
				</div>
				<div className="col-span-2 lg:col-span-1 w-full">
					<CardComponent header="MultiType Chart">
						<Bar data={data} />
					</CardComponent>
				</div>
			</div>
		</>
	);
};

export default DashboardComponent;
