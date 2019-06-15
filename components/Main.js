import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Icon, Button } from 'native-base';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  componentDidMount() {
    this._requestCameraPermission();
    // this.setState({ scanned: false });
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    this.setState({ scanned: true });
    this.props.navigation.navigate('Next', {data: data.data})
  };

  move = () => {
    this.props.navigation.navigate('Next')
  }

  render() {

    let { scanned } = this.state;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Barcode Scan</Text>
          </Body>
          <Right />
        </Header>
        <View style={{ flex: 1, alignItems: 'center'}}>
          <View style={{marginBottom: 20}}>
          <TouchableOpacity
            style={{backgroundColor: "blue", marginTop: 10, borderRadius: 5, padding: 9, alignItems: 'center'}}
            onPress={this.move}
          >
            <Text style={{color: 'white'}}>PROCEED</Text>
          </TouchableOpacity>

          {scanned && (
          <TouchableOpacity
            style={{backgroundColor: "blue", marginTop: 10,}}
            onPress={() => this.setState({ scanned: false })}
          >
            <Text>Tap to Scan</Text>
          </TouchableOpacity>)}
          <Image source={require('../assets/nestle_logo.png')}
          style={{height: 150, width: 150, resizeMode: 'contain'}} />
        </View>
        <View style={{marginTop: 20, flex: 1, marginBottom: 315,  }}> 
          {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <View style={{ overflow: 'hidden', height: 250, width:250, }}>
              <BarCodeScanner
              onBarCodeRead={scanned ? undefined : this._handleBarCodeRead}
              style={{ height: 250, width: 250, }}
              />
            </View>
            
          }
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
  }
});
