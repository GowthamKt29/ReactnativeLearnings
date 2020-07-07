import React from 'react'
import {Text,StyleSheet,View,Image} from 'react-native'

const ImageDetails=(props)=>{

return <View style={{margin:20}}>
<Image source={props.imageSource}>
</Image>
<Text style={{margin:5}}>{props.title}</Text>
<Text style={{margin:5}}>{props.imageScore}</Text>
</View>
};

const styles=StyleSheet.create({

});
export default ImageDetails