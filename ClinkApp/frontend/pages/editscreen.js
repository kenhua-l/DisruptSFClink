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
import { connect } from 'react-redux';

import KeyboardSpacer from '../../components/KeyboardSpacer';
import { DetailCard } from '../detailCard';

class EditScreen extends Component {
    constructor() {
        super();
        this.state = {show:false, connected: false};
    }
    connect() {
        this.setState({
            connected: !this.state.connected,
        })
    }
    update() {
        individualProfile = {
            avatar: require('../../images/jack.png'),
            name: "Alexey Matyushkin",
            email: "contacts@alexeym.ca",
            number: "+1 (650) 123-4567",
            logoWidth: 100,
            logo:require("../../images/padlet_pink_logo.png"),
            company: "Padlet",
            position: "Mobile Developer"
        };
        enterpriseProfile = {
            avatar: require('../../images/alan.jpg'),
            name: "Alan Sharp-Paul",
            email: "alan@upguard.com",
            number: "+1 (415) 319-2103",
            logoWidth: 200,
            logo:require("../../images/upguard.png"),
            company: "Upguard",
            position: "CEO"
        };
        let profile = this.props.state.user === 'individual' ? individualProfile : enterpriseProfile;
        this.setState({
            show: !this.state.show,
            ...profile
        });

    }
    render() {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', paddingTop: 25, paddingBottom: 80}}> 
                        <View style={{width: Dimensions.get('window').width - 32, marginTop: -8}}>
                            <View style={{position: 'absolute', right: 0, top: 0}}>
                                <TouchableOpacity onPress={this.update.bind(this)}
                                style={{elevation: 2,  flexDirection: 'row', alignItems: 'center', justifyContent: !this.state.show ? 'flex-start' : 'center', backgroundColor: '#0077B5', borderRadius: 4, height: 40, width: 120}}>
                                    {!this.state.show && <Image style={{marginLeft: 8, marginRight:12,  width: 24, height: 24}} source={require("../../images/LinkedIn_white.png")}/>}
                                    <Text style={{fontSize: 14, fontWeight: '500',color: 'white'}}>{!this.state.show ? "Import" : "Clear"}</Text>
                                </TouchableOpacity>
                                {this.props.state.user === 'enterprise' &&
                                <View>
                                    <View style={{marginTop: 8}}/>
                                    <TouchableOpacity onPress={this.connect.bind(this)}
                                    style={{elevation: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#fff', borderRadius: 4, height: 40, width: 120}}>
                                        <Image style={{marginLeft: 8, marginRight:12,  width: 24, resizeMode: 'contain'}} source={require("../../images/salesforce.png")}/>
                                        <Text style={{fontSize: 14, fontWeight: '500',color: '#2F8FDF'}}>{!this.state.connected ? "Connect" : "Connected"}</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                            </View>
                            <Text style={styles.header}>Personal Information</Text>
                            <Text style={styles.label}>Avatar</Text>
                            <View style={{marginTop:8 , height: 100}}>
                            {this.state.show ? <Image style={{height: 84, width: 84, borderWidth: 1, borderRadius: 44, margin: 3}} source={this.state.avatar}/> : <View/>}
                            <View style={{position: 'absolute', top: 0, height: 90, width: 90, borderRadius: 44, borderWidth: 1, borderColor: this.props.state.user === 'enterprise' ? '#333' : '#15B4F1'}}/>
                            </View>
                            <Text style={styles.label}>Full name</Text>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0.25)'
                                placeholderTextColor='rgba(0,0,0,0.40)'
                                value={this.state.show && this.state.name}
                                style={styles.input}
                                placeholder='Name'
                            />
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0.25)'
                                placeholderTextColor='rgba(0,0,0,0.40)'
                                value={this.state.show && this.state.email}
                                style={styles.input}
                                placeholder='Email'
                            />
                            <Text style={styles.label}>Contact Number</Text>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0.25)'
                                placeholderTextColor='rgba(0,0,0,0.40)'
                                value={this.state.show && this.state.number}
                                style={styles.input}
                                placeholder='Contact Number'
                            />
                            <View style={{paddingTop: 24}}/>
                            <Text style={styles.header}>Company Information</Text>
                            {this.state.show &&  <Image style={{width: this.state.logoWidth, resizeMode: 'contain'}} source={this.state.logo}/>}
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0.25)'
                                placeholderTextColor='rgba(0,0,0,0.40)'
                                value={this.state.show && this.state.company}
                                style={styles.input}
                                placeholder='Name'
                            />
                            <Text style={styles.label}>Position</Text>
                            <TextInput
                                underlineColorAndroid='rgba(0,0,0,0.25)'
                                placeholderTextColor='rgba(0,0,0,0.40)'
                                value={this.state.show && this.state.position}
                                style={styles.input}
                                placeholder='Position'
                            />
                        </View>
                        <TouchableOpacity style={[styles.button, {backgroundColor: this.props.state.user === 'enterprise' ? '#333' : '#31B3EF'}]} onPress={Actions.landing}>
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


export default connect(state => ({
    state: state.app,
  })
)(EditScreen);
