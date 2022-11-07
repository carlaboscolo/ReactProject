import React, { useCallback, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

//component
import Card from "../components/Card";

//hooks
import useSerieList from "../hooks/useSerieList";

const SeriePage = ({ navigation }) => {

    const { serieList, tappedHeart } = useSerieList();

    const renderItem = useCallback(({ item, index }) => {
        //console.log(item);

        return (
            <Card
                image={item.poster_path}
                title={item.original_name}
                releaseDate={item.first_air_date}
                vote={item.vote_average}
                onPress={() => navigation.navigate('SerieDetail', { data: item, id: item.id })}
                onTapHeart={() => tappedHeart(index)}
                selected={item.selected}
            />
        );
    }, [serieList]);

    return (
        <View style={styles.container}>
            <FlatList
                data={serieList}
                renderItem={renderItem}
                extraData={(item) => item.selected}
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