import { useContext } from 'react';
import ProductList from './ProductList'
import styles from './Cart.module.scss'
import { CartContext } from '../../context/CartContext';

function CartInfo({type, text, price}){
  const priceStyle = type === 'shipping' ? styles.shippingPrice : styles.infoPrice;
  return( 
    <section className={`${styles.cartInfo} ${type} col col-12`}>
      <div className={styles.infoText}>{text}</div>
      <div className={priceStyle}>{price}</div>
    </section>
  )
}


export default function Cart(){
  const {total} = useContext(CartContext)

  return(
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ProductList/>
      <CartInfo 
        type="shipping"
        text="運費"
        price="免費"
      />
      <CartInfo 
        type="total"
        text="小計" 
        price={`$${total}`}
      />
    </section>
  )
}
