import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { loginAccount, getUser, logoutAccount } from '@/services/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('token');
      if (token) {
        try {
          const userData = await getUser();
          setUser(userData);
        } catch (error) {
          console.error('Failed to fetch user:', error);
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async credentials => {
    const data = await loginAccount(credentials);
    if (data.access_token) {
      Cookies.set('token', data.access_token, { expires: 7 });
      const userData = await getUser();
      setUser(userData);
      if (userData.role.name === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
    return data;
  };

  const logout = async () => {
    const data = await logoutAccount();
    Cookies.remove('token');
    setUser(null);
    return data;
  };

  return <AuthContext.Provider value={{ user, login, logout, loading, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
