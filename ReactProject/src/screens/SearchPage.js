import React from "react";
import { View, Text, StyleSheet } from "react-native";


const SearchPage = () => {
    return (
        <View style={styles.container}>
            <Text> Search </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchPage;