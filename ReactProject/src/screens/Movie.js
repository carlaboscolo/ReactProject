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
      <View ></View>
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
});

export default Movie;