import React, {Component} from 'react';
import {
    Dimensions,
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
export default class EditScreen extends Component {
    constructor() {
        super();
        this.state = {show:false};
    }
    update() {
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', paddingTop: 25, paddingBottom: 80}}> 
                        <View style={{width: Dimensions.get('window').width - 32, marginTop: -12}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Text style={styles.header}>Personal Information</Text>
                                <TouchableOpacity onPress={this.update.bind(this)} style={{elevation: 2, flexDirection: 'row', alignItems: 'center', backgroundColor: '#0077B5', paddingTop: 4, paddingBottom: 4, paddingLeft: 4, paddingRight: 8, borderRadius: 4}}>
                                    {this.state.show && <Image style={{width: 24, height: 24}} source={require("../../images/LinkedIn_white.png")}/>}
                                    <Text style={{fontSize: 14, fontWeight: '500',color: 'white', marginLeft: this.state.show ? 8 : 4}}>{this.state.show ? "Import" : "Clear"}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.label}>Avatar</Text>
                            {this.state.show ? <Image style={{height: 88, width: 88, marginTop: 4, marginBottom: 4}} source={require('../../images/ProfileImg.png')}/> :
                            <View style={{marginTop: 8, marginBottom: 8, height: 84, width: 84, borderRadius: 44, borderWidth: 1, borderColor: '#15B4F1'}}/>}
                            <Text style={styles.label}>Full name</Text>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0.25)'
                                placeholderTextColor='rgba(0,0,0,0.40)'
                                value={this.state.show && "Alexey Matyushkin"}
                                style={styles.input}
                                placeholder='Name'
                            />
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0.25)'
                                placeholderTextColor='rgba(0,0,0,0.40)'
                                value={this.state.show && "contacts@alexeym.ca"}
                                style={styles.input}
                                placeholder='Position'
                            />
                            <Text style={styles.label}>Contact Number</Text>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0.25)'
                                placeholderTextColor='rgba(0,0,0,0.40)'
                                value={this.state.show && "+1 (650) 123-4567"}
                                style={styles.input}
                                placeholder='Contact Number'
                            />
                            <View style={{paddingTop: 24}}/>
                            <Text style={styles.header}>Company Information</Text>
                            {this.state.show &&  <Image style={{width: 100, resizeMode: 'contain'}} source={require("../../images/padlet_pink_logo.png")}/>}
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0.25)'
                                placeholderTextColor='rgba(0,0,0,0.40)'
                                value={this.state.show && "Padlet"}
                                style={styles.input}
                                placeholder='Name'
                            />
                            <Text style={styles.label}>Position</Text>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0.25)'
                                placeholderTextColor='rgba(0,0,0,0.40)'
                                value={this.state.show && "Mobile Developer"}
                                style={styles.input}
                                placeholder='Position'
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={Actions.landing}>
                          <Text style={styles.whiteFont}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <KeyboardSpacer/>
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
  input: {
    paddingTop: 0,
    fontSize: 14,
    color:'black'
  },
  header: {
    fontSize: 16,
    fontWeight: '500',
    color:'rgba(0,0,0,0.70)',
    // marginLeft: 4
  },
  label: {
    marginBottom: 2,
    marginTop: 12,
    fontSize: 12,
    fontWeight: '500',
    color:'rgba(0,0,0,0.56)',
    marginLeft: 4
  }
});
