import { useContext } from 'react';
import SidebarContext from '../../store/sidebar-context';
import classes from './BurgerMenu.module.css';

const BurgerMenu = () => {
	const sidebarCtx = useContext(SidebarContext);

	const clickHandler = () => {
		sidebarCtx.isSidebarOpened ? sidebarCtx.onSidebarClose() : sidebarCtx.onSidebarOpen();
	}

	return (
		<div className={classes['header-burger-container']} onClick={clickHandler}>
			<div className={classes['burger-line']}></div>
			<div className={classes['burger-line']}></div>
			<div className={classes['burger-line']}></div>
		</div>
	)
}

export default BurgerMenu;