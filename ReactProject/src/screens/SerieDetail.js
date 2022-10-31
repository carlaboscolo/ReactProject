import React, { useCallback, useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, Image, View, FlatList } from "react-native";

const SerieDetail = ({ route, navigation }) => {

   const { data } = route.params;
   const imageUrl = "https://image.tmdb.org/t/p/w500/" + data.poster_path;



   return (
      <ScrollView
         contentContainerStyle={styles.scroll}
         scrollEnabled={true}
         showsVerticalScrollIndicator={false}
         style={styles.container} >

         <View style={styles.innerContainer}>
            {/* immagine  */}
            <View style={styles.containerImage}>
               <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            {/* testo  */}
            <View style={styles.containerText}>
               <View style={{ flex: 1 }}>

                  <View style={styles.infoContainer}>
                     <View style={styles.dateContainer}>

                        <Text style={styles.date}>{data.first_air_date} </Text>
                     </View>
                     <View style={[styles.voteContainer, {
                        backgroundColor: data.vote_average >= 6 ? 'rgb(101,224,136)' : 'rgb(253,90,37)',
                     }]}>
                        <Text style={styles.vote}> {data.vote_average} </Text>
                     </View>
                  </View>
                  <Text style={styles.title}>{data.original_name} </Text>
                  <Text style={styles.description}>{data.overview} </Text>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'rgb(24,24,24)',
   },
   scroll: {
      flex: 1,
      backgroundColor: 'rgb(24,24,24)',
      padding: 10,
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

   },
   containerImage: {
      flex: 1,
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
   title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
   },
   date: { fontSize: 15, color: 'white' },
   vote: { fontSize: 16 },
   description: { fontSize: 12, color: 'white', marginTop: 20, },
   voteContainer: {
      width: 30,
      height: 30,
      borderRadius: 15,
      alignContent: 'center',
      justifyContent: 'center'
   },
   infoContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   dateContainer: {
      flex: 1,
   }
});

export default SerieDetail;

