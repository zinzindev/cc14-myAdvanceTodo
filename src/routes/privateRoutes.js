import { Navigate } from 'react-router-dom';
import TodoPage from '../pages/TodoPage';
import ProfilePage from '../pages/ProfilePage';

export const privateRoutes = [
    {
        path: '/todo',
        element: <TodoPage />,
    },
    {
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        path: '/profile/:userId',
        element: <ProfilePage />,
    },
    {
        path: '*',
        element: <Navigate to='/todo' />,
    },
];
