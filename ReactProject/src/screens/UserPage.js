import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

//component
import VerticalCard from "../components/VerticalCard";
import { useFavorites } from "../hooks/useFavorites";

//hooks
import useSerieList from "../hooks/useSerieList";

const UserPage = () => {
    const { favorites, getFavorites } = useFavorites();

    useFocusEffect(() => {
        getFavorites();
    });
    

    const renderItemFavorite =  useCallback(({ item }) => {
     
       return (
                <VerticalCard
                    image={item.poster_path}
                    title={item.original_name}
                   // onPress={() => navigation.navigate('SerieDetailSearch', { data: item, id: item.id })}
                />
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
                <FlatList
                    horizontal={true}
                    data={favorites}
                    renderItem={renderItemFavorite}
                />
                <Text style={styles.title} > Film </Text>
                <FlatList
                    horizontal={true}
                    data={favorites}
                    renderItem={renderItemFavorite}
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