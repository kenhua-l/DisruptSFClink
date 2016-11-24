import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import {
    Card,
    CardTitle,
    CardImage,
    CardContent,
    CardAction
} from 'react-native-card-view';

import { DetailCard } from '../detailCard';
const label = { width: 250, marginRight: 10, paddingTop: 4 };
export default class EditScreen extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={{ paddingTop: 25 }}>
                </View>
                <Image style={{height: 150, width: 150}} source={require('../../images/profile_sillh.png')}/>
                <View style={{ paddingTop: 25 }}>
                </View>
                <TextInput
                    style={label}
                    placeholder='Name'
                />
                <TextInput
                    style={label}
                    placeholder='Company'
                />
                <TextInput
                    style={label}
                    placeholder='Position'
                />
                <TextInput
                    style={label}
                    placeholder='Contact Number'
                />
                <Button style={styles.button} onPress={Actions.landing}>
                  <Text style={styles.whiteFont}>Create</Text>
                </Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
  button: {
      marginRight: 10,
      width:200,
      borderRadius: 50,
      alignSelf: 'center',
  },
  whiteFont: {
    fontSize: 20,
    padding: 20,
    backgroundColor: '#FAFAFF',
    color: '#000'
  },
});
