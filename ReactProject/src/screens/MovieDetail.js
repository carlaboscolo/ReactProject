import React from "react";


//component
import DetailCard from "../components/DetailCard";

const MovieDetail = ({ route, navigation }) => {

    const { data } = route.params;

    return (
        <DetailCard
            image={data.poster_path}
            title={data.original_title}
            releaseDate={data.release_date}
            vote={data.vote_average}
            description={data.overview}
        />
    );
};



export default MovieDetail;