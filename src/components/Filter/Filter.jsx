import styles from './Filter.module.scss';
export default function Filter() {
  return (
    <div className={`container ${styles.filter}`}>
      <select className={`${styles.selector} ${styles.size}`} id="size">
        <option>Size</option>
      </select>
      <select className={`${styles.selector} ${styles.color}`} id="color">
        <option>Color</option>
      </select>
      <select className={`${styles.selector} ${styles.sort}`} id="sort">
        <option>Sort</option>
      </select>
    </div>
  )
}