import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';

const Layout = (props) => {
	return (
		<main className={classes.main}>
			<Sidebar/>
			<section className={classes.page}>
				<Header/>
				{ props.children }
				<Footer/>
			</section>
		</main>
	)
}

export default Layout;