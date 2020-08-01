import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBar = (props) => {

    return <View style={styles.containerStyle}>
    <Icon name='search' size={30} style={{alignSelf:'center',marginHorizontal:10}}  />
        <TextInput placeholder='Search' 
        style={{fontSize:20,flex:1}} 
        value={props.text}
        onEndEditing={props.onDone}
        onChangeText={value=>props.onTextChange(value)}
        >
        </TextInput>
        
    </View>
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'grey',
        height: 48,
        margin: 15,
        borderRadius:5,
        borderColor:'white',
        flexDirection:'row'
    }

});
export default SearchBar