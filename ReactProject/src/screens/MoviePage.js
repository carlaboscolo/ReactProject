import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';


//component
import Card from "../components/Card";


const getMoviePopular = async () => {
    const apiKey = "a7c4848fcfb89f8bef0757f282d0a463";
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=en-US&page=1")
    const data = await response.json();
    return data.results;
}

const MoviePage = ({ navigation }) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        getMoviePopular().then(setList);
    }, []);


    const renderItem = useCallback(({ item }) => {
        // console.log(item);

        return (
            <Card
                image={item.poster_path}
                title={item.original_title}
                releaseDate={item.release_date}
                vote={item.vote_average}
                onPress={() => navigation.navigate('MovieDetail', { id: item.id })}
            />
        );
    }, []);


    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)',
    },


});

export default MoviePage;