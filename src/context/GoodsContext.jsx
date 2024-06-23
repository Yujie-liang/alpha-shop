import { createContext } from 'react';
import { useState } from 'react';
export const GoodsContext = createContext();
export function GoodsProvider({ children }) {
  const [goods, setGoods] = useState(null);//initialItems

  function handleQuantities(e, itemId) {
    if (e.target.className.includes('minus') && goods.find((item) => item.id === itemId).quantity > 0) {
      setGoods(goods.map(
        item => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item;
          }
        }
      )
      );
    }
    if (e.target.className.includes('plus')) {
      setGoods(goods.map(
        item => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item;
          }
        }
      ));
    }
  }
  // if the quantity becomes 0, the item disappears
  const filteredItems = goods.filter((item) => item.quantity > 0);
  // calculate total price
  const total = filteredItems.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0)

  const value = {
    filteredItems,
    handleQuantities,
    total
  };

  return (
    <GoodsContext.Provider value={value}>
      {children}
    </GoodsContext.Provider>
  );
}