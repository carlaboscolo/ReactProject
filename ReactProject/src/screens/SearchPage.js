import React, { useState, useCallback, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView } from "react-native";
import { Searchbar } from 'react-native-paper';

//component
import VerticalCard from "../components/VerticalCard";

//hooks
import useMovieList from "../hooks/useMovieList";
import useSerieList from "../hooks/useSerieList";

const SearchPage = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const { movieList, movieTopList } = useMovieList();
    const { serieList, serieTopList } = useSerieList();

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        // console.warn(query);
    };

    //movie top rated
     const filteredMovieTopList = useMemo(() => {
        if (!searchQuery) {
            return movieTopList;
        }

        const search =  movieTopList.filter(item => item.original_title.toLowerCase().startsWith(searchQuery.toLowerCase()));

        return search;
    }, [movieTopList, searchQuery]); 

    //movie popular
    const filteredMovieList = useMemo((key) => {
        if (!searchQuery) {
           return movieList;
        }

        const search = movieList.filter(item => item.original_title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        //console.log(search);

        return search;
    }, [searchQuery, movieList, movieTopList]); 

    //serie top rated
    const filteredSerieTopList = useMemo(() => {
        if (!searchQuery) {
            return serieTopList;
        }

        const search = serieTopList.filter(item => item.original_name.toLowerCase().startsWith(searchQuery.toLowerCase()));
        // console.log(search);

        return search;
    }, [serieTopList, searchQuery]);

    //serie popular
    const filteredSerieList = useMemo(() => {
        if (!searchQuery) {
            return serieList;
        }

        const search = serieList.filter(item => item.original_name.toLowerCase().startsWith(searchQuery.toLowerCase()));
        // console.log(search);

        return search;
    }, [serieList, searchQuery]);

    const renderItemMovie = useCallback(({ item }) => {
        // console.log(item);

        return (
            <VerticalCard
                image={item.poster_path}
                title={item.original_title}
                onPress={() => navigation.navigate('MovieDetailSearch', { data: item })}
            />
        );
    }, []);

    const renderItemSerie = useCallback(({ item }) => {
        // console.log(item);

        return (
            <VerticalCard
                image={item.poster_path}
                title={item.original_name}
                onPress={() => navigation.navigate('SerieDetailSearch', { data: item, id: item.id })}
            />
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
                    <FlatList
                        horizontal={true}
                        data={filteredMovieTopList}
                        renderItem={renderItemMovie}
                    />
                    <Text style={styles.title} > Popular Film </Text>
                    <FlatList
                        horizontal={true}
                        data={filteredMovieList}
                        renderItem={renderItemMovie}
                    />
                    <Text style={styles.title} > Top Serie TV </Text>
                    <FlatList
                        horizontal={true}
                        data={filteredSerieTopList}
                        renderItem={renderItemSerie}
                    />
                    <Text style={styles.title} > Popular Serie TV </Text>
                    <FlatList
                        horizontal={true}
                        data={filteredSerieList}
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