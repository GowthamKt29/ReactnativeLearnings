import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_VALUE = 15;

const SquareScreen = () => {

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        switch (color) {
            case 'Red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                break

            case 'Green':
                    green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                break

            case 'Blue':
                    blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                break

            default:
                break
        }
    }

    return <View>
        <ColorCounter onIncrease={() => {
            setColor('Red', COLOR_VALUE)
        }}
            onDecrease={() => {
                setColor('Red', -1 * COLOR_VALUE)
            }}
            color='red' >
        </ColorCounter>
        <ColorCounter onIncrease={() => {
            setColor('Green', COLOR_VALUE)
        }}
            onDecrease={() => {
                setColor('Green', -1 * COLOR_VALUE)
            }}
            color='green' >
        </ColorCounter>
        <ColorCounter onIncrease={() => {
            setColor('Blue', COLOR_VALUE)
        }}
            onDecrease={() => {
                setColor('Blue', -1 * COLOR_VALUE)
            }}
            color='blue' >
        </ColorCounter>

        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />

    </View>
};

const styles = StyleSheet.create({

});
export default SquareScreen