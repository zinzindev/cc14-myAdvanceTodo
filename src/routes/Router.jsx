import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { privateRoutes } from './privateRoutes';

function Routes({isAuth = false}) {
	let appRoutes = isAuth ? privateRoutes : publicRoutes;

	const router = createBrowserRouter(appRoutes);

	return <RouterProvider router={router} />;
}

export default Routes;

// Ex: Array of Router Object
// const mockedRoutes = [
//     {
//         path: '/',
//         element: <h1>Home</h1>,
//     },
//     {
//         path: 'profile',
//         element: <h1>profile</h1>,
//     },
//     {
//         path: 'profile/:id',
//         element: <h1>profile-friend</h1>,
//     },
//     {
//         path: 'about',
//         element: <h1>about</h1>,
//     },
//     {
//         path: '*',
//         element: <Navigate to="/" />
//     }
// ];
