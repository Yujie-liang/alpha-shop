import { LogoIcon } from '../assets/images';
import AuthInput from '../components/Auth/AuthInput';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';
import styles from './LoginPage.module.scss'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth(); // 取出需要的狀態與方法
  const handleClick = async () => {
    if (username.length === 0 || password.length === 0) {
      Swal.fire({
        title: '請輸入帳號密碼',
        icon: 'error',
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
      });
      return;
    }

    const success = await login({ username, password }); //login() 變成是 AuthContext 裡的方法，而非直接呼叫api
    if (success) {
      Swal.fire({
        title: '登入成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
      });
      return;
    }
    Swal.fire({
      title: '登入失敗，帳號或密碼錯誤',
      icon: 'error',
      showConfirmButton: false,
      timer: 1000,
      position: 'top',
    });
  };
  useEffect(() => {
    // render前觸發，navigate和isAuthenticated有變化時觸發
    if (isAuthenticated) {
      navigate('/shop');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className={styles.authContainer}>
      <div>
        <LogoIcon />
      </div>
      <h1 className={styles.loginTitle}>Alpha Shop登入</h1>

      <div className={styles.authInputContainer}>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          //defaultValue={username}
          value={username}
          onChange={(nameInputValue) => setUsername(nameInputValue)}
        />
      </div>

      <div className={styles.authInputContainer}>
        <AuthInput
          label="密碼"
          placeholder="請輸入密碼"
          type="password"
          //defaultValue={password}
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </div>
      <button className={styles.authButton} onClick={handleClick}>登入</button>
      <Link to="/signup">
        <div className={styles.authLinkText}>註冊</div>
      </Link>
    </div>
  );
};

export default LoginPage;