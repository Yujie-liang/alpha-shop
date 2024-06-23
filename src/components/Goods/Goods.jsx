import Card from './Card';
import styles from './Goods.module.scss';

export default function Goods() {
  return (
    <div className={`container ${styles.goods}`}>
      <Card />
    </div>
  )
}