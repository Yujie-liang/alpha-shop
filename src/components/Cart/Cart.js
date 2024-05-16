import ProductList from './ProductList'
import styles from './Cart.module.scss'

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
    
    return(
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ProductList />
      <CartInfo 
       type="shipping"
       text="運費"
       price="免費"
      />
      <CartInfo 
       type="total"
       text="小計" 
       price="$300"
      />
    </section>
    
    )
}
{/* <section class="cart-container col col-lg-5 col-sm-12">
          <h3 class="cart-title">購物籃</h3>

          <section class="product-list col col-12" data-total-price="0">
            <div class="product-container col col-12" data-count="0" data-price="3999">
              <img class="img-container"src="./public/images/product-1.jpg" />
              <div class="product-info">
                <div class="product-name">破壞補丁修身牛仔褲</div>
                <div class="product-control-container">
                  <div class="product-control">
                    <svg class="product-action minus">
                      <use xlink:href="#svg-icon-minus"></use>
                    </svg>
                    <span class="product-count"></span>
                    <svg class="product-action plus">
                      <use xlink:href="#svg-icon-plus"></use>
                    </svg>
                  </div>
                </div>
                <div class="price"></div>
              </div>
            </div>
            <div class="product-container col col-12" data-count="0" data-price="1299">
              <img class="img-container" src="./public/images/product-2.jpg" />
              <div class="product-info">
                <div class="product-name">刷色直筒牛仔褲</div>
                <div class="product-control-container">
                  <div class="product-control">
                    <svg class="product-action minus">
                      <use xlink:href="#svg-icon-minus"></use>
                    </svg>
                    <span class="product-count"></span>
                    <svg class="product-action plus">
                      <use xlink:href="#svg-icon-plus"></use>
                    </svg>
                  </div>
                </div>
                <div class="price"></div>
              </div>
            </div>
          </section>

          <section class="cart-info shipping col col-12">
            <div class="text">運費</div>
            <div class="price"></div>
          </section>
          <section class="cart-info total col col-12">
            <div class="text">小計</div>
            <div class="price"></div>
          </section>
        </section> */}