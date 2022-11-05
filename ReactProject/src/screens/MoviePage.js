import React, { useCallback } from "react";
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

//component
import Card from "../components/Card";

//hooks
import useMovieList from "../hooks/useMovieList";

const MoviePage = ({ navigation }) => {

    const { movieList } = useMovieList();

    const renderItem = useCallback(({ item }) => {
        // console.log(item);

        return (
            <Card
                image={item.poster_path}
                title={item.original_title}
                releaseDate={item.release_date}
                vote={item.vote_average}
                onPress={() => navigation.navigate('MovieDetail', { data: item })}
            />
        );
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={movieList}
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