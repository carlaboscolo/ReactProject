import React, { useCallback } from "react";
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Animated from "react-native-reanimated";
import { rowLayoutAnimation } from "../animation/entering/rowLayoutAnimations";

//component
import Card from "../components/Card";

//hooks
import useMovieList from "../hooks/useMovieList";
import { useFavoritesMovie } from "../hooks/useFavoritesMovie";

const MoviePage = ({ navigation }) => {

    const { movieList } = useMovieList();
    const { addFavoriteMovie, isFavoriteMovie } = useFavoritesMovie();

    const renderItem = useCallback(({ item }) => {
        // console.log(item);

        return (
            <Animated.View
                entering={rowLayoutAnimation} >
                <Card
                    image={item.poster_path}
                    title={item.original_title}
                    releaseDate={item.release_date}
                    vote={item.vote_average}
                    onPress={() => navigation.navigate('MovieDetail', { data: item })}
                    onTapHeart={() => addFavoriteMovie(item)}
                    selected={isFavoriteMovie(item.id)}
                />
            </Animated.View>
        );
    }, [isFavoriteMovie, addFavoriteMovie]);

    return (
        <View style={styles.container}>
            <Animated.FlatList
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