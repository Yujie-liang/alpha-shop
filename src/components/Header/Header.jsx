import styles from './Header.module.scss';
export default function Header() {

    return(
        <header className={styles.header}>
            <a href="#" className={`${styles.icon} ${styles.search}`}><i className="fa-solid fa-magnifying-glass"></i></a>
            <div className={styles.company}>
            <img src="https://assets-lighthouse.alphacamp.co/uploads/image/file/14985/logo-2021.png" alt=""
                className={styles.companyLogo}></img>
            <h1 className={styles.companyName}>TSHIRT STORE&reg;</h1>
            </div>
            <nav>
            <ul className={styles.navList}>
                <li className={styles.navItem}><a href="https://www.dedicatedbrand.com/en/men/t-shirts" className={styles.navLink}>Men</a></li>
                <li className={styles.navItem}><a href="https://www.dedicatedbrand.com/en/women/t-shirts#page=2"
                    className={styles.navLink}>Women</a></li>
                <li className={styles.navItem}><a href="https://www.dedicatedbrand.com/en/kids/t-shirts" className={styles.navLink}>Kids</a></li>
            </ul>
            </nav>

            <a href="#" className={`${styles.icon} ${styles.favorite}`}><i className="fa-regular fa-heart"></i></a>
            <a href="#" className={`${styles.icon} ${styles.cart}`}><i className="fa-solid fa-cart-shopping"></i></a>
        </header>
    )
}