import React, { memo } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";



const Card = memo(({ image, title, releaseDate, vote, onPress }) => {

    const imageUrl = "https://image.tmdb.org/t/p/w500/" + image;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.rowContainer}>
                <View style={styles.innerContainer}>
                    {/* immagine  */}
                    <View style={styles.containerImage}>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                    </View>
                    {/* testo  */}
                    <View style={styles.containerText}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>{title} </Text>
                            <Text style={styles.date}>Data di uscita : {releaseDate} </Text>
                            <Text style={styles.vote}>Voto : {vote} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
});

const styles = StyleSheet.create({
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
        height: '250%',
        resizeMode: 'cover',
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