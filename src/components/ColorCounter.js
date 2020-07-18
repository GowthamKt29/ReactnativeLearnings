import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'




const ColorCounter = ({color, onIncrease, onDecrease}) => {
    function Separator() {
        return <View style={styles.separator} />;
    }
    return <View>
    <View style={{margin:10}}>
        <Text>{color}</Text>
        <Button onPress={()=>{
            onIncrease()  
        }}
        title={`Increase ${color}`} color={color}></Button>
        <Button onPress={()=>{
            onDecrease()  
        }}
        title={`Decrease ${color}`} color={color}></Button>
        </View>
        
    </View>
};

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    buttonStyle: {
        margin: 50,
        
       
    }
});
export default ColorCounter