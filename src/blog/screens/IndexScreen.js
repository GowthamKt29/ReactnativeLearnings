import React,{useContext} from 'react'
import {Text,StyleSheet,View, FlatList, Button} from 'react-native'
import BlogContext from '../context/BlogContext'


const IndexScreen=()=>{
const {data,addBlogPost}=useContext(BlogContext);
return <View>
<Text>Index screen </Text>
<Button title='Add Blog' onPress={addBlogPost}>
</Button>
<FlatList data={data}
keyExtractor={(data)=>data.title}
renderItem={({item})=>{
return <Text>{item.title} </Text>
}}
>
</FlatList>

</View>
};

const styles=StyleSheet.create({

});
export default IndexScreen