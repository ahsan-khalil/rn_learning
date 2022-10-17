import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
        <Button title='Go to Component Screen' 
            onPress={ () => {
                    console.log("Component Screen pressed");
                    navigation.navigate('Components');
                } 
            }
        />
        <Button title='Go to List Screen' 
            onPress={ () => {
                    console.log("List Screen pressed");
                    navigation.navigate('ListScreen');
                } 
            }
        />
        <Button title='Go to Image Screen'
            onPress={ () => {
                    console.log("Image Screen pressed");
                    navigation.navigate('ImageScreen');
                } 
            }
        />
        <Button title='Go to Counter Screen' 
            onPress={ () => {
                    console.log("Counter Screen pressed");
                    navigation.navigate('CounterScreen');
                } 
            }
        />
        <Button title="Go to Color Demo"
            onPress = { () => {
                    console.log('Add a Color screen touch');
                    navigation.navigate('ColorScreen')
                }
            } />
        <Button title="Go to Square Demo" 
            onPress={ () => {
                    console.log('Square Screen');
                    navigation.navigate('SquareScreen');
                }
            }
        />
        <Button title='Go to Text Demo'
            onPress={ () => {
                    console.log('Text Screen');
                    navigation.navigate('TextScreen');
                }
            }
        />
        <Button title="Go to Box Demo"
            onPress={ () => {
                    console.log('Box Screem');
                    navigation.navigate('BoxScreen');
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
