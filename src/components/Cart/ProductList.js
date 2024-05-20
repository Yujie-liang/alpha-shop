
import styles from './Cart.module.scss';

function Items({quantities, filteredItems, handleQuantities}){


  return(
    filteredItems.map(item => 
      <div className={`${styles.productContainer} col col-12`} data-count="0" data-price={item.price}>
          <img className={styles.imgContainer} src={item.img} alt="product"/>
          <div className={styles.productInfo}>
            <div className={styles.productName}>{item.name}</div>
            <div className={styles.productControlContainer}>
                <div className={styles.productControl}>
                  <img src="/icons/minus.svg" className="product action minus" alt="minus" onClick={(e)=>handleQuantities(e, item.id)}></img>
                  <span className={styles.productCount}>{quantities[item.id]}</span>
                  <img src="/icons/plus.svg" className="product action plus" alt="plus" onClick={(e)=>handleQuantities(e, item.id)}></img>
                </div>
            </div>
            <div className={styles.price}>${item.price}</div>
          </div>
      </div>
    )
  )
}
export default function ProductList( {quantities, filteredItems, handleQuantities} ){
    return(
        <section className="product-list col col-12" data-total-price="0">
            <Items 
                quantities={quantities}
                filteredItems={filteredItems}
                handleQuantities={handleQuantities}
            />
        </section>
    )
}
