import { useState } from 'react';
import ProductList from './ProductList'
import styles from './Cart.module.scss'
const items = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
];

function CartInfo({type, text, price}){
  const priceStyle = type === 'shipping' ? styles.shippingPrice : styles.infoPrice;
  return( 
    <section className={`${styles.cartInfo} ${type} col col-12`}>
      <div className={styles.infoText}>{text}</div>
      <div className={priceStyle}>${price}</div>
    </section>
  )
}
export default function Cart(){
  const [quantities, setQuantities] = useState({'1':1, '2':1});

  function handleQuantities(e, itemId){
    if (e.target.className.includes('minus') && quantities[itemId] > 0){
      setQuantities({...quantities, [itemId]: quantities[itemId] - 1});
    }
    if (e.target.className.includes('plus')){
      setQuantities({...quantities, [itemId] : quantities[itemId] + 1});
    }
  }
  // if the quantity becomes 0, the item disappears
  const filteredItems = items.filter(item => quantities[item.id] > 0) 
  // calculate total price
  const total = filteredItems.reduce((sum, item)=>{
    return sum + quantities[item.id] * item.price;
  }, 0)

  return(
  <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
    <h3 className={styles.cartTitle}>購物籃</h3>
    <ProductList quantities={quantities} filteredItems={filteredItems} handleQuantities={handleQuantities}/>
    <CartInfo 
      type="shipping"
      text="運費"
      price="免費"
    />
    <CartInfo 
      type="total"
      text="小計" 
      price={total}
    />
  </section>
  
  )
}
