import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'

const TextScreen = props => {
    const [name, setName] = useState('Unknown');
    const [password, setPassword] = useState('');
    return (
        <View>
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="hi"
                value={name}
                onChangeText = { (newValue) => {
                        setName(newValue);
                    }
                }
            />
            <Text>Hi there {name}</Text>
            <Text style={styles.textStyle} >Enter Password</Text>
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="password"
                value = {password}
                onChangeText = { newValue => setPassword(newValue) }
            />
            {
                password.length < 5 ? <Text style={styles.textStyle}> Password must be longer than 5 characters</Text> : null
            }
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        margin: 15,
        fontSize: 30
    },
    inputStyle:  {
        borderColor: 'black',
        borderWidth: 1,
        margin: 15
    }
});

export default TextScreen;