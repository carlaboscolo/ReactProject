import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react"

export const useFavoritesMovie = () => {
    const [favoritesMovie, setFavoritesMovie] = useState([]);

    const getFavoritesMovie = useCallback(async () => {
        const storageFavoritesMovie = await AsyncStorage.getItem('favoritesMovie') ?? '[]';
        setFavoritesMovie(JSON.parse(storageFavoritesMovie));
    }, []);

    useEffect(() => {
         getFavoritesMovie();
    }, [getFavoritesMovie]);

    const saveFavorites = useCallback(async (storageKey, movie) => {
        const storageFavorite = await AsyncStorage.getItem(storageKey) ?? '[]';
        const localFavorites = JSON.parse(storageFavorite);
        const index = localFavorites.findIndex(sFavorite => sFavorite.id === movie.id);
        if (index !== -1) {
            const newArray = [...localFavorites];
            newArray.splice(index, 1);
            await AsyncStorage.setItem(storageKey, JSON.stringify(newArray));
            setFavoritesMovie(newArray);
            return;
        }
        await AsyncStorage.setItem(storageKey, JSON.stringify([...favoritesMovie, movie]));

        setFavoritesMovie(prev => ([...prev, movie]));  
    }, [favoritesMovie]);

    const addFavoriteMovie  = useCallback(async (movie) => {
       saveFavorites('favoritesMovie', movie);
    }, [saveFavorites]);

    const isFavoriteMovie = useCallback((id) => favoritesMovie.findIndex(fav => fav.id === id) !== -1, [favoritesMovie]);

    return {
        favoritesMovie,
        addFavoriteMovie,
        isFavoriteMovie,
        getFavoritesMovie,
    }
}