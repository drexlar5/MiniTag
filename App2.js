import React from 'react';
import { Image, StyleSheet, View, ScrollView, Platform, Button } from 'react-native';
import { Icon, } from 'native-base'
import { createAppContainer, createDrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import Main from './components/Main'
import Help from './components/Help'
import Manage from './components/Manage'
import AppMain from './AppMain'


const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.headerContainer} >
        <Image source={require('./assets/nestle_logo.png')} style={{flex: 1, width: 280, justifyContent: 'center', backgroundColor: 'black', resizeMode: 'contain',}} >
        </Image>
      </View>
      <DrawerItems {...props} />
      <View style={{marginBottom: '100%'}}></View>
      <Button title="Logout" onPress={()=> props.navigation.navigate("Auth")}/>
    </SafeAreaView>
  </ScrollView>
);

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppMain,
    navigationOptions: {
      drawerIcon: ({tintColor}) => 
        <Icon name = {Platform.OS == "ios" ? "ios-home" :  "md-home"}
          style = {{
            fontSize: 24,
            color: tintColor
          }}
        />
      }
  },
  Help: {
    screen: Help,
    navigationOptions: {
      drawerIcon: ({tintColor}) => 
        <Icon name = {Platform.OS == "ios" ? "ios-help-circle" :  "md-help-circle"}
          style = {{
            fontSize: 24,
            color: tintColor
          }}
        />
      }
  },
  Manage: {
    screen: Manage,
    navigationOptions: {
      drawerIcon: ({tintColor}) => 
        <Icon name = {Platform.OS == "ios" ? "ios-contact" :  "md-contact"}
          style = {{
            fontSize: 24,
            color: tintColor
          }}
        />
      }
  },
},
{
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;


const styles = StyleSheet.create({
  container: {
      padding: 5,
  },
  headerContainer: {
      height: 150,
  },
  icon: {
    width: 24,
    height: 24,
  },
});