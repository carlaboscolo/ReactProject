import React from "react";

//component
import DetailCard from "../components/DetailCard";

//hooks
import { useFavorites } from "../hooks/useFavorites";

const MovieDetail = ({ route, navigation }) => {

    const { data } = route.params;

    const { addFavorite, isFavorite } = useFavorites();

    return (
        <DetailCard
            image={data.poster_path}
            title={data.original_title}
            releaseDate={data.release_date}
            vote={data.vote_average}
            description={data.overview}
            onTapHeart={() => addFavorite(data)}
            selected={isFavorite(data.id)}
        />
    );
};

export default MovieDetail;