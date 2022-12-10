import { MdOutlineWbSunny, MdOutlineUmbrella, MdAir } from "react-icons/md";
import Card from "../UI/Card";
import classes from './Panels.module.css';

const WeatherPanel = (props) => {

	//function to assign random weather condition
	const weatherCondition = (weather) => {
		if (weather) {
			const conditions = weather.split('|');
			return conditions[Math.floor(Math.random() * conditions.length)];
		}
	}

	const weatherSituation = weatherCondition(props.data?.outside_condition);

	return (
		<Card className={`${classes.panel} ${classes['panel-weather']}`}>
			<div className={classes['panel-container']}>
				<div className={classes['panel-inner']}>
					<div className={classes['panel-text']}>
						<h3>Outside weather</h3>
						<p>Today's outside weather is <strong>{weatherSituation}</strong> and we have <strong>{props.data?.outside_temperature} degrees Celcius</strong></p>
					</div>
					<div className={classes['panel-image']}>
						<span>
							{weatherSituation === 'sunny' && <MdOutlineWbSunny/>}
							{weatherSituation === 'rainy' && <MdOutlineUmbrella/>}
							{weatherSituation === 'windy' && <MdAir/>}
						</span>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default WeatherPanel;