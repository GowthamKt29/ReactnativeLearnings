import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen'
import ColorChangeScreen from './src/screens/ColorChangeScreen'
import SquareScreen from './src/screens/SquareScreen'
import BoxScreen from './src/screens/BoxScreen'
import SearchScreen from './src/Food/Screens/SearchScreen'

const navigator = createStackNavigator(
  {
    Search:SearchScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Buisness search',
    },
  }
);

export default createAppContainer(navigator);
