import Card from "../UI/Card";

import classes from './Panels.module.css';

const OngoingProjectsPanel = (props) => {
	const projects = props.data;
	return (
		<Card className={`${classes.panel} ${classes['panel-ongoing-projects']}`}>
			<div className={classes['panel-container']}>
				<div className={classes['panel-inner']}>
					<div className={classes['panel-text']}>
						<h3>Projects we are working on at the moment</h3>
						<div className={classes['panel-list-title']}>
							<h5>Project name</h5>
							<h5>Company name</h5>
							<h5>Reference name</h5>
							<h5>Reference contact</h5>
						</div>
						<ul>
							{projects.map(project => {
							return (
								<li key={project.id} className={classes['panel-list']}>
									<p><img src={`http://localhost:3030/${project.icon_url}`}/> <span>{project.project_name}</span></p>
									<p>{project.company_name}</p>
									<p>{project.manager}</p>
									<p>{project.contact}</p>
								</li>
							)
							})}
						</ul>

					</div>
				</div>
			</div>
		</Card>
	)
}

export default OngoingProjectsPanel;