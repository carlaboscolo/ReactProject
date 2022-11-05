import React, { useState, useCallback, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native';

//component
import Card from "../components/Card";



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
    const [movieList, setMovieList] = useState([]);
    const [serieList, setSerieList] = useState([]);

    useEffect(() => {
        getMovieTopRated().then(setMovieList);
        getSerieTopRated().then(setSerieList);
    }, []);

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        // console.warn(query);
    };

    const filteredMovieList = useMemo(() => {
        if (!searchQuery) {
            return movieList;
        }

        const search = movieList.filter(item => item.original_title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        //console.log(search);


        return search;
    }, [movieList, searchQuery]);

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
            <Card
                image={item.poster_path}
                title={item.original_title}
                releaseDate={item.release_date}
                vote={item.vote_average}
                onPress={() => navigation.navigate('MovieDetailSearch', { data: item })}
            />
        );
    }, []);

    const renderItemSerie = useCallback(({ item }) => {
        // console.log(item);

        return (
            <Card
                image={item.poster_path}
                title={item.original_name}
                releaseDate={item.first_air_date}
                vote={item.vote_average}
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
                <Text style={styles.title} > Film </Text>
                <FlatList
                    horizontal={true}
                    data={filteredMovieList}
                    renderItem={renderItemMovie}
                />
                <Text style={styles.title} > Serie TV </Text>
                <FlatList
                    horizontal={true}
                    data={filteredSerieList}
                    renderItem={renderItemSerie}
                />
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
    }

});

export default SearchPage;