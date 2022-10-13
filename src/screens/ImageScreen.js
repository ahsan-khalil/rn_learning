import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from './components/ImageDetail'

const ImageScreen = props => {
    return (
        <View>
            <ImageDetail title = "Forest" imageSource={ require('../../assets/forest.jpg') } imageScore={9} />
            <ImageDetail title = "Beach" imageSource={ require('../../assets/beach.jpg') } imageScore={8} />
            <ImageDetail title = "Mountain" imageSource={ require('../../assets/mountain.jpg') } imageScore={10} />
        </View>
    )
};

const styles = StyleSheet.create({
    textSyle: {
        fontSize: 30
    }
});

export default ImageScreen;
