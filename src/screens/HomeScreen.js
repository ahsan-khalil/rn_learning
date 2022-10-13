import React from 'react';
import { Text, StyleSheet, Button, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
        <Button title='Component Screen' 
            onPress={ () => {
                    console.log("Component Screen pressed");
                    navigation.navigate('Components');
                } 
            }
        />
        <Button title='List Screen' 
            onPress={ () => {
                    console.log("List Screen pressed");
                    navigation.navigate('ListScreen');
                } 
            }
        />
        <Button title='Image Screen'
            onPress={ () => {
                    console.log("Image Screen pressed");
                    navigation.navigate('ImageScreen');
                } 
            }
        />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default HomeScreen;
