import React from 'react'
import {Text,StyleSheet,View,Button,style} from 'react-native'
import {Separator} from '../components/Separator'

const HomeScreen=({navigation})=>{
    const listItems=['Go to ComponentScreen','Go to ListScreen','Go to ImageScreen','Go to CounterScreen','Go to ColorScreen','Go to SquareScreen']
    function Separator() {
        return <View style={styles.separator} />;
      }
return <View>
<Button color="#f194ff" v title={listItems[0]} onPress={()=>{
    navigation.navigate('Components')
}}>
</Button>
<Separator />
<Button  title={listItems[1]} onPress={()=>{
    navigation.navigate('List')
    }}>
    </Button>
    <Separator />
    <Button title={listItems[2]} onPress={()=>{
        navigation.navigate('Image')
        }}>
        </Button>
        <Separator />
    <Button title={listItems[3]} onPress={()=>{
        navigation.navigate('Counter')
        }}>
        </Button>
     <Separator />
        <Button title={listItems[4]} onPress={()=>{
            navigation.navigate('Color')
            }}>
            </Button>
            <Separator />
        <Button title={listItems[5]} onPress={()=>{
            navigation.navigate('Square')
            }}>
            </Button>
</View>
};

const styles=StyleSheet.create({
    textStylePrimary:{
        fontSize:45
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }
    

});
export default HomeScreen