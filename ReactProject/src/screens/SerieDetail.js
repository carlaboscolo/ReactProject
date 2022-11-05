import React, { useCallback, useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text, FlatList } from "react-native";

//component
import DetailCard from "../components/DetailCard";
import VerticalCard from "../components/VerticalCard";

//hooks

const API_KEY = "a7c4848fcfb89f8bef0757f282d0a463";


const getEpisode = async (id) => {
  const response = await fetch("https://api.themoviedb.org/3/tv/" + id + "/season/{season_number}?api_key=" + API_KEY);
  const data = await response.json();
  return data.episodes;
  // setData(data.episodes);
}


const SerieDetail = ({ route, navigation }) => {

  const { data } = route.params;
  const { id } = route.params;
  //console.log(id);

  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    getEpisode(id).then(setEpisodeList);
  }, []);

  const renderItemSerie = useCallback(({ item }) => {
    // console.log(item); 

    return (
      <VerticalCard
        image={item.still_path}
        title={item.name}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}  >
        <DetailCard
          image={data.poster_path}
          title={data.original_name}
          releaseDate={data.first_air_date}
          vote={data.vote_average}
          description={data.overview}
        />
        <Text style={styles.title} > Episode </Text>
        <FlatList
          horizontal={true}
          data={episodeList}
          renderItem={renderItemSerie}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(24,24,24)',
  },
  scroll: {
    flexGrow: 1,
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
});

export default SerieDetail;

