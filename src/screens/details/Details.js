import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Text, Image, Button,Card, ListItem} from 'react-native-elements';

const user = {
    name:'John Doe',
    dob:'03/31/92',
    ssn:'XXX-XXX-7890',
    email:'jogndoe@ex.com',
    mobile:'(854) 678-7879'
  };

const list = [
  {
    name: 'Red Flag',
    status:'success',
    icon: 'done'
  },
  {
    name: 'Id Verification',
    status:'success',
    icon: 'done'
  },
  {
    name: 'SSN Validity',
    status:'success',
    icon: 'done'
  },
  {
    name: 'SSN ID Combination',
    status:'failed',
    info:'reasons to fail',
    icon: 'cancel'
  },
  {
    name: 'SSN Death Master File',
    status:'success',
    icon: 'done'
  },
  {
    name: 'ID Fraud Association',
    status:'failed',
    info:'reasons to fail',
    icon: 'cancel'
  },
  {
    name: 'OFAC',
    status:'success',
    icon: 'done'
  },
  {
    name: 'MLA',
    status:'failed',
    info:'reasons to fail',
    icon: 'cancel'
  },
];

export default class Details extends Component{
  render(){
    return(
    <SafeAreaView style={styles.container}>
    <Card title={user.name}
      image={require('../../../assets/user.jpg')}>
      <Text style={{marginBottom: 5}}>{user.dob}</Text>
      <Text style={{marginBottom: 5}}>{user.ssn}</Text>
      <Text style={{marginBottom: 5}}>{user.email}</Text>
      <Text style={{marginBottom: 5}}>{user.mobile}</Text>
</Card>
    
    <ScrollView>
    {
      list.map((item, i) => (
        <ListItem
        key={i}
        title={item.name}
        subtitle={item.info}
        leftIcon={{ name: item.icon }}/>
        )
      )
    }
    </ScrollView>
    </SafeAreaView>
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
        margin:10,
        // justifyContent:'center',
        // alignItems:'center',
    },
    image:{
        width: width -50,
        height: height/3,
        aspectRatio: 0.5
    }

});
