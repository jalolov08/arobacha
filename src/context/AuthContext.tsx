import axios from 'axios';
import {createContext, useContext, useEffect, useState} from 'react';
import {API_BASE} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuth {
  authState?: {token: string | null; authenticated: boolean | null};
  onLogin?: (username: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
  onRegister?: (
    password: string,
    username: string,
    phone: string,
    name: string,
    surname?: string,
  ) => Promise<any>;
}

const AuthContext = createContext<IAuth>({});
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({children}: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });
  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    };
    loadToken();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const result = await axios.post(`${API_BASE}/auth/login`, {
        username,
        password,
      });

      setAuthState({
        token: result.data.token,
        authenticated: true,
      });

      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result.data.token}`;
      await AsyncStorage.setItem('token', result.data.token);
      return result;
    } catch (e) {
      return {error: true, msg: (e as any).response.data};
    }
  };
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = '';
  };
  const register = async (
    password: string,
    username: string,
    phone: string,
    name: string,
    surname: string,
  ) => {
    try {
      const result = await axios.post(`${API_BASE}/auth/register`, {
        password,
        username,
        phone,
        name,
        surname,
      });
      return result;
    } catch (e) {
      return {error: true, msg: (e as any).response.data};
    }
  };
  const value = {
    onLogin: login,
    authState,
    onLogout: logout,
    onRegister: register,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
