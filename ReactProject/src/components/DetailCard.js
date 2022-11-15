import React, { memo } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailCard = memo(({ image, title, releaseDate, vote, description, onTapHeart, selected }) => {

    const imageUrl = "https://image.tmdb.org/t/p/w500/" + image;

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
                                <Text style={styles.date}> {releaseDate} </Text>
                            </View>
                            <View style={[styles.voteContainer, {
                                backgroundColor: vote >= 6 ? 'rgb(101,224,136)' : 'rgb(253,90,37)',
                            }]}>
                                <Text style={styles.vote}> {vote} </Text>
                            </View>
                            <TouchableOpacity style={{marginLeft: 10}} onPress={onTapHeart}>
                            <Icon name="heart" solid={selected ? true : false} size={26} color='red' />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}> {title} </Text>
                        <Text style={styles.description}> {description} </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

});

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
        height: 380,
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


export default DetailCard;