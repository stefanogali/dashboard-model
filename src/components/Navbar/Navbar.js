import { useContext } from "react";
import SidebarContext from "../../store/sidebar-context";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdTableView, MdRule, MdSupervisedUserCircle, MdPlayCircle, MdPolicy, MdFaceUnlock, MdSettingsApplications } from "react-icons/md";
import classes from './Navbar.module.css';

const navbarLinks = [
	{
		id: 1,
		name: 'Dashboard',
		icon: <MdDashboard />,
		page: '/'
	},
	{
		id: 2,
		name: 'Tables',
		icon:  <MdTableView />,
		page: '/tables'
	},
	{
		id: 3,
		name: 'Reports',
		icon: <MdRule />,
		page: '/reports'
	},
	{
		id: 4,
		name: 'User demo',
		icon: <MdSupervisedUserCircle />,
		page: '/user-demo'
	},
	{
		id: 5,
		name: 'Bar',
		icon: <MdPlayCircle />,
		page: '/bar'
	},
	{
		id: 6,
		name: 'Foo',
		icon: <MdPolicy />,
		page: '/foo'
	},
	{
		id: 7,
		name: 'Hello mate',
		icon: <MdFaceUnlock />,
		page: '/hello-mate'
	},
	{
		id: 8,
		name: 'Settings',
		icon: <MdSettingsApplications />,
		page: '/settings'
	}
];

const Navbar = () => {
	const sidebarCtx = useContext(SidebarContext);

	const clickHandler = () => {
		sidebarCtx.onSidebarClose();
	}

	return (
		<nav className={classes['sidebar-nav']}>
			<ul>
				{navbarLinks.map(navBarLink => {
					return (
						<li key={navBarLink.id} className="sidebar-link" onClick={clickHandler}>
							<NavLink to={navBarLink.page}>
								<span>{navBarLink.icon}</span>
								{navBarLink.name}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Navbar;