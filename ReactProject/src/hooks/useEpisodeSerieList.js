import { useEffect, useState } from "react";


const API_KEY = "a7c4848fcfb89f8bef0757f282d0a463";

const getEpisode = async (id) => {
    const response = await fetch("https://api.themoviedb.org/3/tv/" + id + "/season/{season_number}?api_key=" + API_KEY);
    const data = await response.json();
    return data.episodes;
}


const useEpisodeSerieList = (id) => {

    const [episodeList, setEpisodeList] = useState([]);

    useEffect(() => {
        getEpisode(id).then(setEpisodeList);
    }, []);


    return {
        episodeList,
    }
};

export default useEpisodeSerieList;