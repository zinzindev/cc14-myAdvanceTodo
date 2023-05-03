import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <h1>Home</h1>,
        },
        {
            path: 'profile',
            element: <h1>profile</h1>,
        },
        {
            path: 'profile/:id',
            element: <h1>profile-friend</h1>,
        },
        {
            path: 'about',
            element: <h1>about</h1>,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Routes;
