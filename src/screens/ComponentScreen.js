import React from 'react'
import {StyleSheet, ProgressBarAndroid, Text,View} from 'react-native'
import * as Progress from 'react-native-progress';


const ComponentScreen=()=>{
    const text='Starting ReactNative with Interest'
    const name ='Gowtham'
    return <View style={styles.container}>

          <View style={styles.example}>
          <Progress.Bar  width={700} indeterminate={true} color='blue' borderWidth={0} unfilledColor='#E6E6E6' borderRadius={0} />
         <Text>helloo</Text>

          </View>
        </View>
    };

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignSelf:'stretch'
        ,
        margin:10
        },
        example: {
          marginVertical: 24,
        },
      });
      
export default ComponentScreen