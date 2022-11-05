import React, { memo } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const VerticalCard = memo(({ image, title, onPress }) => {

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
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    rowContainer: {
        height: 300,
        width: 180,
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
        height: 60,
    },
    title: {
        fontSize: 16,
        fontWeight: '800',
    },
});


export default VerticalCard;