import React, { useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

//component
import VerticalCard from "../components/VerticalCard";

//hooks
import useSerieList from "../hooks/useSerieList";

const UserPage = () => {
    const { serieList, isFavorite } = useSerieList();

    const renderItemFavorite =  useCallback(({ item }) => {
         
        if (item.selected === true) {
            console.log("SELEZIONATO " , item.selected, item.original_name);
      
           return (
                <VerticalCard
                    image={item.poster_path}
                    title={item.original_name}
                    onPress={() => navigation.navigate('SerieDetailSearch', { data: item, id: item.id })}
                />
            );
        }else{

        }

    }, [isFavorite]);

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scroll}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}  >
                <Text style={styles.title} > Top Serie TV </Text>
                <FlatList
                    horizontal={true}
                    data={isFavorite}
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