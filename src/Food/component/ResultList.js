import React from 'react'
import {Text,StyleSheet,View, FlatList, TouchableOpacity} from 'react-native'
import ResultDetails from '../component/ResultDetails'
import {withNavigation} from 'react-navigation'

const ResultList=({title,result,navigation})=>{
    if (!result.length) {
        return null;
    }
return <View style={{marginLeft:15,marginVertical:10}}>
<Text style={styles.titleStyle}
>{title}</Text>
<FlatList horizontal
showsHorizontalScrollIndicator={false}
data={result}
keyExtractor={result=>result.id}
renderItem={({item})=>{
    return (<TouchableOpacity onPress={()=>{
        navigation.navigate('ResultShow',{id:item.id})
    }}>
    <ResultDetails results={item}/>
    </TouchableOpacity>
    )
}}
/>
</View>
};

const styles=StyleSheet.create({
titleStyle:{
    fontSize:18,
   fontWeight:'bold',
   marginBottom:5
    
}
});
export default withNavigation(ResultList);