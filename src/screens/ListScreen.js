import React from 'react'
import {Text,StyleSheet,View,SectionList} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const ListScreen=()=>{
    const friends=[
        {name:'Friend 1',age:21},
        {name:'Friend 2',age:22},
        {name:'Friend 3',age:23},
        {name:'Friend 4',age:24},
        {name:'Friend 5',age:25},
        {name:'Friend 6',age:26},
    ]
    const sectionArr=[
        {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      ]
// return <View>
// <FlatList 
// horizontal={false}
// showsVerticalScrollIndicator={false}
// keyExtractor={friends=>friends.name} 
// data={friends} 
// renderItem={({item})=>{
// return <Text style={styles.textStyle}>NAME :{item.name}  -  AGE: {item.age}</Text>
// }}> 
// </FlatList>
// </View>
return  <View style={styles.container}>
<SectionList
  sections={[
    {title: 'D', data: [{name:'Devin'}, {name:'gowtham'}, {name:'Ashok'}]},
    {title: 'J', data: [{name:'Kaml'}, {name:'Kambar'}, {name:'sion'}, {name:'Devin'}, {Name:'Devin'}, {Name:'Devin'}]},
  ]}
  renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
  renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
  keyExtractor={(item, index) => index}
/>
</View>
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
export default ListScreen