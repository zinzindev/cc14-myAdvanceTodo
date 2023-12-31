import AuthPhoto from '../assets/auth.png';

function RegisterPage() {
	return (
		<div className='h-screen flex flex-row-reverse'>
			{/* Left */}
			<div className='flex-1 hidden lg:flex  justify=center items-center'>
				<div className='p-16'>
					<img src={AuthPhoto} alt='banner' className='w-full' />
				</div>
			</div>

			{/* Right */}
			<div className='flex-1 flex justify-center items-center'>
				<div className='m-[100px] flex flex-col gap-8 w-[80%]'>
					<h1 className='text-8xl font-bold mb-12'>Sign Up</h1>
					<form className='flex flex-col gap-4'>
						<input
							tpye='email'
							placeholder='example@mail.com'
							className='p-6 text-4xl outline-none rounded-lg border-2'
						/>
						<input
							type='password'
							placeholder='password'
							className='p-6 text-4xl outline-none rounded-lg border-2'
						/>
						<input
							tpye='password'
							placeholder='confirm password'
							className='p-6 text-4xl outline-none rounded-lg border-2'
						/>
						<button
							tpye='sumit'
							className='mt-4 p-4 py-6 text-4xl bg-[#db4c3f] text-white rounded-lg hover:bg-red-600'
						>
							Sign up with email
						</button>
					</form>
					<div className='flex gap-4'>
						<p className='text-2xl text-gray-600'>
							Already have an account ? {''}
							<span className='hover:text-[#db4c3f] cursor-pointer font-bold'>
								Go to log in
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
