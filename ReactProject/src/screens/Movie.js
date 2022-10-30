import React from "react";
import { View, StyleSheet } from "react-native";


const Movie = () => {
 return(
    <View style = {styles.container}>
    </View>
 );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)', 
        alignItems : 'center',
        justifyContent : 'center',
    },
});

export default Movie;