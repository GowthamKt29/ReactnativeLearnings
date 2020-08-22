import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/Food/Screens/SearchScreen'
import ResultShowScreen from './src/Food/Screens/ResultShowScreen'

const navigator = createStackNavigator(
  {
    Search:SearchScreen,
    ResultShow:ResultShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Buisness search',
    },
  }
);

export default createAppContainer(navigator);
