import styles from './Footer.module.scss';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.right}>&copy; 2024 Alpha Shop. All rights reserved.</p>
    </footer>
  )
}