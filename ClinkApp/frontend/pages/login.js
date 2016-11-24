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
      <View style={styles.container}>
        <Image source={require('../../images/BackgroundColor.png')} style={styles.bg}>
          <Image style={styles.mark} source={require('../../images/logo.png')} style={styles.logo}/>
          <View style={styles.signin}>
            <Button onPress={Actions.tabbar}>
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
      width: windowSize.width,
      height: windowSize.height
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
