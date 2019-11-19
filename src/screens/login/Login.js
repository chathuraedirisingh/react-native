import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Input, Button, Image } from 'react-native-elements';

export default class Login extends Component{
  render(){
    return(
      <ThemeProvider theme={theme}>
      <View style={styles.container}>
            <Image 
              source={require('../../../assets/logo.png')}
              style={{ width: 200, height: 200 }}
            />
            <Input placeholder='Username'/>
            <Input placeholder='Password'/>
            <Button title="Sign In"
              onPress={()=> this.props.navigation.navigate('Main')}
            />
        </View>
      </ThemeProvider>
    );
  }
}

const width =Dimensions.get('window').width;

const theme = {
    Button: {
    //   raised: true,
      type : 'outline',
      buttonStyle:{
          height:50,
          width: width-50,
          marginTop:10,
      }
    },
    Input:{
        containerStyle:{
            height:50,
            width: width-50,
            marginTop:10
        }
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});
