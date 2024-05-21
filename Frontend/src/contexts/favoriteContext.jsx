import { createContext, useEffect, useState } from 'react';

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Lấy danh sách yêu thích từ localStorage khi component mount
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);

    // Hàm để cập nhật favorites từ localStorage
    const updateFavorites = () => {
      const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(updatedFavorites);
    };

    // Lắng nghe sự kiện thay đổi localStorage
    window.addEventListener('storage', updateFavorites);

    // Dọn dẹp listener khi component unmount
    return () => {
      window.removeEventListener('storage', updateFavorites);
    };
  }, []);

  const addFavorite = product => {
    const updatedFavorites = [...favorites, product];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = productId => {
    const updatedFavorites = favorites.filter(id => id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>{children}</FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
