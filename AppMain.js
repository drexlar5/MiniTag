import {createStackNavigator, createAppContainer} from 'react-navigation';

import Main from './components/Main'
import Next from './components/Next'
import Edit from './components/ResultEdit'
// import App2 from './App2'

const MainNavigator = createStackNavigator({
  Home: {screen: Main},
  Next: {screen: Next},
  ResultEdit: {screen: Edit},
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }});

const AppMain= createAppContainer(MainNavigator);

export default AppMain;