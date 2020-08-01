import React, { useReducer } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'Increament':
            return {counter: state.counter + 2 }
        case 'Decreament':
            return state.counter>0?{  counter: state.counter - 2 }:state
        default:
            return state;
    }
};

const CounterScreen = () => {
    // const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
// const{counter}=state;
    // function increament() {
    //     setCounter(counter + 1)
    // }
    // function decreament() {
    //     setCounter(counter - 1)
    // }

    return (<View style={{ flex: 1, margin: 10 }}>
        <View style={{ margin: 10 }}>
            <Button title='Increament'
                onPress={() =>
                    dispatch({type:'Increament',payload:1})
                // increament
            }>

            </Button>

        </View>
        <View style={{ margin: 10 }}>
            <Button title='Decreament'
                onPress={() => {
                    dispatch({type:'Decreament',payload:1})
                    // if (counter>0) {
                    //     setCounter(counter - 1)
                    // }

                }}>

            </Button>

        </View>
        <Text style={{ margin: 10 }}>Counter value :{state.counter} </Text>

    </View>
    )
};

const styles = StyleSheet.create({

});
export default CounterScreen