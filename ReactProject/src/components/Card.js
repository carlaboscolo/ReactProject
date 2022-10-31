import React, {memo}  from "react";
import { View , StyleSheet, Text, Image } from "react-native";



const Card = memo(() => {
    return(
        <View style={styles.rowContainer}>
        <View style={styles.innerContainer}>
            {/* immagine  */}
            <View style={styles.containerImage}>
             {/* immagine   
              <Image source={{ uri: "https://image.tmdb.org/t/p/w500/"+ item.poster_path}} style={styles.image} />
            */} 
                <Image source={{ uri: "https://larepubblicadeglianimali.com/wp-content/uploads/2022/01/gattino-royal-canin.jpg"}} style={styles.image} />
             </View> 
            {/* testo  */}
            <View style={styles.containerText}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}> Titolo </Text>
                    <Text style={styles.date}> Data </Text>
                    <Text style={styles.vote}> Voto </Text>
                </View>
            </View>
        </View>
    </View>


    );
});

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
        //resizeMode: 'cover',
    },
    containerText: {
        flexDirection: 'row',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
    },
    date: { fontSize: 16 },
    vote: { fontSize: 14 },
});


export default Card;