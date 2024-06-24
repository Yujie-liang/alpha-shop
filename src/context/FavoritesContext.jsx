import { createContext, useState, useEffect, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { fetchFavorites, updateFavorites } from '../api/favorites';


const FavoritesContext = createContext();


const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // id
  const [favoritesProducts, setFavoritesProducts] = useState([]); // product
  const navigate = useNavigate();
  const { currentMember } = useAuth();

  useEffect(() =>{
    const fetchData = async () => {
    await fetchFavorites(currentMember, setFavorites, setFavoritesProducts);
    };
    if (currentMember) fetchData();
  }, [currentMember]);

  const toggleFavorite = async (itemId) => {
    if (!currentMember) {
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