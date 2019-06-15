import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { createMaterialBottomTabNavigator,} from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';  
import Result1 from './Result1';
import Result2 from './Result2';


export default createMaterialBottomTabNavigator({
    Summary: { screen: Result1, 
      navigationOptions:{  
        tabBarLabel:'Summary',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
            </View>),  
        activeColor: '#615af6',  
        inactiveColor: '#46f6d7',  
        barStyle: { backgroundColor: '#67baf6' },  
    }  },
    Tags: { screen: Result2 ,
      navigationOptions:{  
        tabBarLabel:'Tag',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
            </View>),  
        activeColor: '#f60c0d',  
        inactiveColor: '#f65a22', 
      }
    },
  }, {
    initialRouteName: 'Summary',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    resetOnBlur: 'true',
    barStyle: { backgroundColor: '#694fad' },
  });
