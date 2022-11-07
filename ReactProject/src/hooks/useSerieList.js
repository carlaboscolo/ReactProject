import { useEffect, useState, useCallback } from "react";

const API_KEY = "a7c4848fcfb89f8bef0757f282d0a463";

const getSeriePopular = async () => {
    const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + API_KEY + "&language=it&page=1")
    const data = await response.json();
    return data.results.map(v => ({...v, selected: false}));
}

const getSerieTopRated = async () => {
    const response = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=" + API_KEY + "&language=it&page=1")
    const data = await response.json();
    return data.results.map(v => ({...v, selected: false}));
}

const useSerieList = () => {

    const [serieList, setSerieList] = useState([]);
    const [serieTopList, setSerieTopList] = useState([]);
    const [isFavorite, setIsFavorite] = useState();

    useEffect(() => {
        getSeriePopular().then(setSerieList);
        getSerieTopRated().then(setSerieTopList);
    }, []);

    useEffect(() => {
        // console.log(serieList);
     }, [serieList]);

     useEffect(() => {
        setIsFavorite(serieList);
        console.log(isFavorite);
     }, []);
 
     const tappedHeart = useCallback((index) => {
         let newArr = [...serieList];
         newArr[index].selected = !newArr[index].selected;
         //console.log( newArr[index].selected);
         setSerieList(newArr);
     }, [serieList]);

    return {
        serieList,
        serieTopList,
        tappedHeart,
    }
};

export default useSerieList;