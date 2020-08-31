import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/Food/Screens/SearchScreen'
import ResultShowScreen from './src/Food/Screens/ResultShowScreen'
import IndexScreen from './src/blog/screens/IndexScreen'
import {BlogProvider} from './src/blog/context/BlogContext'
const navigator = createStackNavigator(
  {
    Index:IndexScreen,
   
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog',
    },
  }
);

const App= createAppContainer(navigator);

export default()=>{
return <BlogProvider>
<App/>
</BlogProvider>

};
