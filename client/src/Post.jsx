const Post = () => {
	return (
		<div className='grid grid-cols-2 gap-6 mb-6'>
			<img
				src='/blog.jpg'
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
					<time dateTime=''>02-Nov-2025 10:29:15</time>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
					repudiandae necessitatibus perferendis accusantium ullam iure nisi
					rerum, similique odio voluptatem dolor vel quos fugit dolores
					exercitationem consequuntur quae provident itaque?
				</p>
			</div>
		</div>
	);
};

export default Post;
