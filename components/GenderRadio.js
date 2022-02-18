import {Text, View, Pressable } from 'react-native';
import React, {useState} from 'react';
import styles from '../style/style';

export default function GenderRadio({options, onPress}) {
    const [value, setValue] = useState(null);

    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }


    return (
        <>
        {
            options.map((item) => ( 
                <View key={item.value} style={styles.buttonContainer}>
                    <Text style={styles.label}>{item.label}</Text>
                    <Pressable style={styles.circle} onPress={() => handlePress(item.value)}>
                        {value === item.value && <View style={styles.checkedCircle}/> }
                    </Pressable>
                </View>
            ))
        }
        </>
    )
}