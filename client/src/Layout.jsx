import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
	return (
		<main className='p-2.5 max-w-3xl mx-auto'>
			<Header />
			<Outlet />
		</main>
	);
};

export default Layout;
