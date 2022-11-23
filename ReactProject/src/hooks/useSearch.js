import { useState, useEffect, useMemo } from "react";

//hooks
import useMovieList from "../hooks/useMovieList";
import useSerieList from "../hooks/useSerieList";

export const useSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { movieList, movieTopList } = useMovieList();
    const { serieList, serieTopList } = useSerieList();

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        // console.warn(query);
    };

    const filteredList = useMemo(() => {
        if (!searchQuery || searchQuery.length < 3) {
            return {
                movieList,
                movieTopList,
            }
        }
        return {
            movieTopList: movieTopList.filter(item => item.original_title.toLowerCase().includes(searchQuery.toLowerCase())),
            movieList: movieList.filter(item => item.original_title.toLowerCase().includes(searchQuery.toLowerCase())),
        }
    }, [movieList, movieTopList, searchQuery]);

    
    const filteredListMovie = useMemo(() => {
        if (!searchQuery || searchQuery.length < 3) {
            return {
                serieList,
                serieTopList,
            }
        }

        return{
           serieTopList : serieTopList.filter(item => item.original_name.toLowerCase().includes(searchQuery.toLowerCase())),
           serieList : serieList.filter(item => item.original_name.toLowerCase().includes(searchQuery.toLowerCase())),
        }
    }, [serieList, serieTopList, searchQuery]);

    return{
        searchQuery, 
        onChangeSearch,
        filteredList,
        filteredListMovie,
    }

}
