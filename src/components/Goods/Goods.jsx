import styles from './Goods.module.scss';
import { useState, useEffect } from 'react';
import { getGoods } from '../../api/goods';

export default function Card({ name, price, imgUrl }) {
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    const fetchGoods = async () => {
      const goods = await getGoods();
      setGoods(goods);
    }
    fetchGoods();
  }, [])

  return (
    <div className={`container ${styles.goods}`}>
      {goods.map(good => (
        <div key={good.id} className={`${styles.card}  ${styles[`card${good.id}`]}`}>
          <a href="#" className={styles.tshirt}>
            <div className={`${styles.tshirtImg} ${styles.img1}`} onMouseEnter={e => {
              e.currentTarget.style.backgroundImage = `url(${good.img})`;
            }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundImage = '';
              }}></div>
            <div className={styles.addToFavorite}>
              <i className={`${styles.tshirtIcon} fa-regular fa-heart`}></i>
            </div>
            <div className={styles.tshirtText}>
              <p className={styles.tshirtName}>{good.name}</p>
              <p className={styles.tshirtPrice}>NT$ {good.price}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}