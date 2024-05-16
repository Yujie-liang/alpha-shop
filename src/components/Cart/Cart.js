import ProductList from "./ProductList"

function CartInfo({type, text}){
  return( 
    <section class={type}>
      <div class="text">{text}</div>
      <div class="price"></div>
    </section>
  )
}
export default function Cart(){
    
    return(
    <section class="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>
      <ProductList />
      <CartInfo 
       type="shipping"
       text="運費" 
      />
      <CartInfo 
       type="total"
       text="小計" 
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