import { useContext } from 'react';
import { MdOutlineClose } from "react-icons/md";
import SidebarContext from '../../store/sidebar-context';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/images/logo.png';
import classes from './Sidebar.module.css';

const Sidebar = () => {
	const sidebarCtx = useContext(SidebarContext);

	const clickHandler = () => {
		sidebarCtx.onSidebarClose();
	}

	return(
		<aside className={`${sidebarCtx.isSidebarOpened ? classes.open : ''} ${classes.sidenav}`}>
			<div className={classes['sidenav-inner']}>
				<img src={logo} className={classes['sidebar-logo']} alt="logo" />
				<div className={classes['sidebar-close']} onClick={clickHandler}>
					<MdOutlineClose/>
				</div>
				<Navbar />
			</div>
		</aside>
	)
}

export default Sidebar;