import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const FriendsList = [
        { name: "Friend 1", age: 1, key: "1" },
        { name: "Friend 2", age: 2, key: "2"},
        { name: "Friend 3", age: 3, key: "3"},
        { name: "Friend 4", age: 4, key: "4"},
        { name: "Friend 5", age: 5, key: "5"},
        { name: "Friend 6", age: 6, key: "6"},
        { name: "Friend 7", age: 7, key: "7"},
        { name: "Friend 8", age: 8, key: "8"},
        { name: "Friend 9", age: 9, key: "9"}
    ];
    return (
        <FlatList
            data= {FriendsList}
            renderItem = { ({ item }) =>  {
                return (
                    <Text style={styles.cellTextStyle}>{item.name} - Age {item.age}</Text>
                )
            }}
        />
    )
}

const styles = StyleSheet.create ({
    cellTextStyle: {
        marginBottom: 30,
        marginLeft: 50,
        marginTop: 20,
        fontSize: 20
    }
});

export default ListScreen;