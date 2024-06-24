import styles from './Products.module.scss';
import { useContext } from 'react';
import { useProducts } from '../../context/ProductsContext';
import { FavoritesContext } from '../../context/FavoritesContext';

export default function Products() {
  const { filteredProducts } = useProducts();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  if (filteredProducts.length === 0) return (<h2 className={styles.note}>沒有符合條件的商品!</h2>)
  return (
    <div className={`container ${styles.products}`}>
      {filteredProducts.map(product => (
        <div key={product.id} className={`${styles.card}  ${styles[`card${product.id}`]}`}>
          <a href="#" className={styles.tshirt}>
            <div className={`${styles.tshirtImg} ${styles.img1}`} onMouseEnter={e => {
              e.currentTarget.style.backgroundImage = `url(${product.img})`;
            }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundImage = '';
              }}></div>
            <div className={styles.addToFavorite}>
              <i className={`${styles.tshirtIcon} ${favorites.includes(product.id) ? 'fa-solid' : 'fa-regular'} fa-heart`} onClick={()=>toggleFavorite(product.id)}></i>
            </div>
            <div className={styles.tshirtText}>
              <p className={styles.tshirtName}>{product.name}</p>
              <p className={styles.tshirtPrice}>NT$ {product.price}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}