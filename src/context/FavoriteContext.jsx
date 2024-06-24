import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const useFavoriteItems = (currentMember) => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    if (currentMember) {
      const savedFavorites = JSON.parse(localStorage.getItem(`favorites_${currentMember.id}`)) || [];
      setFavorites(savedFavorites);
    }
  }, [currentMember]);

  const toggleFavorite = (itemId) => {
    if (!currentMember) navigate('/login');

    let updatedFavorites;
    if (favorites.includes(itemId)) { //if exists, remove
      updatedFavorites = favorites.filter(id => id !== itemId);
    } else { // if not exist, add
      updatedFavorites = [...favorites, itemId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem(`favorites_${currentMember.id}`, JSON.stringify(updatedFavorites));
  };

  return [favorites, toggleFavorite];
};

export default useFavoriteItems;
