import styles from './Filter.module.scss';
export default function Filter() {
  return (
    <div className={`container ${styles.filter}`}>
      <select className={`${styles.selector} ${styles.size}`} id="size">
        <option>Size</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <select className={`${styles.selector} ${styles.color}`} id="color">
        <option>Color</option>
        <option>Blue</option>
        <option>Red</option>
        <option>Pink</option>
        <option>Yellow</option>
        <option>White</option>
        <option>Purple</option>
      </select>
      <select className={`${styles.selector} ${styles.category}`} id="category">
        <option>Category</option>
        <option>T-shirt</option>
        <option>Skirt</option>
        <option>Dress</option>
        <option>Others</option>
      </select>
    </div>
  )
}