import React from 'react';


import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import TasksPage from './TasksPage';
import MapPage from './MapPage';
import Icon from 'react-native-vector-icons/FontAwesome';



const TabNavigator = createBottomTabNavigator({

  Home: { screen: Home,
  navigationOptions: ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      // You can return any component that you like here!
      return <Icon name="home" size={30} color={tintColor} />;
    },
 
  })},

  TasksPage: { screen: TasksPage,
    navigationOptions: ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        // You can return any component that you like here!
        return <Icon name="user" size={30} color={tintColor} />;
      },
   
    })},

MapPage:{ screen: MapPage,
  navigationOptions: ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      // You can return any component that you like here!
      return <Icon name="user" size={30} color={tintColor} />;
    },
 
  })},


},
{
tabBarOptions: {
  activeTintColor: "rgb(30,30,30)",
  inactiveTintColor: 'rgb(200,200,200)',
  showLabel: false,
 tabStyle: {
   backgroundColor: 'white',
 }
},
}
 );

export default createAppContainer(TabNavigator);
