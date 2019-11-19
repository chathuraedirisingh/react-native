import React , { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";

import Login from "../login/Login"

const RootStack = createDrawerNavigator(
    {
      Home: {screen:Login},
      Details: {screen: Login},
    },
    {
    intialRouteName: 'Home',
    navigationOptions: {
      headerStyle : {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle : {
        color: 'white',
        },
       },
     }
    );

    const AppStack = createStackNavigator({ RootStack : { screen: RootStack } });

    export default class Main extends Component {
      render() {
        return <AppStack/>;
      }
    }