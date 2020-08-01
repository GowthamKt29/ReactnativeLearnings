import React, { useReducer } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_VALUE = 15;
const reducer = (state, action) => {
    // state==={red:0,green:0,blue:0}
    // action==={colorToChange:'red'||'green',amount:15}

    switch (action.colorToChange) {
        case 'red':
            // don't directly set state
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount };

        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : { ...state, green: state.green + action.amount };

        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : { ...state, blue: state.blue + action.amount };

        default:
            return state;
    }

};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state;

    // const [red, setRed] = useState(0)
    // const [green, setGreen] = useState(0)
    // const [blue, setBlue] = useState(0)

    // const setColor = (color, change) => {
    //     switch (color) {
    //         case 'Red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change)
    //             break

    //         case 'Green':
    //                 green + change > 255 || green + change < 0 ? null : setGreen(green + change)
    //             break

    //         case 'Blue':
    //                 blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
    //             break

    //         default:
    //             break
    //     }
    // }

    return <View>
        <ColorCounter onIncrease={() =>
            // setColor('Red', COLOR_VALUE)
            dispatch({ colorToChange: 'red', amount: COLOR_VALUE })
        }
            onDecrease={() => {
                // setColor('Red', -1 * COLOR_VALUE)
                dispatch({ colorToChange: 'red', amount: -1 * COLOR_VALUE })
            }}
            color='red' >
        </ColorCounter>
        <ColorCounter onIncrease={() => {
            dispatch({ colorToChange: 'green', amount: COLOR_VALUE })
            // setColor('Green', COLOR_VALUE)
        }}
            onDecrease={() => {
                dispatch({ colorToChange: 'green', amount: -1 * COLOR_VALUE })
                // setColor('Green', -1 * COLOR_VALUE)
            }}
            color='green' >
        </ColorCounter>
        <ColorCounter onIncrease={() => {
            dispatch({ colorToChange: 'blue', amount: COLOR_VALUE })
            // setColor('Blue', COLOR_VALUE)
        }}
            onDecrease={() => {
                dispatch({ colorToChange: 'blue', amount: -1 * COLOR_VALUE })
                // setColor('Blue', -1 * COLOR_VALUE)
            }}
            color='blue' >
        </ColorCounter>

        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />

    </View>
};

const styles = StyleSheet.create({

});
export default SquareScreen