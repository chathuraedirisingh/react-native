import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Text, Image, Button } from 'react-native-elements';


// import image from '../../asstes/'
export default class Scan extends Component{
  render(){
    return(
      <ThemeProvider theme={theme}>
      <View style={styles.container}>
            <Text h4>Good Morning John</Text>
            <View style={styles.rectangle}/>
            <Button title="Scan ID"
              onPress={()=> this.props.navigation.navigate('Processing')}
            />
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
        marginBottom:100
      }
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

rectangle: {
    width: width -50,
    height: height/3,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#000',
    marginBottom:100
    

}

});
