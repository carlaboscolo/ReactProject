import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react"

export const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [movieFavorites, setMovieFavorites] = useState([]);

    const getFavorites = useCallback(async () => {
        const favorites = await AsyncStorage.getItem('favorites') ?? '[]';
        setFavorites(JSON.parse(favorites));
    }, []);

    useEffect(() => {
       getFavorites();
    }, [getFavorites]);

    const saveFavorites = useCallback(async (storageKey, serie) => {
        const storageFavorite = await AsyncStorage.getItem(storageKey) ?? '[]';
        const localFavorites = JSON.parse(storageFavorite);
        const index = localFavorites.findIndex(sFavorite => sFavorite.id === serie.id);
        if (index !== -1) {
            const newArray = [...localFavorites];
            newArray.splice(index, 1);
            await AsyncStorage.setItem(storageKey, JSON.stringify(newArray));
            setFavorites(newArray);
            return;
        }
        await AsyncStorage.setItem(storageKey, JSON.stringify([...favorites, serie]));

        setFavorites(prev => ([...prev, serie]));
       
    })

    const addFavorite  = useCallback(async (serie) => {
       saveFavorites('favorites', serie);
    }, [favorites]);

    const isFavorite = useCallback((id) => favorites.findIndex(fav => fav.id === id) !== -1, [favorites]);

    return {
        favorites,
        addFavorite,
        isFavorite,
        getFavorites,
    }
}