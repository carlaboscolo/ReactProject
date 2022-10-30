import React, {useCallback, useEffect, useState} from "react";
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';


const getMoviePopular = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=a7c4848fcfb89f8bef0757f282d0a463&language=en-US&page=1')
    const data = await response.json();
    return data.results;
}

const Movie = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        getMoviePopular().then(setList);
    }, []);

    
    const renderItem = useCallback(({ item }) => {
        console.log(item);

        return (
            <View style={styles.rowContainer}>
            <View style={styles.innerContainer}>
                {/* immagine  */}
                <View style={styles.containerImage}>
                    <Image source={{ uri: "https://image.tmdb.org/t/p/w500/"+ item.poster_path}} style={styles.image} />
                </View>
                {/* testo  */}
                <View style={styles.containerText}>
                    <View style={{ flex: 1 }}>
                        {/* nome personaggio */}
                        <Text style={styles.name}>{item.original_title}</Text>
                        {/* specie personaggio */}
                        <Text style={styles.species}>{item.release_date}</Text>
                        {/*  città personaggio */}
                        <Text style={styles.location}>{item.vote_average}</Text>
                    </View>
                </View>
            </View>
        </View>
            );
        }, []);


 return(
      
       
         <View style = {styles.container}> 
          <FlatList 
                data={list}
                renderItem={renderItem} //viene richiamata la costante sopra
               />
            </View>     
              
 );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)', 
    },

    rowContainer: {
        height: 280,
        padding: 16,
    },
    innerContainer: {
        borderRadius: 10,
        height: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
    },
    containerImage: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    containerText: {
        flexDirection: 'row',
        padding: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: '800',
    },
    species: { fontSize: 16 },
    location: { fontSize: 14 },
});

export default Movie;