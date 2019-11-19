import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './src/screens/login/Login';
// import Details from './src/screens/details/Details';
// import Details from './src/screens/details/Details';
// import Details from './src/screens/details/Details';
// import Details from './src/screens/details/Details';


export default class App extends Component{
  render(){
    return(
      <Login/>
    );
  }
}
