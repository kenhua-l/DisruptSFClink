import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
    Card,
    CardTitle,
    CardImage,
    CardContent,
    CardAction
} from 'react-native-card-view';

import KeyboardSpacer from '../../components/KeyboardSpacer';
import { DetailCard } from '../detailCard';
const input = {alignItems: 'center', textAlign: 'center', width: 250, underlineColorAndroid:'transparent', marginLeft: 16, marginRight: 16, marginBottom: 16, paddingTop: 0, paddingBottom: 10, fontSize: 14, placeholderTextColor: 'rgba(0,0,0,0.40)', color:'black'};
const label = {alignItems: 'center', textAlign: 'center', marginBottom: 2, marginLeft: 16, marginRight: 16,  fontSize: 10, color:'#B0B0B0'};
export default class EditScreen extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <View style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: 25, paddingBottom: 80}}> 
                    <Image style={{height: 88, width: 88}} source={require('../../images/ProfileImg.png')}/>
                    <View style={{ paddingTop: 40    }}>
                    </View>
                    <Text style={label}>Full name</Text>
                    <TextInput
                        value={"Alexey Matyushkin"}
                        style={input}
                        placeholder='Name'
                    />
                    <Text style={label}>Company</Text>
                    <TextInput
                        value={"Self Employed"}
                        style={input}
                        placeholder='Company'
                    />
                    <Text style={label}>Email</Text>
                    <TextInput
                        value={"contacts@alexeym.ca"}
                        style={input}
                        placeholder='Position'
                    />
                    <Text style={label}>Contact Number</Text>
                    <TextInput
                        value={"+1 (650) 123-4567"}
                        style={input}
                        placeholder='Contact Number'
                    />
                    <TouchableOpacity style={styles.button} onPress={Actions.landing}>
                      <Text style={styles.whiteFont}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
  button: {
      width: 150,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#31B3EF',
      marginTop: 16,
  },
  whiteFont: {
    fontSize: 16,
    padding: 16,
    fontWeight: '100',
    color: 'white'
  },
});
