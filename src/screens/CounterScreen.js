import React, { useState } from 'react'
import { Text, StyleSheet, View, Button} from 'react-native'

const CounterScreen = props => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Text>{ props.color }</Text>
            <Button title={ `Increase ${props.color}` } onPress={ () => {setCounter(counter + 1); props.onIncrease() }} />
            <Button title={ `Decrease ${props.color}` }onPress={ () => { setCounter(counter - 1); props.onDecrease() } } />
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center'
    }
});

export default CounterScreen;