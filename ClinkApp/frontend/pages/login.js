import React from 'react';
import {
  Text,
  View
} from 'react-native';

export default class LoginComponent extends React.Component {
  render() {
    let localVariable = 'ABC';
    if (true) {
      localVariable += 'asd';
    }
    return (
      <Text>
        <Text>Login {localVariable}</Text>
        <Text>Login</Text>
      </Text>
    );
  }
};
