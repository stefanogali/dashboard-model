import { MdCake } from "react-icons/md";
import Card from "../UI/Card";

import classes from './Panels.module.css';

const OfficeBdayPanel = (props) => {
	return (
		<Card className={`${classes.panel} ${classes['panel-office-birthday']}`}>
			<div className={classes['panel-container']}>
				<div className={classes['panel-inner']}>
					<div className={classes['panel-text']}>
						<h3>Office Next Birthday</h3>
						<h5>Who has next birthday?</h5>
						<p>The next person to have birthday is <strong>{props.data.name} on {props.data.bdayDate}</strong></p>
						<p>Don't forget to send him best wishes at <strong>{props.data.email}</strong></p>
					</div>
					<div className={classes['panel-image']}>
						<span><MdCake /></span>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default OfficeBdayPanel;