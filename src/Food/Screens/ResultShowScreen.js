import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import Yelp from '../api/Yelp'


const ResultShowScreen = ({ navigation }) => {
    const [results, setResult] = useState(null)
    const id = navigation.getParam('id');
    console.log('Response  ' + JSON.stringify(results))

    const getResults = async (id) => {
        const response = await Yelp.get(`/${id}`)
        setResult(response.data)
    };

    useEffect(() => {
        getResults(id)
    }, [])

    if (!results) {
        return null;
    }
    return <View>
        <Text>{results.name}</Text>
        <FlatList data={results.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return (<Image style={{ height: 150, width: 150 }} source={{ uri: item }}></Image>)
            }}
        >
        </FlatList>
    </View>
};

const styles = StyleSheet.create({

});
export default ResultShowScreen