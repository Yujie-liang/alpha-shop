import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';
import { getProducts } from '../api/products';

export const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);
export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ "size": 'Size', "color": 'Color', "category": 'Category', "search": '' });

  // fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    }
    fetchProducts();
  }, [])

  // filter products
  useEffect(() => {
    let filteredProducts = products;
    const categories = ['t-shirt', 'dress', 'skirt'];
    // filter size
    if (filters.size !== 'Size') {
      filteredProducts = filteredProducts.filter(product => product.size.includes(filters.size));
    }
    // filter color
    if (filters.color !== 'Color') {
      filteredProducts = filteredProducts.filter(product => product.color.includes(filters.color.toLowerCase()));
    }
    // filter category
    if (filters.category !== 'Category' && filters.category !== 'Others') {
      filteredProducts = filteredProducts.filter(product => product.category.includes(filters.category.toLowerCase()));
    } else if (filters.category === 'Others') {
      filteredProducts = filteredProducts.filter(product =>
        !categories.some(category => product.category.includes(category)));
    }
    // search product name
    if (filters.search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(filters.search.trim().toLowerCase())
      )
    }
    setFilteredProducts(filteredProducts);
  }, [filters, products]);

  

  const value = {
    products,
    filteredProducts,
    setFilters,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}