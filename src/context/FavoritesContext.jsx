import { createContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { fetchFavorites, updateFavorites } from '../api/favorites';


const FavoritesContext = createContext();


const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // id
  const [favoritesProducts, setFavoritesProducts] = useState([]); // product
  const navigate = useNavigate();
  const { currentMember, isAuthenticated } = useAuth();

  useEffect(() =>{
    const fetchData = async () => {
      if (isAuthenticated) {
        await fetchFavorites(currentMember, setFavorites, setFavoritesProducts);
      }
    };
    fetchData();
  }, [isAuthenticated, currentMember]);

  const toggleFavorite = async (itemId) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    let updatedFavorites;
    if (favorites.includes(itemId)) {
      updatedFavorites = favorites.filter(id => id !== itemId);
    } else {
      updatedFavorites = [...favorites, itemId];
    }
    setFavorites(updatedFavorites);
    await updateFavorites(currentMember, updatedFavorites, setFavoritesProducts, favoritesProducts);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, favoritesProducts, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };