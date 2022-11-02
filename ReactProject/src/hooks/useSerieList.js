import { useEffect, useState } from "react"

const getSeriePopular = async () => {
    const apiKey = "a7c4848fcfb89f8bef0757f282d0a463";
    const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey + "&language=en-US&page=1")
    const data = await response.json();
    return data.results;
}

const useSerieList = () => {

    const [serieList, setSerieList] = useState([]);

    useEffect(() => {
        getSeriePopular().then(setSerieList);
    }, []);

    return {
        serieList,
    }
};

export default useSerieList;