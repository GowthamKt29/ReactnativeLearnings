import React from 'react'
import {Text,StyleSheet,View} from 'react-native'



const ComponentScreen=()=>{
    const text='Starting ReactNative with Interest'
    const name ='Gowtham'
return <View>
<Text style={styles.textStylePrimary}>{text}</Text>
<Text style={styles.textStyleSecoundary}>This is {name}</Text>
</View>
};

const styles=StyleSheet.create({
    textStylePrimary:{
        fontSize:45
    },
    textStyleSecoundary:{
        fontSize:20 
    }

});
export default ComponentScreen