import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({  imageScore, title, imageSource }) => {
    return (
        <View>
            <Image source={ imageSource } />
            <Text style={styles.textStyle}>{ title }</Text>
            <Text style={styles.textStyle}>Image Score - { imageScore }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ImageDetail;