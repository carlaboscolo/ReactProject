import React from "react";
import { View, Text, StyleSheet } from "react-native";


const UserPage = () => {
    return (
        <View style={styles.container}>
            <Text> User </Text>
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

export default UserPage;