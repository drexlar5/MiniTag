import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Keyboard, KeyboardAvoidingView, ScrollView, } from 'react-native';
import { Container, Content, Form, Item, Input, Label, } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { Constants } from 'expo'


export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    password: '',
    // userValidate: false,
    // userValue: 1,
    // passwordValidate: false,
    // passwordValue: 1,
  }


  // checkUser = (e) => {
  //   'username' === this.state.username && '' === t ? 
  //   this.setState({
  //     userValidate: false,
  //     userValue: 1
  //   }):
  //   this.setState({
  //     username: t,
  //     userValidate: true
  //   })}
    
  // checkPassword = (e) => {
  //   'password' ===  e.target.name && '' === t ? 
  //   this.setState({
  //     passwordValidate: false,
  //     passwordValue: 1
  //   }) : 
  //   this.setState({
  //     userPassword: t,
  //     passwordValidate: true
  //   })
  // }

  loginA = () =>  {
    const { username, password } = this.state
      name = username

    // (this.props.navigation.state.params || 3).loginValue;

    const credentials = {
      username: name,
      password: password
    };

    fetch('http://soneaeon.com/work/apptiku/login', {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        password
      })
    })
    .then(function (result) {
      return result.json()
    })
    .then(function (resultJson) {
      resultJson[0].type  === 'a' ? 
      (
        // AsyncStorage.setItem(N, JSON.stringify(credentials)), 
      // work on the below code later
      this.props.navigation.navigate('App4'), 
      alert('You are logged In')) : 
      alert('Wrong Login Details')
    })
    .catch((e) => {
      console.error(e)
    }), Keyboard.dismiss()
  }

  // showEmailText =  () => {
  //   if (!this.state.emailValidate && this.state.emailValue === 1) return 'Enter Username'
  // } 
  
  // showPasswordText = () => {
  //   if (!this.state.passwordValidate && this.state.passwordValue === 1) return 'Enter Password'
  // }

  login = () => {
    const { username, password } = this.state;

    if (username == '' || password == ''){
      alert("Please fill the Username and Password fields")
      return;
    }

    // this.loginA();
    // this.props.navigation.navigate("App");
    // AsyncStorage.setItem('userToken', 'true');
    Keyboard.dismiss()
    this._storeData();
  }

  _storeData = async () => {
    try {
      // await AsyncStorage.setItem('userToken', 'true');
      this.props.navigation.navigate("App")
    } catch (error) {
      // Error saving data
      console.log(error)
    }
  };

  render() {
    return (
      <ScrollView style={styles.all} >
        <KeyboardAvoidingView
          enabled={true}
          behavior='padding'
          style={styles.container} 
        >
          <Image 
            style={{height: 250, width: 250, alignSelf: 'center'}} 
            source={require('../assets/nestle_logo.png')}/>
          <View style={{marginTop: 20}}>
            <Form style={{paddingHorizontal: 5}}>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input 
                placeholderTextColor='blue' 
                // autoFocus={true} 
                returnKeyType='next'
                onChange={(e) => this.setState({username: e.target.value})}
                />
              </Item>
              <Item floatingLabel >
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  // onEndEditing={() => Keyboard.dismiss()}
                 onChange={(e) => this.setState({password: e.target.value})}
                 />
              </Item>
            </Form>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '100%', padding: 8, paddingTop: 35}}>
              <TouchableOpacity style={styles.login} onPress={this.login}>
                <Text style={{color: 'white'}}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        <View style={{marginBottom: 60}}></View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    // flex: 1,
    // alignItems: 'center',
    backgroundColor: 'transparent',
    // justifyContent: 'center',
  },
  viewInput: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginBottom: 10,
    // backgroundColor: 'gray',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  textInput: {
    backgroundColor: 'blue',
    // border: 'blue',
    width: '80%',
    padding: 5,
    margin: 5,
    borderRadius: 9,
  },
  login: {
    backgroundColor: 'blue',
    borderRadius: 7,
    width: 90,
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});




// <View style={styles.viewInput}>
//               <Text style={styles.textView}>Username:</Text>
//               <TextInput style={styles.textInput} onChange={(e) => this.setState({username: e.target.value})}/>
//             </View>
//             <View style={styles.viewInput}>
//               <Text style={styles.textView}>Password:</Text>
//               <TextInput style={styles.textInput} onChange={(e) => this.setState({password: e.target.value})}/>
//             </View>