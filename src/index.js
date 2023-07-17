import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';

import AuthContextProvider from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
 