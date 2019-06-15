import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Icon, Button } from 'native-base';
import { Constants } from 'expo';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(){
    super();

    this.state = {
      param: '',
      list: [
        {
          id: 1,
          team: 'red',
          description: 'Damaged heat pump',
          identified: 'Ibitayo',
          status: 'Resolved',
          date: '14-12-2019',
        },
        {
          id: 2,
          team: 'blue',
          description: 'Loose bolt',
          identified: 'Tayo',
          status: 'Pending',
          date: '12-12-2019',
        },
        {
          id: 3,
          team: 'blue',
          description: 'Vacuum pump stands bolts and nuts (dirty)',
          identified: 'Bola',
          status: 'Pending',
          date: '22-02-2019',
        },
      ]
    }
  }
  

  componentWillMount() {
    this.setState({param: this.props.navigation.getParam('data', 'Invalid Scan')})
  }

  editView = () => {
    this.props.navigation.navigate('ResultEdit');
  }
  
  listView = () => {
    return this.state.list.map((id) => {
     return  (<TouchableOpacity key = {id.id} style={styles.listComponent} onPress={this.editView}>
              <View style={styles.viewRow}>
                <View style={id.team === 'red' ? styles.redView : styles.blueView}></View>
                <Text>{id.date}</Text>
              </View>
              <View style={styles.viewRow}>
                <Text>{id.description}</Text>
              </View>
              <View style={styles.viewRow}>
                <Text>{id.identified}</Text>
                <Text>{id.status}</Text>
              </View>
            </TouchableOpacity>);
    })
  }

  render() {
    return (
      <Container style={styles.container} >
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Tags</Text>
          </Body>
          <Right />
        </Header>
        {this.listView()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  blueView: {
    backgroundColor: 'blue',
    height: 25,
    width: 25,
    borderRadius: 20,
  },
  redView: {
    backgroundColor: 'red',
    height: 25,
    width: 25,
    borderRadius: 20,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    height: 10,
    padding: 10,
    paddingRight: 35,
    paddingLeft: 20,
    justifyContent: 'space-between',
  },
  listComponent: {
    marginTop: 4,
    backgroundColor: "#CAD1E2",
    padding: 5,
    borderRadius: 5,
  }
});

