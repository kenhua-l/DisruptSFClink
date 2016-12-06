import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

import {
  Styles
} from '../styles';

class LoginComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: 'username',
      password: 'pass'
    };
  }

  loginEntreprise() {
    this.props.dispatch({
      type: "APP_LOGIN",
      user: "enterprise"
    });
    Actions.main();
  }

  loginIndividual() {
    this.props.dispatch({
      type: "APP_LOGIN",
      user: "individual"
    });
    Actions.main();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
        />
        <Image source={require('../../images/BackgroundColor.png')} style={styles.bg}>
          <TouchableWithoutFeedback onPress={this.loginEntreprise.bind(this)}>
            <Image source={require('../../images/logo.png')} style={styles.logo}/>
          </TouchableWithoutFeedback>
          <View style={styles.signin}>
            <Button onPress={this.loginIndividual.bind(this)}>
              <Text style={styles.whiteFont}>Sign in</Text>
            </Button>
          </View>
        </Image>
      </View>
    );
  }
};

var styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      left: 0,
      top: -25,
      width: windowSize.width,
      height: windowSize.height,
      alignItems: 'center',
    },
    bg: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      width: windowSize.width,
      height: windowSize.height + 25,
      resizeMode: 'cover'
    },
    logo: {
      flex: 0.5,
      alignSelf: 'center',
      top: -50,
      resizeMode:'contain'
    },
    signin: {
        backgroundColor: 'transparent',
        padding: 15,
        width: 250,
        alignSelf:'center',
        alignItems: 'center'
    },
    whiteFont: {
      fontSize: 20,
      color: '#FFF'
    },
});


export default connect()(LoginComponent);
