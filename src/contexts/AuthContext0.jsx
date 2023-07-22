import { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const logout = () => {
        setUser(null);
        setIsAuth(false)
    }
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isAuth,
                setIsAuth,logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
