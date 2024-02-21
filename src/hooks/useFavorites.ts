import {useEffect, useState} from 'react';
import {API_BASE} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface FavoriteItem {
  _id: string;
}

interface FavoritesHook {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (itemId: string) => void;
}

const useFavorites = (): FavoritesHook => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const fetchFavoritesFromStorage = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavoritesFromStorage();
  }, []);

  useEffect(() => {
    const fetchFavoritesFromServer = async () => {
      try {
        const response = await axios.get(`${API_BASE}/favorites/my`);
        setFavorites(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavoritesFromServer();
  }, []);

  const addToFavorites = async (id: FavoriteItem) => {
    try {
      const response = await axios.post(
        `${API_BASE}/favorites/add`,
        {id},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const updatedFavorites = [...favorites, response.data];
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavorites = async (id: string) => {
    try {
      await axios.post(`${API_BASE}/favorites/remove`, {id});

      const updatedFavorites = favorites.filter(item => item._id !== id);
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.log(error);
    }
  };

  return {favorites, addToFavorites, removeFromFavorites};
};

export default useFavorites;
