const App = () => {
	return (
		<main className='p-2.5 max-w-3xl mx-auto'>
			{/* header */}
			<header className='flex justify-between mb-12'>
				<a href='' className='font-bold'>
					Blog App
				</a>
				<nav className='flex gap-4'>
					<a href=''>Login</a>
					<a href=''>Register</a>
				</nav>
			</header>
			{/* blogs */}
			{[1, 1, 1, 1, 1].map((item) => (
				<div className='grid grid-cols-2 gap-6 mb-6'>
					<img
						src='https://picsum.photos/536/354'
						alt='sample'
						className='h-full'
					/>
					<div className='grid grid-cols-1 gap-4'>
						<h2 className='text-2xl font-semibold'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
							debitis?
						</h2>
						<div className='flex gap-4'>
							<a href=''>Author name</a>
							<time datetime=''>02-Nov-2025 10:29:15</time>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
							repudiandae necessitatibus perferendis accusantium ullam iure nisi
							rerum, similique odio voluptatem dolor vel quos fugit dolores
							exercitationem consequuntur quae provident itaque?
						</p>
					</div>
				</div>
			))}
		</main>
	);
};

export default App;
