import { useContext, useState } from 'react';
import styles from './Modal.module.scss';
import { CartContext } from '../../context/CartContext';

function Modal({ product, onClose }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const plusIcon = `${process.env.PUBLIC_URL}/icons/plus.svg`;
  const minusIcon = `${process.env.PUBLIC_URL}/icons/minus.svg`;

  const handleAddToCart = () => {
    // 加入購物車的邏輯
    addToCart(product.id, quantity);
    alert(`${product.name} (${quantity} 件)已加入購物車`);
    onClose();
  };
  // 增加數量
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  // 減少數量
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <div className={styles.productControl}>
            <img src={minusIcon} className={`${styles.action} minus`} alt="minus" onClick={decreaseQuantity}></img>
            <span className={styles.productCount}>{quantity}</span>
            <img src={plusIcon} className={`${styles.action} plus`} alt="plus" onClick={increaseQuantity}></img>
        </div>
        <button onClick={handleAddToCart}>加入購物車</button>
        <button onClick={onClose}>關閉</button>
      </div>
    </div>
  );
}

export default Modal;
