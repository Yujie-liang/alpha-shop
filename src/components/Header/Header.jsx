import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogoIcon } from '../../assets/images';
import { useAuth } from '../../context/AuthContext';
export default function Header() {
    const [showInput, setShowInput] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleInput = () => {
        setShowInput(!showInput);
    };

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const { logout, login } = useAuth();
    const handleLogout = () => {
        logout();
    };
    const navigate = useNavigate();
    const { isAuthenticated, currentMember } = useAuth();
    const handlePermissionCheck = () => {
        navigate('/login');
    }
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [navigate, isAuthenticated]);

    return (
        <header className={styles.header}>
            <button href="#" className={`${styles.icon} ${styles.search}`}>
                <i className={`fa-solid fa-magnifying-glass ${styles.faIcon}`} onClick={toggleInput}></i>
                <input type="text" placeholder='search' className={`${styles.searchInput} ${showInput ? styles.showInput : ''}`}></input>
            </button>
            <Link to="/shop" className={styles.company}>
                <LogoIcon />
                <h1 className={styles.companyName}>ALPHA SHOP&reg;</h1>
            </Link>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="https://www.dedicatedbrand.com/en/men/t-shirts" className={styles.navLink}>Men</a></li>
                    <li className={styles.navItem}><a href="https://www.dedicatedbrand.com/en/women/t-shirts#page=2"
                        className={styles.navLink}>Women</a></li>
                    <li className={styles.navItem}><a href="https://www.dedicatedbrand.com/en/kids/t-shirts" className={styles.navLink}>Kids</a></li>
                </ul>
            </nav>

            <Link to={isAuthenticated ? "/favorite" : "/login"} className={`${styles.icon} ${styles.favorite}`}><i className={`fa-regular fa-heart ${styles.faIcon}`}></i></Link>
            <Link to={isAuthenticated ? "/checkout" : "/login"} className={`${styles.icon} ${styles.cart}`}>
                <i className={`fa-solid fa-cart-shopping ${styles.faIcon}`}></i>
            </Link>
            <button className={`${styles.icon} ${styles.user}`} onClick={isAuthenticated ? toggleMenu : handlePermissionCheck}>
                <i className={`fa-solid fa-user ${styles.faIcon}`}></i>
                {currentMember && <p className={styles.member}>{currentMember.name}</p>}

                {isMenuVisible && (
                    <div className={styles.menu}>
                        <a href="/profile" className={styles.menuItem}>Profile</a>
                        <a href="/settings" className={styles.menuItem}>Settings</a>
                        <Link to="/login" className={styles.menuItem} onClick={handleLogout}>Logout</Link>
                    </div>
                )}
            </button>
        </header>
    )
}