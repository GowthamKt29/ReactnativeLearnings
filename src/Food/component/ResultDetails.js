import React from 'react'
import {Text,Image,StyleSheet,View} from 'react-native'



const ResultDetails=({results})=>{

return <View>
<Image style={styles.imageStyle} source={{uri:results.image_url}}
/>
<Text style={{fontWeight:'bold'}}>{results.name} </Text>
<Text>{results.rating} Stars, {results.review_count} Reviews
</Text>
</View>
};

const styles=StyleSheet.create({
imageStyle:{
    height:120,
    width:250,
    marginRight:10,
    marginBottom:5,
    borderRadius:5
}
});
export default ResultDetails