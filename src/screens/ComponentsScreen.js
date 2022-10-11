import React from "react";
import { Text, StyleSheet, View } from "react-native";

const name = "Muhammad Ahsan Khalil";

const ComponentsScreen = () => {
  return (
          <View>
            <Text style={styles.textStyle}>Getting Started with react native</Text>
            <Text style={styles.SubHeaderStyle}>My name is { name }</Text>
          </View>
        ); 
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  SubHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
