import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";


//component
import Card from "../components/Card";




const SeriePage = () => {


const renderItem = useCallback(() => {
    return(
         <Card />
    );
}, []);

 return(
  
    <View style = {styles.container}>    
             <FlatList 
                data="VALORE"
                renderItem={renderItem} 
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

export default SeriePage;