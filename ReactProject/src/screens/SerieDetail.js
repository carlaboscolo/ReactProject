import React from "react";
import { ScrollView, StyleSheet, Text, Image } from "react-native";
import { View } from "react-native-web";


const SerieDetail = ({ route, navigation }) => {

   const { data } = route.params;
   const imageUrl = "https://image.tmdb.org/t/p/w500/" + data.poster_path ;

return(
   <ScrollView
   contentContainerStyle={styles.scroll}
   scrollEnabled={false}
   showsVerticalScrollIndicator={false}
>
 
   <Image source={{ uri: imageUrl }}  style={styles.image}/>
   <Text> {data.original_name} </Text> 
  
  </ScrollView>
);
};

const styles = StyleSheet.create({
  image: {
   width: '100%',
   height: '100%',
   resizeMode: 'contain',
},
scroll: {
   flexGrow: 1,
   backgroundColor: 'rgb(24,24,24)',
},
});

export default SerieDetail;

