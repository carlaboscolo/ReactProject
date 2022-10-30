import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Serie = () => {
 return(
    <View style = {styles.container}>
        <Text> Serie </Text>
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

export default Serie;