import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class LoginComponent extends React.Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button onPress={Actions.tabbar}>Back</Button>
      </View>
    );
  }
};
