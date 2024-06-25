
import { useContext } from 'react';
import styles from './Cart.module.scss';
import { CartContext } from '../../context/CartContext';


function Items() {
  const { cart, handleQuantities, getProductById } = useContext(CartContext);
  const plusIcon = `${process.env.PUBLIC_URL}/icons/plus.svg`
  const minusIcon = `${process.env.PUBLIC_URL}/icons/minus.svg`
  return (
    cart.map(item => {
      const product = getProductById(item.productId);
      return(
        <div className={`${styles.productContainer} col col-12`} data-count="0" data-price={product.price} key={item.productId}>
          <img className={styles.imgContainer} src={product.img} alt="product" />
          <div className={styles.productInfo}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productControlContainer}>
              <div className={styles.productControl}>
                <img src={minusIcon} className={`${styles.action} minus`} alt="minus" onClick={(e) => handleQuantities(e, item.productId)}></img>
                <span className={styles.productCount}>{[item.quantity]}</span>
                <img src={plusIcon} className={`${styles.action} plus`} alt="plus" onClick={(e) => handleQuantities(e, item.productId)}></img>
              </div>
            </div>
            <div className={styles.price}>${product.price}</div>
          </div>
        </div>
      )
    })
  )
}

export default function ProductList({ handleQuantities }) {
  return (
    <section className="product-list col col-12" data-total-price="0">
      <Items
        handleQuantities={handleQuantities}
      />
    </section>
  )
}
