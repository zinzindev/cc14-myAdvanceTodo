import { Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

export const publicRoutes = [
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/signup',
        element: <RegisterPage />,
    },
    {
        path: '*',
        element: <Navigate to='/' />,
    },
];
