import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

//component
import VerticalCard from "../components/VerticalCard";

//hooks
import { useFavoritesMovie } from "../hooks/useFavoritesMovie";
import { useFavorites } from "../hooks/useFavorites";

//animation
import Animated from "react-native-reanimated";
import { rowLayoutAnimation } from "../animation/entering/rowLayoutAnimations";

const UserPage = ({ navigation }) => {
    const { favorites, getFavorites } = useFavorites();
    const { favoritesMovie, getFavoritesMovie } = useFavoritesMovie();

    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) {
            return;
        }
        getFavorites();
        getFavoritesMovie();
    }, [isFocused]);

    const renderItemFavorite = useCallback(({ item }) => {

        return (
            <Animated.View
            entering={rowLayoutAnimation} > 
            <VerticalCard
                image={item.poster_path}
                title={item.original_name}
                onPress={() => navigation.navigate('SerieDetailUser', { data: item, id: item.id })}
            />
             </Animated.View>
        );

    }, []);

   const renderMovieFavorite = useCallback(({ item }) => {

        return (
             <Animated.View
            entering={rowLayoutAnimation} > 
            <VerticalCard
                image={item.poster_path}
                title={item.original_title}
                onPress={() => navigation.navigate('MovieDetailUser', { data: item, id: item.id })}
            />
             </Animated.View>
        );

    }, []); 


    return (
        <View style={styles.container}>
            <Text style={styles.title} > I tuoi preferiti </Text>
            <ScrollView
                contentContainerStyle={styles.scroll}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}  >
                <Text style={styles.title} > Serie tv </Text>
                <Animated.FlatList
                    horizontal={true}
                    data={favorites}
                    renderItem={renderItemFavorite}
                />
                <Text style={styles.title} > Film </Text>
                <Animated.FlatList
                    horizontal={true}
                    data={favoritesMovie}
                    renderItem={renderMovieFavorite}
                />
                <View style={styles.bottomContainer} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        marginBottom: 80,
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
});

export default UserPage;