import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    TextInput,
    Linking
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pulse from '../../components/Pulse';
import ModalBox from '../../components/ModalBox';
import { subFunction } from '../../crunchBaseParse';

import { DetailCard } from '../detailCard';
const cardTitle = { fontSize: 25, paddingTop: 15, paddingLeft:20};
const styleImage = { height: 100, width: 100, borderRadius: 50, padding: 5};
const styleSmallImage = {height:45, width:45, borderRadius: 25, zIndex:5, position:'absolute', marginLeft: -35, marginTop:55};
const styleProfile = {backgroundColor: '#E1F5FE', alignSelf:'stretch', flexDirection: 'row'};

export default class Clink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clinkFound: 0,
      clinkState: 'find', //find, clinking, done
      height: new Animated.Value(Dimensions.get('window').height - 80),
      marginTop: new Animated.Value(Dimensions.get('window').height - 500),
      borderRadius: new Animated.Value(8),
      clinkedAnimate: new Animated.Value(0),
      isExpanded: new Animated.Value(0)
    };
    this.onExpandModalAndOpenFullProfile = this.onExpandModalAndOpenFullProfile.bind(this);
  }
  componentDidMount() {
  }
  onExpandModalAndOpenFullProfile() {
    Animated.timing(this.state.isExpanded, {
        duration: 250,
        toValue:  1
    }).start(() => {
    });
    Animated.timing(this.state.height, {
        duration: 250,
        toValue:  Dimensions.get('window').height
    }).start(() => {
    });
    Animated.timing(this.state.marginTop, {
        duration: 250,
        toValue:  0
    }).start(() => {
    });
    Animated.timing(this.state.borderRadius, {
        duration: 250,
        toValue: 0
    }).start();
  }
  email() {
    Linking.openURL("mailto:alan@upguard.com").catch(err => console.error('An error occurred', err));
  }
  call1() {
    Linking.openURL("tel:+14980895310").catch(err => console.error('An error occurred', err));
  }
  call2() {
    Linking.openURL("tel:+441302762259").catch(err => console.error('An error occurred', err));
  }
  ln() {
    Linking.openURL("https://www.linkedin.com/in/asharppaul").catch(err => console.error('An error occurred', err));
  }
  fb() {
    Linking.openURL("https://twitter.com/asharppaul").catch(err => console.error('An error occurred', err));
  }
  render () {
    var AnimatedModalBox = Animated.createAnimatedComponent(ModalBox);
      return (
        <ScrollView style={styles.wrapper}>
            <View style={{flex: 1, backgroundColor: '#eee', padding:8}}>
                <View style={{backgroundColor: 'white', padding: 16, elevation: 2, borderRadius: 2}}>
                    <View style={{paddingTop: 0, paddingBottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="edit" size={24} style={{color: '#858585'}}/>
                        <TextInput style={{underlineColorAndroid:'rgba(0,0,0,0.40)', flex: 1, marginLeft: 16, marginRight: 16, paddingTop: 8, paddingBottom: 8, fontSize: 16, placeholderTextColor: 'rgba(0,0,0,0.40)', color:'black'}} placeholder="Add note"></TextInput>
                        <Icon name="mic" size={24} style={{color: '#15B4F1', marginRight: 8}}/>
                    </View>
                </View>
                <View style={{backgroundColor: 'white', marginTop: 8, paddingTop:16, padding: 16, elevation: 2, borderRadius: 2}}>
                    <TouchableOpacity onPress={this.email} style={{paddingTop: 16, paddingBottom: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="email" size={24} style={{color: '#858585'}}/>
                        <Text style={{flex: 1, marginLeft: 16, paddingTop: 4, paddingBottom: 4, fontSize: 16, color: 'black'}}>alan@upguard.com</Text>
                        <Text style={{fontSize: 12, color: '#858585)', marginRight: 8}}>Business</Text>
                    </TouchableOpacity>
                    <View style={{alignSelf: 'center', height: 0, marginLeft: 56, width: Dimensions.get('window').width - 80, borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.13)'}}/>
                    <TouchableOpacity onPress={this.call1} style={{paddingTop: 24, paddingBottom: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 24, height: 15}} source={require("../../images/flags/US.png")}/>
                        <Text style={{flex: 1, marginLeft: 16, paddingTop: 4, paddingBottom: 4, fontSize: 16, color: 'black'}}>1-(498)089-5310</Text>
                        <Text style={{fontSize: 12, color: '#858585)', marginRight: 8}}>Business</Text>
                    </TouchableOpacity>
                    <View style={{alignSelf: 'center', height: 0, marginLeft: 56, width: Dimensions.get('window').width - 80, borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.13)'}}/>
                    <TouchableOpacity onPress={this.call2} style={{paddingTop: 24, paddingBottom: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 24, height: 15}} source={require("../../images/flags/GB.png")}/>
                        <Text style={{flex: 1, marginLeft: 16, paddingTop: 4, paddingBottom: 4, fontSize: 16, color: 'black'}}>44-(130)276-2259</Text>
                        <Text style={{fontSize: 12, color: '#858585)', marginRight: 8}}>Personal</Text>
                    </TouchableOpacity>
                    <View style={{alignSelf: 'center', height: 0, marginLeft: 56, width: Dimensions.get('window').width - 80, borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.13)'}}/>
                    <TouchableOpacity onPress={this.ln} style={{paddingTop: 24, paddingBottom: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 24, height: 24}} source={require("../../images/LinkedIn.png")}/>
                        <Text style={{flex: 1, marginLeft: 16, paddingTop: 4, paddingBottom: 4, fontSize: 16, color: 'black'}}>Alan Sharp-Paul</Text>
                        <Text style={{fontSize: 14, fontWeight: '500',color: '#2AA7DC', marginRight: 8}}>Connect</Text>
                    </TouchableOpacity>
                    <View style={{alignSelf: 'center', height: 0, marginLeft: 56, width: Dimensions.get('window').width - 80, borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.13)'}}/>
                    <TouchableOpacity onPress={this.fb} style={{paddingTop: 24, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 24, height: 24}} source={require("../../images/twitter.png")}/>
                        <Text style={{flex: 1, marginLeft: 16, paddingTop: 4, paddingBottom: 4, fontSize: 16, color: 'black'}}>@asharppaul</Text>
                        <Text style={{fontSize: 14, fontWeight: '500',color: '#2AA7DC', marginRight: 8}}>Connect</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: 'white', marginTop: 8, padding: 16, elevation: 2, borderRadius: 2}}>
                    <Text style={{flex: 1, fontWeight: '500', fontSize: 14, color: '#2AA7DC', marginBottom: 8}}>Recent</Text>
                    <View style={{marginLeft: 8, paddingTop: 16, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="email" size={24} style={{color: '#858585'}}/>
                        <View style={{flex: 1, marginLeft: 24}}>
                            <Text style={{flex: 1, paddingBottom: 4, fontSize: 14, color: 'black'}}>alan@upguard.com</Text>
                            <Text style={{fontSize: 12, color: '#858585)', marginRight: 8, paddingBottom: 4}}><Text style={{fontWeight: '500'}}>Title:</Text> Great to see you at TechCrunch SF</Text>
                            <Text style={{fontSize: 12, color: '#858585)', marginRight: 8}}>8:24 AM</Text>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
    blur: {
      flex: 1,
      backgroundColor: 'rgba(53, 53, 53, 0.9)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      backgroundColor: '#eee',
      flex: 1,
    },
    secondRowWrapper: {
        flexDirection: 'row'
    },
    greenButton: {
        width: Dimensions.get('window').width - 32,
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        height: 128,
        borderRadius: 4,
        backgroundColor: '#48D2A0',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    blueButton: {
        width: (Dimensions.get('window').width - 48)/2,
        backgroundColor: '#15B4F1',
        marginTop: 16,
        marginLeft: 16,
        height: 128,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    blueButtonText: {
        color: 'white',
        marginTop: 10,
        fontWeight: '500',
        fontSize: 20,
    },
    blueButtonImg: {
        height: 48,
        resizeMode: 'contain'
    },
    buttonImg: {
        height: 56,
        resizeMode: 'contain'
    },
    clinkImg: {
        marginTop: 10,
        height: 24,
        resizeMode: 'contain'
    },
    header: {
      color: 'white',
      fontSize: 24,
    },
    subheader: {
      marginTop: 8,
      color: 'white',
      fontSize: 16,
      fontWeight: "200",
    }
});




           
