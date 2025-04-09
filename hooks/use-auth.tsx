import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserCredential, RegisterData, AuthContextType, AuthState } from '../types';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const AuthContext = createContext<AuthContextType>({
  ...initialState,
  login: async () => false,
  register: async () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>(initialState);

  const login = async (credentials: UserCredential): Promise<boolean> => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Simulação de login bem-sucedido
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: '1',
        name: 'Lucas',
        email: credentials.email,
      };
      
      setState(prev => ({ 
        ...prev, 
        isAuthenticated: true, 
        user, 
        loading: false 
      }));
      
      return true;
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: 'Falha no login. Verifique suas credenciais e tente novamente.', 
        loading: false 
      }));
      
      return false;
    }
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Simulação de registro bem-sucedido
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: '1',
        name: data.name,
        email: data.email,
      };
      
      setState(prev => ({ 
        ...prev, 
        isAuthenticated: true, 
        user, 
        loading: false 
      }));
      
      return true;
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: 'Falha no registro. Tente novamente mais tarde.', 
        loading: false 
      }));
      
      return false;
    }
  };

  const logout = () => {
    setState(initialState);
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default useAuth;