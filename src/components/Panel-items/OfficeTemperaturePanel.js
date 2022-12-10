import { MdOutlineFireplace } from "react-icons/md";
import Card from "../UI/Card";

import classes from './Panels.module.css';

const OfficeTemperaturePanel = (props) => {
	return (
		<Card className={`${classes.panel} ${classes['panel-office-temperature']}`}>
			<div className={classes['panel-container']}>
				<div className={classes['panel-inner']}>
					<div className={classes['panel-text']}>
						<h3>Office Temperature</h3>
						<p>Current temperature in the office is <strong>{props.data} degrees Celcius</strong></p>
					</div>
					<div className={classes['panel-image']}>
						<span><MdOutlineFireplace /></span>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default OfficeTemperaturePanel;