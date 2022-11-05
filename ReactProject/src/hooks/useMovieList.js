import { useEffect, useState } from "react";

const getMoviePopular = async () => {
    const apiKey = "a7c4848fcfb89f8bef0757f282d0a463";
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=en-US&page=1")
    const data = await response.json();
    return data.results;
}

const useMovieList = () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMoviePopular().then(setMovieList);
    }, []);

    return {
        movieList,
    }
};


export default useMovieList;