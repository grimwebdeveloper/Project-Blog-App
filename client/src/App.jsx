import './App.css';

const App = () => {
	return (
		<main>
			<header>
				<a href='' className='logo'>
					Blog App
				</a>
				<nav>
					<a href=''>Login</a>
					<a href=''>Register</a>
				</nav>
			</header>
			<div className='post'>
				<div className='image'>
					<a href=''>
						<img src='/blog.jpg' alt='' />
					</a>
				</div>
				<div className='texts'>
					<a href=''>
						<h2>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Amet,harum.
						</h2>
					</a>
					<p className='info'>
						<a className='author'>GrimWebDeveloper</a>
						<time>2023-08-01T12:00:00.000Z</time>
					</p>
					<p className='summary'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quis
						laboriosam nobis numquam consectetur praesentium explicabo
						necessitatibus accusantium iusto? Omnis at facilis doloribus minus
						error amet nesciunt reiciendis debitis hic.
					</p>
				</div>
			</div>
		</main>
	);
};

export default App;
