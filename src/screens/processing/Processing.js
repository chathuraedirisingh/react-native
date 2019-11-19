import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Text, Image, Button } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Processing extends Component{
  render(){
    return(
      <ThemeProvider theme={theme}>
      <View style={styles.container}>
            <Text h5>We are processing your request</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Details')}>
            <Image
            style={styles.image}
          source={require('../../../assets/templicence.jpg')}
        />
        </TouchableOpacity>
        </View>
      </ThemeProvider>
    );
  }
}

const width =Dimensions.get('window').width;
const height =Dimensions.get('window').height;


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
    },
    Text:{
      style:{
        marginBottom:100,
        justifyContent:'center',
        alignItems:'center'
      }
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width: width -50,
        height: height/3,
        borderRadius:10,
        borderWidth:1,
    }

});
