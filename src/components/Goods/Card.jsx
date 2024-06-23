import styles from './Card.module.scss';

export default function Card() {
  return (
    <div className={`${styles.card}  ${styles.card1}`}>
      <a href="#" className={styles.tshirt}>
        <div className={`${styles.tshirtImg} ${styles.img1}`}></div>
        <div className={styles.addToFavorite}>
          <i className={`${styles.tshirtIcon} fa-regular fa-heart`}></i>
        </div>
        <div className={styles.tshirtText}>
          <p className={styles.tshirtName}>T-shirt Stockholm Base Leaf Green</p>
          <p className={styles.tshirtPrice}>29.00 USD</p>
        </div>
      </a>
    </div>
  )
}