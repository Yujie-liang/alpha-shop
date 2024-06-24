import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Products.module.scss';
import { useAuth } from '../../context/AuthContext';
import { useProducts } from '../../context/ProductsContext';
import { FavoritesContext } from '../../context/FavoritesContext';
const Favorites = () => {
  const navigate = useNavigate();
  const { filteredProducts } = useProducts();
  const { favorites, favoritesProducts, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className={`container ${styles.products}`}>
      {favoritesProducts.length > 0 ? (
        favoritesProducts.map(product => (
          <div key={product.id} className={`${styles.card} ${styles[`card${product.id}`]}`}>
            <a href="#" className={styles.tshirt}>
              <div
                className={`${styles.tshirtImg} ${styles.img1}`}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundImage = `url(${product.img})`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundImage = '';
                }}
              ></div>
              <div className={styles.addToFavorite}>
                <i className={`${styles.tshirtIcon} fa-solid fa-heart`} onClick={() => toggleFavorite(product.id)}></i>
              </div>
              <div className={styles.tshirtText}>
                <p className={styles.tshirtName}>{product.name}</p>
                <p className={styles.tshirtPrice}>NT$ {product.price}</p>
              </div>
            </a>
          </div>
        ))
      ) : (
        <h2 className={styles.note}>沒有收藏的商品!</h2>
      )}
    </div>
  );
};

export default Favorites;
