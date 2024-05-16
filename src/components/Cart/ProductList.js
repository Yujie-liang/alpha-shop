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

function Items({items}){
    return(
      items.map(item => 
        <div class="product-container col col-12" data-count="0" data-price={item.price}>
            <img class="img-container"src={item.img} alt="product"/>
            <div class="product-info">
            <div class="product-name">{item.name}</div>
            <div class="product-control-container">
                <div class="product-control">
                <img src="/icons/minus.svg" className="product action minus" alt="minus"></img>
                <span class="product-count"></span>
                <img src="/icons/plus.svg" className="product action plus" alt="plus"></img>
                </div>
            </div>
            <div class="price">${item.price}</div>
            </div>
        </div>
      )
    )
}
export default function ProductList(){
    return(
        <section class="product-list col col-12" data-total-price="0">
            <Items 
                items={items}
            />
        </section>
    )
}


{/* <section class="product-list col col-12" data-total-price="0">
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
          </section> */}