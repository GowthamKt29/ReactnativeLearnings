import React from 'react'
import {Text,StyleSheet,View} from 'react-native'



const HomeScreen=()=>{
  
return <View>
<Text style={styles.textStylePrimary}>this is home</Text>
</View>
};

const styles=StyleSheet.create({
    textStylePrimary:{
        fontSize:45
    }

});
export default HomeScreen