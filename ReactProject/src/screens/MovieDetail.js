import React from "react";

//component
import DetailCard from "../components/DetailCard";

//hooks
import { useFavoritesMovie } from "../hooks/useFavoritesMovie";

const MovieDetail = ({ route }) => {

    const { data } = route.params;
    const { addFavoriteMovie, isFavoriteMovie } = useFavoritesMovie();

    return (
        <DetailCard
            image={data.poster_path}
            title={data.original_title}
            releaseDate={data.release_date}
            vote={data.vote_average}
            description={data.overview}
            onTapHeart={() => addFavoriteMovie(data)}
            selected={isFavoriteMovie(data.id)}
        />
    );
};

export default MovieDetail;