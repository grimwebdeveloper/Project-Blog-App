const RegisterPage = () => {
	return (
		<form className='max-w-sm mx-auto'>
			<h1 className='font-bold text-2xl mb-6 text-center'>REGISTER</h1>
			<input
				type='text'
				placeholder='username'
				className='block mb-4 w-full border border-zinc-400 bg-zinc-200 p-1'
			/>
			<input
				type='password'
				placeholder='password'
				className='block mb-4 w-full border border-zinc-400 bg-zinc-200 p-1'
			/>
			<button className='w-full bg-zinc-600 p-1 text-white'>Register</button>
		</form>
	);
};

export default RegisterPage;
