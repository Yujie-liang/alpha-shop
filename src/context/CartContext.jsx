import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useProducts } from './ProductsContext';
import axios from 'axios';

const baseUrl = 'http://localhost:3004';
  
export const CartContext = createContext();
export function CartProvider({children}){
  const { currentMember, isAuthenticated } = useAuth();
  const { products } = useProducts();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      if (isAuthenticated){
        try {
          const response = await axios.get(`${baseUrl}/users?username=${currentMember.name}`);
          setCart(response.data[0].cart);
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      }
    };

    fetchCart();
  }, [isAuthenticated, currentMember]);

  async function handleQuantities(e, productId){
      try {
        const userResponse = await axios.get(`${baseUrl}/users?username=${currentMember.name}`);
        const user = userResponse.data[0];
        const existingProduct = cart.find(item => item.productId === productId);
        let updatedCart;

        if (e.target.className.includes('minus') && existingProduct.quantity > 1) {
          updatedCart = cart.map(item =>
            item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else if (e.target.className.includes('minus') && existingProduct.quantity === 1) {
          updatedCart = cart.filter(item => item.productId !== productId);
        } else if (e.target.className.includes('plus')) {
          updatedCart = cart.map(item =>
            item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
          );
        }

        await axios.patch(`${baseUrl}/users/${user.id}`, { cart: updatedCart });
        setCart(updatedCart);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
  }

  // if the quantity becomes 0, the item disappears
  // const filteredItems = cart ? cart.filter((item) => item.quantity > 0) : [];
  // calculate total price
  const total = cart.reduce((sum, item)=>{
    const product = products.find(p => p.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
  }, 0)


  // 從product list加到購物車
  const addToCart = async (productId, quantity) => {
    if (isAuthenticated) {
      try {
        const userResponse = await axios.get(`${baseUrl}/users?username=${currentMember.name}`);
        const user = userResponse.data[0];
        const existingProduct = cart.find(item => item.productId === productId);
        let updatedCart;
        if (existingProduct) {
          updatedCart = cart.map(item =>
            item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
          );
        } else {
          updatedCart = [...cart, { productId, quantity }];
        }
        await axios.patch(`${baseUrl}/users/${user.id}`, { cart: updatedCart });
        setCart(updatedCart);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  };

  const removeFromCart = async (productId) => {
    if (isAuthenticated) {
      try {
        const userResponse = await axios.get(`${baseUrl}/users?username=${currentMember.name}`);
        const user = userResponse.data[0];
        const updatedCart = cart.filter((item) => item.productId !== productId);

        await axios.patch(`${baseUrl}/users/${user.id}`, { cart: updatedCart });
        setCart(updatedCart);
      } catch (error) {
        console.error('Error removing from cart:', error);
      }
    }
  };

  const getProductById = (productId) => {
    return products.find(product => product.id === productId);
  };

  return(
    <CartContext.Provider value={{
      // filteredItems,
      cart,
      handleQuantities,
      total,
      addToCart,
      removeFromCart,
      getProductById}}>
      {children}
    </CartContext.Provider>
  );
}