import React from 'react'
import {Text,StyleSheet,ScrollView} from 'react-native'
import ImageDetails from '../components/ImageDetails'
const ImageScreen=()=>{

return <ScrollView>
<ImageDetails title="beach" imageSource={require('../../assets/beach.jpg')} imageScore='25' />
<ImageDetails title="forest" imageSource={require('../../assets/forest.jpg')} imageScore='21' />
<ImageDetails title="mountain" imageSource={require('../../assets/mountain.jpg')} imageScore='28' />
</ScrollView>
};

const styles=StyleSheet.create({

});
export default ImageScreen