import React, { useCallback } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView } from "react-native";
import { Searchbar } from 'react-native-paper';

//component
import VerticalCard from "../components/VerticalCard";

//animation
import Animated from "react-native-reanimated";
import { columnLayoutAnimation } from "../animation/entering/columnLayoutAnimations";

//hooks
import { useSearch } from "../hooks/useSearch";

const SearchPage = ({ navigation }) => {

   const {searchQuery, onChangeSearch, filteredList, filteredListMovie} = useSearch();

    const renderItemMovie = useCallback(({ item }) => {
        // console.log(item);

        return (
            <Animated.View
                entering={columnLayoutAnimation} >
            <VerticalCard
                image={item.poster_path}
                title={item.original_title}
                onPress={() => navigation.navigate('MovieDetailSearch', { data: item })}
            />
            </Animated.View>
        );
    }, []);

    const renderItemSerie = useCallback(({ item }) => {
        // console.log(item);

        return (
            <Animated.View
                entering={columnLayoutAnimation} >
            <VerticalCard
                image={item.poster_path}
                title={item.original_name}
                onPress={() => navigation.navigate('SerieDetailSearch', { data: item, id: item.id })}
            />
            </Animated.View>
        );
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.searchContainer}>
                    <Searchbar
                        placeholder="Cosa stai cercando?"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <ScrollView
                    contentContainerStyle={styles.scroll}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}  >
                    <Text style={styles.title} > Top Film </Text>
                    <Animated.FlatList
                        horizontal={true}
                        data={filteredList.movieTopList}
                        renderItem={renderItemMovie}
                    />
                    <Text style={styles.title} > Popular Film </Text>
                    <Animated.FlatList
                        horizontal={true}
                        data={filteredList.movieList}
                        renderItem={renderItemMovie}
                    />
                    <Text style={styles.title} > Top Serie TV </Text>
                    <Animated.FlatList
                        horizontal={true}
                        data={filteredListMovie.serieTopList}
                        renderItem={renderItemSerie}
                    />
                    <Text style={styles.title} > Popular Serie TV </Text>
                    <Animated.FlatList
                        horizontal={true}
                        data={filteredListMovie.serieList}
                        renderItem={renderItemSerie}
                    />
                    <View style={styles.bottomContainer} />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)',
    },
    searchContainer: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
    },
    title: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 10,
    },
    scroll: {
        flexGrow: 1,
    },
    bottomContainer: {
        marginBottom: 80,
    }
});

export default SearchPage;