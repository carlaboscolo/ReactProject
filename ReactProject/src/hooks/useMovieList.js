import { useEffect, useState } from "react";

const API_KEY = "a7c4848fcfb89f8bef0757f282d0a463";

const getMoviePopular = async () => {
    const apiKey = "a7c4848fcfb89f8bef0757f282d0a463";
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=it&page=1")
    const data = await response.json();
    return data.results;
}

const getMovieTopRated = async () => {
    const apiKey = "a7c4848fcfb89f8bef0757f282d0a463";
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY + "&language=it&page=1")
    const data = await response.json();
    return data.results;
}

const useMovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const [movieTopList, setMovieTopList] = useState([]);

    useEffect(() => {
        getMoviePopular().then(setMovieList);
        getMovieTopRated().then(setMovieTopList);
    }, []);

    return {
        movieList,
        movieTopList,
    }
};

export default useMovieList;