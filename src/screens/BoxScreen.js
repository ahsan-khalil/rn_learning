import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = props => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyleOne}>Box Screen</Text>
        <Text style={styles.textStyleTwo}>Box Screen</Text>
        <Text style={styles.textStyleThree}>Box Screen</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "red",
        borderColor: "red",
        borderWidth: 5
    },
    textStyleOne: {
        fontSize: 15,
        color: "red",
        borderColor: "red",
        borderWidth: 5,
        flex: 2
    },
    textStyleTwo: {
        fontSize: 15,
        color: "green",
        borderColor: "green",
        borderWidth: 5,
        alignSelf: 'center',
        flex: 3,
    },
    textStyleThree: {
        fontSize: 15,
        color: "blue",
        borderColor: "blue",
        borderWidth: 5,
        flex: 2,
        // ...StyleSheet.absoluteFillObject
    },
    viewStyle: {
        borderWidth: 1,
        margin: 2,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 300
    }
});

export default BoxScreen;