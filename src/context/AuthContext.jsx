import { createContext, useContext, useState, useEffect } from 'react';
import { register, login, checkPermission, saveUser } from '../api/auth';
import * as jwt from 'jsonwebtoken';
import { useLocation } from 'react-router-dom';
import { useProducts } from './ProductsContext';

// 每個頁面都讀取得到
const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null, //當前使用者
  register: null, // 會影響authContext狀態的方法
  login: null,
  logout: null,
};

const AuthContext = createContext(defaultAuthContext);
// 使用context
export const useAuth = () => useContext(AuthContext);
// provider管理context狀態操作
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const { setFilters } = useProducts();
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        setPayload(null);
        setIsAuthenticated(false);
        return;
      }
      const result = await checkPermission(authToken);
      if (result) {
        const tempPayload = jwt.decode(authToken);
        setPayload(tempPayload);
        setIsAuthenticated(true);
      } else {
        setPayload(null);
        setIsAuthenticated(false);
      }
    };
    checkTokenIsValid();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentMember: payload && { id: payload.sub, name: payload.name },
        register: async (data) => {
          const { success, authToken } = await register({
            username: data.username,
            email: data.email,
            password: data.password,
          });
          const tempPayload = jwt.decode(authToken); // token中帶username, email, password資料
          if (tempPayload) {
            // 若解析成功
            // 先 save user，讓cartContext和favoriteContext取的到東西
            await saveUser(tempPayload.name);
            // 再設定currentMember和isAuthenticate，否則先設定但還沒saveUser創建user就會error
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem('authToken', authToken);
            return success;
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
        },
        login: async (data) => {
          const { success, authToken } = await login({
            username: data.username,
            password: data.password,
          });
          const tempPayload = jwt.decode(authToken); // token中帶username, email, password資料
          if (tempPayload) {
            // 若解析成功
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem('authToken', authToken);
            // save user，待解析
            await saveUser(tempPayload.name);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return success;
        },
        logout: async () => {
          setFilters({ "size": 'Size', "color": 'Color', "category": 'Category', "search": '' });
          setPayload(null);
          setIsAuthenticated(false);
          localStorage.removeItem('authToken');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};