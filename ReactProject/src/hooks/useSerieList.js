import { useEffect, useState } from "react"

const API_KEY = "a7c4848fcfb89f8bef0757f282d0a463";

const getSeriePopular = async () => {
    const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + API_KEY + "&language=it&page=1")
    const data = await response.json();
    return data.results;
}

const getSerieTopRated = async () => {
    const response = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=" + API_KEY + "&language=it&page=1")
    const data = await response.json();
    return data.results;
}

const useSerieList = () => {

    const [serieList, setSerieList] = useState([]);
    const [serieTopList, setSerieTopList] = useState([]);
   
    useEffect(() => {
        getSeriePopular().then(setSerieList);
        getSerieTopRated().then(setSerieTopList);
    }, []);

    return {
        serieList,
        serieTopList,
    }
};

export default useSerieList;