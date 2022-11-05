import React, { useState, useCallback, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView } from "react-native";
import { Searchbar } from 'react-native-paper'; 

//component
import VerticalCard from "../components/VerticalCard";

//hooks
import useMovieList from "../hooks/useMovieList";
import useSerieList from "../hooks/useSerieList";

const getMovieTopRated = async () => {
    const apiKey = "a7c4848fcfb89f8bef0757f282d0a463";
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + apiKey + "&language=en-US&page=1")
    const data = await response.json();
    return data.results;
}

const getSerieTopRated = async () => {
    const apiKey = "a7c4848fcfb89f8bef0757f282d0a463";
    const response = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=" + apiKey + "&language=en-US&page=1")
    const data = await response.json();
    return data.results;
}

const SearchPage = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [movieTopList, setMovieTopList] = useState([]);
    const [serieTopList, setSerieTopList] = useState([]);
    const { movieList } = useMovieList();
    const { serieList } = useSerieList();

    useEffect(() => {
        getMovieTopRated().then(setMovieTopList);
        getSerieTopRated().then(setSerieTopList);
    }, []);

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        // console.warn(query);
    };

    const filteredMovieTopList = useMemo(() => {
        if (!searchQuery) {
            return movieTopList;
        }

        const search = movieTopList.filter(item => item.original_title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        //console.log(search);

        return search;
    }, [movieTopList, searchQuery]);

    const filteredMovieList = useMemo(() => {
        if (!searchQuery) {
            return movieList;
        }

        const search = movieList.filter(item => item.original_title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        //console.log(search);

        return search;
    }, [movieList, searchQuery]);

    const filteredSerieTopList = useMemo(() => {
        if (!searchQuery) {
            return serieTopList;
        }

        const search = serieTopList.filter(item => item.original_name.toLowerCase().startsWith(searchQuery.toLowerCase()));
        // console.log(search);

        return search;
    }, [serieTopList, searchQuery]);

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
                onPress={() => navigation.navigate('SerieDetailSearch', { data: item })}
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
                <View style = {styles.bottomContainer}>

                </View>
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
        marginTop : 20,
        marginLeft : 10,
    },
    scroll: {
        flexGrow: 1,
    },
    bottomContainer : {
        marginBottom : 80,
    }
});

export default SearchPage;