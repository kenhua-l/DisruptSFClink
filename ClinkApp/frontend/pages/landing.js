import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';

import Button from 'react-native-button';

import { Actions } from 'react-native-router-flux';

import {
  Styles
} from '../styles';

import {
    Card,
    CardTitle,
    CardImage,
    CardContent,
    CardAction
} from 'react-native-card-view';
import { subFunction } from '../../crunchBaseParse';

const cardTitle = { fontSize: 25, paddingTop: 15, paddingLeft:20};
const styleImage = { height: 100, width: 100, borderRadius: 50, padding: 5};
const styleSmallImage = {height:45, width:45, borderRadius: 25, zIndex:5, position:'absolute', marginLeft: -35, marginTop:55};
const styleProfile = {backgroundColor: '#E1F5FE', alignSelf:'stretch', flexDirection: 'row'};

export default class LandingComponent extends Component {
    render () {
        return (
          <View>
            <Button onPress={Actions.detailevan}>
              <Image source={require('../../images/Clinkbutton.png')} style={styles.button}/>
            </Button>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginRight: 10,
        width:200,
        alignSelf: 'center',
        resizeMode: 'contain'
    }
});
