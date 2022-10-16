import React, { useState } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import CounterScreen from './CounterScreen';

const COLOR_INCREMENT = 30

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <CounterScreen color = "Red" 
                onIncrease = { () => {setRed(red + COLOR_INCREMENT)} }
                onDecrease = { () => {setRed(red - COLOR_INCREMENT)} }
            />
            <CounterScreen color = "Green" 
                onIncrease = { () => setGreen(green + COLOR_INCREMENT) }
                onDecrease = { () => setGreen(green - COLOR_INCREMENT) }
            />
                        <CounterScreen color = "Blue" 
                onIncrease = { () => setBlue(blue + COLOR_INCREMENT) }
                onDecrease = { () => setBlue(blue - COLOR_INCREMENT) }
            />
            <View style={{width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
});

export default SquareScreen;