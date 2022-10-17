import React, { useReducer } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import CounterScreen from './CounterScreen';

const COLOR_INCREMENT = 30

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount};
        case 'green':
            return { ...state, green: state.green + action.amount};
        case 'blue':
            return { ...state, blue: state.blue + action.amount};
        default:
            return state;
    }
}

const SquareScreen = () => {
   const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    return (
        <View>
            <CounterScreen color = "Red" 
                onIncrease = { () => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT }) }
                onDecrease = { () => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
            />
            <CounterScreen color = "Green" 
                onIncrease = { () => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT }) }
                onDecrease = { () => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT }) }
            />
                        <CounterScreen color = "Blue" 
                onIncrease = { () => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT }) }
                onDecrease = { () => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT }) }
            />
            <View style={{width: 150, height: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}>

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