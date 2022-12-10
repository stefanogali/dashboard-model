import Chart from "react-apexcharts";
import Card from "../UI/Card";
import classes from './Panels.module.css';

const FridgePanel = (props) => {
	const chartOptions = {
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
				
			},
			labels: ["Fridge full at"]
		},
		series: [parseFloat((props.data * 100)/15).toFixed(1)],
	};

	const drinksLeft = (nrOfDrinks) => {
		if (nrOfDrinks > 0) {
			return `${nrOfDrinks} ${nrOfDrinks === 1 ? 'drink left' : 'drinks left'}`
		}
		return 'Sorry, no drinks left :(';
	}
	return (
		<Card className={`${classes.panel} ${classes['panel-fridge']}`}>
			<div className={classes['panel-container']}>
				<div className={classes['panel-inner']}>
					<div className={classes['panel-text']}>
						<h3>Number of drinks left in the fridge</h3>
						<p>Our fridge can contain 15 drinks max...go and get yours!</p>
						<p><strong>{drinksLeft(props.data)}</strong> in the fridge</p>
					</div>
					<div className={classes.chart}>
						<Chart
							options={chartOptions.options}
							series={chartOptions.series}
							type="radialBar"
							width="300"
						/>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default FridgePanel;