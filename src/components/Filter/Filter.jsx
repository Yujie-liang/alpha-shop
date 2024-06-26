import styles from './Filter.module.scss';
import { useProducts } from '../../context/ProductsContext';

export default function Filter() {
  const { setFilters, filters } = useProducts();

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };
  return (
    <div className={`container ${styles.filter}`}>
      <select className={`${styles.selector} ${styles.size}`} id="size" name="size" value={filters.size} onChange={handleFilterChange}>
        <option>Size</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <select className={`${styles.selector} ${styles.color}`} id="color" name="color" value={filters.color} onChange={handleFilterChange}>
        <option>Color</option>
        <option>Blue</option>
        <option>Red</option>
        <option>Pink</option>
        <option>Yellow</option>
        <option>White</option>
        <option>Purple</option>
      </select>
      <select className={`${styles.selector} ${styles.category}`} id="category" name="category" value={filters.category} onChange={handleFilterChange}>
        <option>Category</option>
        <option>T-shirt</option>
        <option>Skirt</option>
        <option>Dress</option>
        <option>Others</option>
      </select>
    </div>
  )
}