import React, { useCallback, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

//animation
import Animated from "react-native-reanimated";
import { rowLayoutAnimation } from "../animation/entering/rowLayoutAnimations";

//component
import Card from "../components/Card";
import { useFavorites } from "../hooks/useFavorites";

//hooks
import useSerieList from "../hooks/useSerieList";

const SeriePage = ({ navigation }) => {

    const { serieList } = useSerieList();

    const { addFavorite, isFavorite } = useFavorites();

    const renderItem = useCallback(({ item, index }) => {
        //console.log(item);

        return (
            <Animated.View
                entering={rowLayoutAnimation} >
                <Card
                    image={item.poster_path}
                    title={item.original_name}
                    releaseDate={item.first_air_date}
                    vote={item.vote_average}
                    onPress={() => navigation.navigate('SerieDetail', { data: item, id: item.id })}
                    onTapHeart={() => addFavorite(item)}
                    selected={isFavorite(item.id)}
                />
            </Animated.View>
        );
    }, [isFavorite, addFavorite]);

    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={serieList}
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

export default SeriePage;