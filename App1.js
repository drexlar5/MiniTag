import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AppLogin from './AppLogin'
import AppMain from './AppMain'
import App2 from './App2'


class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
    // AsyncStorage.setItem('userToken', false);
    // this.state = {
    //   isLoggedIn: true
    // }
  }

  componentDidMount = () => AsyncStorage.clear();

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    try{
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }
    catch (error) {
      console.log(`Retrieve error: ${error}`)
    }
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: App2,
    Auth: AppLogin,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));