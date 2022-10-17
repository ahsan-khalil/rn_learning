import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = props => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box Screen</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        margin: 20,
        color: "red",
        borderColor: "red",
        borderWidth: 5
    },
    viewStyle: {
        borderWidth: 1,
        margin: 2
    }
});

export default BoxScreen;