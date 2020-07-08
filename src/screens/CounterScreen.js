import React, { useState } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

function increament(){
    setCounter(counter + 1)
}
function decreament(){
    setCounter(counter - 1)
}

    return (<View style={{ flex: 1, margin: 10 }}>
        <View style={{ margin: 10 }}>
            <Button title='Increament' onPress={increament}>

            </Button>

        </View>
        <View style={{ margin: 10 }}>
            <Button title='Decreament' onPress={() => {
                if (counter>0) {
                    setCounter(counter - 1)
                }
                
            }}>

            </Button>

        </View>
        <Text style={{ margin: 10 }}>Counter value :{counter} </Text>

    </View>
    )
};

const styles = StyleSheet.create({

});
export default CounterScreen