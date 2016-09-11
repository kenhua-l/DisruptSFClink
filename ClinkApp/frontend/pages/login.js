import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

import {
  Styles
} from '../styles';

export default class LoginComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: 'username',
      password: 'pass'
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={styles.header}>
          <Image style={styles.mark} source={require('../../images/C.png')} />
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Image style={styles.inputUsername} source={require('../../images/username.png')} />
            <TextInput 
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#000"
                editable={true}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username} />
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.inputPassword} source={require('../../images/password.png')}/>
              <TextInput
                  password={true}
                  style={styles.input}
                  placeholder="Pasword"
                  placeholderTextColor="#FFF"
                  value={this.state.password} />
          </View>
          <View style={styles.forgotContainer}>
            <Text style={styles.greyFont}>Forgot Password</Text>
          </View>
        </View>
        <View style={styles.signin}>
          <Button onPress={Actions.tabbar}>
            <Text style={styles.whiteFont}>Sign In</Text>
          </Button>
        </View>
        <View style={styles.signup}>
          <Text style={styles.greyFont}>Don't have an account?<Text style={styles.signUpFont}>  Sign Up</Text></Text>
        </View>
      </View>
    );
  }
};

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 200,
        height: 200
    },
    signin: {
        backgroundColor: '#03A9F4',
        padding: 10,
        width: 250,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 10,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 10,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 5,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14,
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      fontSize: 15,
      color: '#424242'
    },
    whiteFont: {
      fontSize: 20,
      color: '#FFF'
    },
    signUpFont:{
      fontSize: 15,
      color: '#000'
    }
});
