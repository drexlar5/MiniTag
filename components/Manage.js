import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon,} from  'native-base';
import { Constants } from 'expo';

export default class Manage extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Manage</Text>
          </Body>
          <Right />
        </Header>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});