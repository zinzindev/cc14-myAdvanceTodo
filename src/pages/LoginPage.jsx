import { Link } from 'react-router-dom';
import { useState } from 'react';

import AuthPhoto from '../assets/auth.png';
import { useAuth } from '../hooks/useAuth';

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { user, setUser, isAuth, setIsAuth } = useAuth();

	const login = (e) => {
		e.preventDefault();

		if (email === 'codecamp@mail.com' && password === '1234') {
			setIsAuth(true);
			setUser({userId: 20, firstName: 'Zin', lastName:'Zinn'})
		}
	};

	return (
		<div className='h-screen flex'>
			{/* Left */}
			<div className='flex-1 hidden lg:flex  justify=center items-center'>
				<div className='p-16'>
					<img src={AuthPhoto} alt='banner' className='w-full' />
				</div>
			</div>

			{/* Right */}
			<div className='flex-1 flex justify-center items-center'>
				<div className='m-[100px] flex flex-col gap-8 w-[80%]'>
					<h1 className='text-8xl font-bold mb-12'>Login</h1>
					<form className='flex flex-col gap-4' onSubmit={login}>
						<input
							tpye='email'
							placeholder='example@mail.com'
							className='p-6 text-4xl outline-none rounded-lg border-2'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type='password'
							placeholder='password'
							className='p-6 text-4xl outline-none rounded-lg border-2'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							tpye='sumit'
							className='mt-4 p-4 py-6 text-4xl bg-[#db4c3f] text-white rounded-lg hover:bg-red-600'
						>
							Login
						</button>
					</form>
					<div className='flex gap-4'>
						<p className='text-2xl text-gray-600 hover:text-[#db4c3f] cursor-pointer font-bold'>
							forgot password ?
						</p>
						<p className='text-2xl text-gray-600'>
							Don't have an account ?
							<Link to='/signup'>
								{/* <a href='/signup'> */}
								<span className='hover:text-[#db4c3f] cursor-pointer font-bold'>
									Go to sign up
								</span>
								{/* </a> */}
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
