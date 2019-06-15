import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Icon, Button } from 'native-base';
import {AppLoading, Constants, } from 'expo';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(){
    super();

    this.state = {
      param: '',
      machines: [],
      stillLoading: true,
    }
  }
  

  componentWillMount() {
    this.setState({param: this.props.navigation.getParam('data', 'Invalid Scan')})
    this._getMachines();
  }
  
  _getMachines = () => {
    fetch('http://machina.techbeaver.com.ng/machines/')
    .then((result) => result.json())
    .then((resultJSON) => {
      this.setState({
        machines: resultJSON,
        stillLoading: false
      })
    })
    .catch((e) => console.log(e))
  }

  render() {
    if (this.state.stillLoading == true) {
      return (
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Summary</Text>
            </Body>
            <Right />
          </Header>
          <AppLoading />
        </Container>
        )
    }
      // const {location, machine_id, name, zone} = this.state.machines;
      const mac = this.state.machines.filter((mac) => mac.machine_id == this.state.param)

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Summary</Text>
          </Body>
          <Right />
        </Header>
        <View style={styles.viewRow}>
          <Text style={styles.textStyle}>Machine: </Text>
          <View style={{padding: 5, alignItems: 'flex-start', width: 200}}>
            <Text style={styles.textStyleA}>{mac.name}</Text>
            {console.log(mac)}
            {console.log(`machine: ${this.state.machines}`)}
            {console.log(`param: ${this.state.param}`)}
          </View>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.textStyle}>Area: </Text>
          <View style={{padding: 5, alignItems: 'flex-start', width: 200}}>
            <Text style={styles.textStyleA}>{mac.zone}</Text>
          </View>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.textStyle}>Machine ID: </Text>
          <View style={{padding: 5, alignItems: 'flex-start', width: 200}}>
            <Text style={styles.textStyleA}>{mac.machine_id ? mac.machine_id : this.state.param}</Text>
          </View>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.textStyle}>User Details: </Text>
          <View style={{padding: 5, alignItems: 'flex-start', width: 200}}>
            <Text style={styles.textStyleA}>Ibitayo Alex - 07011</Text>
          </View>
        </View>
        <View style={{height: "20%"}}></View>
        <View style={styles.viewRow}>
          <Text style={styles.textStyle}>Pending = </Text>
          <View style={{padding: 5, alignItems: 'flex-start', width: 200}}>
            <Text style={styles.textStyleB}>20</Text>
          </View>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.textStyle}>Resolved = </Text>
          <View style={{padding: 5, alignItems: 'flex-start', width: 200}}>
            <Text style={styles.textStyleB}>100</Text>
          </View>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.textStyle}>% Completed = </Text>
          <View style={{padding: 5, alignItems: 'flex-start', width: 200}}>
            <Text style={styles.textStyleB}>20%</Text>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: "#CAD1E2",
    height: 50,
    padding: 9,
    paddingRight: 35,
    paddingLeft: 20,
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 18,
  },
  textStyleA: {
    fontSize: 18,
  },
  textStyleB: {
    fontSize: 20,
    marginLeft: 10,
  },
});
