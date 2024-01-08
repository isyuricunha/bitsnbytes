import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children, title = 'Crypto Price Tracker' }) => {
	return (
		<div className='layout'>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
