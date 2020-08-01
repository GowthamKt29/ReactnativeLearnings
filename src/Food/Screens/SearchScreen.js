import React,{useState} from 'react'
import {Text,StyleSheet,View} from 'react-native'
import SearchBar from '../component/SearchBar'



const SearchScreen=()=>{
    const[value,setValue]=useState('')

return <View>
<SearchBar text={value} 
onTextChange={searchValue => setValue(searchValue)}
onDone={()=>console.log('Submitted '+value)}
>
</SearchBar>
<Text>{value}</Text>
</View>
};

const styles=StyleSheet.create({

});
export default SearchScreen