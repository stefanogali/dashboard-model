import Chart from "react-apexcharts";
import Card from "../UI/Card";

import classes from './Panels.module.css';

const VisitorsPanel = (props) => {
	const chartOptions = {
		options: {
			chart: {
				id: "basic-bar"
			},
			xaxis: {
				categories: [
					'Current',
					'1 day ago',
					'2 days ago',
					'3 days ago',
					'4 days ago',
					'5 days ago',
					'6 days ago'
				]
			}
		},
		series: [
			{
				name: "Users",
				data: [
					props.data.active_users || null,
					props.data.active_users_past_one || null,
					props.data.active_users_past_two || null,
					props.data.active_users_past_three || null,
					props.data.active_users_past_four || null,
					props.data.active_users_past_five || null,
					props.data.active_users_past_six || null
				]
			}
		]
	};

	const compareUserPrevDay = (usersNow, usersPrevDay) => {
		const usersCurrently = parseInt(usersNow);
		const usersYesterday = parseInt(usersPrevDay);

		if (usersCurrently > usersYesterday){
			return `+${usersNow - usersPrevDay} users`;
		} else if (usersCurrently < usersYesterday) {
			return `-${usersPrevDay - usersNow} users`;
		}
		return 'Same number of users';
	}

	return (
		<Card className={`${classes.panel} ${classes['panel-visitors']}`}>
			<div className={classes['panel-container']}>
				<div className={classes['panel-inner']}>
					<div className={classes['panel-text']}>
						<h3>There are currently {props.data.active_users} Visitors on the website</h3>
						<p><strong>{compareUserPrevDay(props.data.active_users, props.data.active_users_past_one)}</strong> compared to same time yesterday</p>
					</div>
					<div className={classes.chart}>
						<p className="small">The graphic refers to the same time n days ago</p>
						<Chart
							options={chartOptions.options}
							series={chartOptions.series}
							type="bar"
							width="300"
						/>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default VisitorsPanel;