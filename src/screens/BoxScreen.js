import React from 'react'
import {Text,StyleSheet,View} from 'react-native'



const BoxScreen=()=>{

return <View style={styles.viewStyle}>
<Text style={styles.textOneStyle}>child1</Text>
<Text style={styles.textTwoStyle}>child2 </Text>
<Text style={styles.textThreeStyle}>child3 </Text>
</View>
};

const styles=StyleSheet.create({
    viewStyle:{
borderWidth:1,
borderColor:'black',
flexDirection:'column',
alignItems:'center',

height:200,


    },
    textOneStyle:{
        borderWidth:1,
       
        alignSelf:'flex-end',
        borderColor:'red'  ,
    
    
    },
    textTwoStyle:{
        borderWidth:1,
       
        borderColor:'red'  ,
    
    
    },
    textThreeStyle:{
        borderWidth:1,
       
        borderColor:'red'  ,
    
    
    }

});
export default BoxScreen