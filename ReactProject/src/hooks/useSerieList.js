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
    const [isFavorite, setIsFavorite] = useState([]);
   
    useEffect(() => {
        getSeriePopular().then(setSerieList);
        getSerieTopRated().then(setSerieTopList);
    }, []);

    useEffect(() => {
       // console.log(serieList);
     }, [serieList]);

     useEffect(() => {
        console.log(isFavorite);
      }, [isFavorite]);

     const tappedHeart = useCallback((item, index) => {

         let newArr = [...serieList];
         newArr[index].selected = !newArr[index].selected;
         //console.log(newArr[index].selected);
         setSerieList(newArr);

        console.log(item.id + " selected " + item.selected);
        
        let favoriteList = [...isFavorite];

        if(item.selected === false){
           console.log("tolto dai preferiti");
           const ind = favoriteList.indexOf(item.id !== favoriteList.id);
           favoriteList.splice(ind, 1);
           setIsFavorite(favoriteList);
        }else{
            console.log("aggiunto ai preferiti");
            favoriteList.push({id : item.id, selected : true });
            setIsFavorite(favoriteList);
        }


      /*   let favoriteList = [...isFavorite];

        if(serieList.find(serie => serie.selected === true)){
            favoriteList.push({id : item.id, selected : true });
            setIsFavorite(favoriteList);
        }else if(serieList.find(serie => serie.selected === false)){
           setIsFavorite({...isFavorite, selected : false});
           const ind = favoriteList.indexOf(item.id === favoriteList.id);
           console.log(ind);
           favoriteList.splice(ind, 1);
           setIsFavorite(favoriteList);
        } */

      //  console.log(isFavorite);

     }, [serieList, isFavorite]);

     


    return {
        serieList,
        serieTopList,
        tappedHeart,
        isFavorite
    }
};

export default useSerieList;