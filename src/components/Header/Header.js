import { useRef } from 'react';
import { MdSearch, MdNotificationsNone } from "react-icons/md";
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Button from "../UI/Button";
import logo from '../../assets/images/logo.png';
import classes from './Header.module.css';

const Header = () => {
	const inputRef = useRef();
	const clickHandler = () => {
		inputRef.current.value = '';
	}

	return (
		<header className={`container ${classes.header}`}>
			<div className={classes['header-logo']}>
				<img src={logo} className={classes['header-logo']} alt="logo" />
			</div>
			<div className={classes['header-search']}>
				<span><MdSearch/></span>
				<input type="text" className={classes['search-input']} placeholder="Search here..." ref={inputRef}/>
				<Button type="button" className={classes['search-button']} onClick={clickHandler}>Go</Button>
			</div>
			<div className={classes['header-notification']}>
				<span><MdNotificationsNone/></span>
			</div>
			<BurgerMenu/>
		</header>
	)
}

export default Header;