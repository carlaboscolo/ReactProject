import React, {useCallback} from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

//component
import VerticalCard from "../components/VerticalCard";

//hooks
import useSerieList from "../hooks/useSerieList";

const UserPage = () => {
const { serieList } = useSerieList();

    const renderItemSerie = useCallback(({ item }) => {
        //console.log(item);

        if(item.selected == true){
            return (
            <VerticalCard
                image={item.poster_path}
                title={item.original_name}
                onPress={() => navigation.navigate('SerieDetailSearch', { data: item, id: item.id })}
            />
        );
        }else{
            //console.log("no data");
        }
        
    }, [serieList]);

    return (
        <View style={styles.container}>
            <ScrollView
                    contentContainerStyle={styles.scroll}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}  >
                    <Text style={styles.title} > Top Serie TV </Text>
                    <FlatList
                        horizontal={true}
                        data={serieList}
                        renderItem={renderItemSerie}
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
    }
});

export default UserPage;