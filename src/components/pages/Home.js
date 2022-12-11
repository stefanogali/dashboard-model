import { useState, useEffect } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
import VisitorsPanel from '../Panel-items/VisitorsPanel';
import OfficeTemperaturePanel from '../Panel-items/OfficeTemperaturePanel';
import WeatherPanel from '../Panel-items/WeatherPanel';
import FridgePanel from '../Panel-items/FridgePanel';
import PlantsWateringPanel from '../Panel-items/PlantsWateringPanel';
import OfficeBdayPanel from '../Panel-items/OfficeBdayPanel';
import OngoingProjectsPanel from '../Panel-items/OngoingProjectsPanel';
import classes from './Home.module.css';

//fake json data https://fakejson.com/
const baseUrlExternal = 'https://app.fakejson.com/q';
//node server
const baseUrlInternal = 'http://localhost:3030';

//fake data
// const fakePayload = {
// 	current_visitors: {
// 		active_users: '90',
// 		active_users_past_one: '100',
// 		active_users_past_two: '120',
// 		active_users_past_three: '160',
// 		active_users_past_four: '90',
// 		active_users_past_five: '80',
// 		active_users_past_six: '121'
// 	},
// 	office_temperature: '12.5',
// 	outside_weather: {
// 		outside_temperature: '14.6',
// 		outside_condition: 'sunny|rainy|windy',
// 	},
// 	plants_watering_due: Date.now() / 1000,
// 	drinks_remaining: '6',
// }

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [dashboardDataExternal, setDashboardDataExternal] = useState({});
	const [dashboardDataInternal, setDashboardDataInternal] = useState({});
	const [error, setError] = useState();

	const fetchData = async (url, method, payload, isExternalAPI) => {
		setIsLoading(true);
		let configObj = {
			method: method,
			headers: {
				'Content-Type': 'application/json'
			}
		}

		if (isExternalAPI) {
			configObj = {...configObj, body: JSON.stringify(payload)}
		}

		try {
			const response = await fetch(
				url,
				configObj
			);

			const data = await response.json();

			setError();
			if (isExternalAPI){
				//set data from https://fakejson.com/
				setDashboardDataExternal(data);
			} else {
				//set data from node mock server
				setDashboardDataInternal(data);
			}
			

		} catch (error) {
			if (isExternalAPI){
				setError('Ooops, something went wrong. Please try to reload');
				console.log(error);
			}
		}
		
		setIsLoading(false);
	}

	useEffect(() => {

		const payload = {
			token: 'your-token-here',
			data: {
			  current_visitors: {
				  active_users: 'numberInt|70,200',
				  active_users_past_one: 'numberInt|70,200',
				  active_users_past_two: 'numberInt|70,200',
				  active_users_past_three: 'numberInt|70,200',
				  active_users_past_four: 'numberInt|70,200',
				  active_users_past_five: 'numberInt|70,200',
				  active_users_past_six: 'numberInt|70,200'
			  },
			  office_temperature: 'numberFloat|14,25|1',
			  outside_weather: {
				  outside_temperature: 'numberFloat|4,12|1',
				  outside_condition: 'sunny|rainy|windy',
			  },
			  plants_watering_due: 'dateUnix',
			  drinks_remaining: 'numberInt|0,15',
			}
		}
		// -------------fake data used during building of the app-----------
		// setDashboardDataExternal(fakePayload);
		// fetchData(`${baseUrlInternal}/feed/fake-data`, 'GET', '', false);
		// setIsLoading(false);
		// ------------------

		
		fetchData(baseUrlExternal, 'POST', payload, true);
		//fetchData(`${baseUrlInternal}/feed/fake-data`, 'GET', '', false);
	}, []);

	if (error) {
		return (
			<h2>{error}</h2>
		)
	}

	return (
		<>
		{ isLoading || Object.keys(dashboardDataExternal).length === 0 ?
			<LoadingSpinner/> :
			<div className={classes['home-container']}>
				<div className={classes['home-row-inner']}>
					<VisitorsPanel data={dashboardDataExternal.current_visitors}/>
					<OfficeTemperaturePanel data={dashboardDataExternal.office_temperature}/>
				</div>
				<div className={classes['home-row-inner']}>
					<WeatherPanel data={dashboardDataExternal.outside_weather}/>
					<FridgePanel data={dashboardDataExternal.drinks_remaining}/>
				</div>
				<div className={classes['home-row-inner']}>
					<PlantsWateringPanel data={dashboardDataExternal.plants_watering_due}/>
					{ Object.keys(dashboardDataInternal).length !== 0 && 
						<OfficeBdayPanel data={dashboardDataInternal.data.office_birthday}/>
					}
				</div>
				{ Object.keys(dashboardDataInternal).length !== 0 && 
					<div className={classes['home-row-inner']}>
						<OngoingProjectsPanel data={dashboardDataInternal.data.ongoing_projects}/>
					</div>
				}
			</div>
		}
		</>
	)
}

export default Home;