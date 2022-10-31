import React from "react";

//component
import DetailCard from "../components/DetailCard";

const SerieDetail = ({ route, navigation }) => {

   const { data } = route.params;

   return (
     <DetailCard
     image={data.poster_path}
     title={data.original_name}
     releaseDate={data.first_air_date}
     vote={data.vote_average}
     description={data.overview}
     />
   );
};

export default SerieDetail;

