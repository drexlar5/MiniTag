import {createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './components/Login'

const MainNavigator = createStackNavigator({
  Home: {screen: Login},
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }});

const AppLogin = createAppContainer(MainNavigator);

export default AppLogin;