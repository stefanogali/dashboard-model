import { MdOutlineLocalFlorist } from "react-icons/md";
import Card from "../UI/Card";

import classes from './Panels.module.css';

const PlantsWateringPanel = (props) => {
	//plants need to be watered a day between today and 3 days in the future
	const dateInFuture = props.data + (86400000 * (Math.floor(Math.random() * 4)));
	
	// for live data
	//const dateInFuture = props.data * 1000 + (86400000 * (Math.floor(Math.random() * 4)));
	const dayToWater = new Date(dateInFuture).toDateString();
	return (
		<Card className={`${classes.panel} ${classes['panel-plants-watering']}`}>
			<div className={classes['panel-container']}>
				<div className={classes['panel-inner']}>
					<div className={classes['panel-text']}>
						<h3>Office plants!</h3>
						<p>They will need next to be watered on <strong>{dayToWater}</strong></p>
					</div>
					<div className={classes['panel-image']}>
						<span><MdOutlineLocalFlorist/></span>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default PlantsWateringPanel;