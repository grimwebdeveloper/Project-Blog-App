import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='flex justify-between mb-12'>
			<Link to='' className='font-bold'>
				Blog App
			</Link>
			<nav className='flex gap-4'>
				<Link to='/login'>Login</Link>
				<Link to='/register'>Register</Link>
			</nav>
		</header>
	);
};

export default Header;
