import { createContext } from 'react';
import { useState } from 'react';
const initialItems = [
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
  
export const CartContext = createContext();
export function CartProvider({children}){
  const [items, setItems] = useState(initialItems);

  function handleQuantities(e, itemId){
    if (e.target.className.includes('minus') && items.find((item)=>item.id === itemId).quantity > 0){
      setItems(items.map(
            item => {
              if (item.id === itemId){
                return {...item, quantity: item.quantity - 1}
              } else {
                return item;
              }
            }
          )
      );
    }
    if (e.target.className.includes('plus')){
      setItems(items.map(
        item => {
          if (item.id === itemId){
            return {...item, quantity: item.quantity + 1}
          } else {
            return item;
          }
        }
      ));
    }
  }
  // if the quantity becomes 0, the item disappears
  const filteredItems = items.filter((item) => item.quantity > 0);
  // calculate total price
  const total = filteredItems.reduce((sum, item)=>{
    return sum + item.quantity * item.price;
  }, 0)
  
  const value = {
    filteredItems,
    handleQuantities,
    total
  };

  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}