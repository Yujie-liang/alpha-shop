import styles from './LoginPage.module.scss';
import { LogoIcon } from '../assets/images';
import AuthInput from '../components/Auth/AuthInput';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleClick = async () => {
    if (username.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    if (email.length === 0) {
      return;
    }
    const success = await register({
      username,
      email,
      password,
    });
    if (success) {
      Swal.fire({
        title: '註冊成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
      });
      setTimeout(() => {
        navigate('/shop'); // 註冊成功後才跳轉，避免還沒建好user就撈資料
      }, 1000); // 等待 Swal 提示顯示完成後跳轉
      return;
    }
    Swal.fire({
      title: '註冊失敗',
      icon: 'error',
      showConfirmButton: false,
      timer: 1000,
      position: 'top',
    });
  };
  
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/shop');
  //   }
  // }, [navigate, isAuthenticated]);

  return (
    <div className={styles.authContainer}>
      <div>
        <LogoIcon />
      </div>
      <h1>建立您的帳號</h1>

      <div className={styles.authInputContainer}>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          value={username}
          onChange={(nameInputValue) => setUsername(nameInputValue)}
        />
      </div>

      <div className={styles.authInputContainer}>
        <AuthInput
          label="Email"
          placeholder="請輸入Email"
          value={email}
          onChange={(emailInputValue) => setEmail(emailInputValue)}
        />
      </div>

      <div className={styles.authInputContainer}>
        <AuthInput
          label="密碼"
          placeholder="請輸入密碼"
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </div>
      <button className={styles.authButton} onClick={handleClick}>註冊</button>
      <Link to="/login">
        <div className={styles.authLinkText}>已經有帳號了? 登入</div>
      </Link>
    </div>
  );
};

export default SignUpPage;