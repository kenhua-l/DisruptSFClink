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
    StatusBar
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
  render () {
    var AnimatedModalBox = Animated.createAnimatedComponent(ModalBox);
      return (
        <View style={styles.wrapper}>
            <View style={{backgroundColor: 'white', padding: 16}}>
                <View>
                    <View style={{paddingTop: 16, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="edit" size={24} style={{color: '#858585'}}/>
                        <Text style={{flex: 1, marginLeft: 16, paddingTop: 4, paddingBottom: 4, fontSize: 16, color: 'rgba(0,0,0,0.40)'}}>Add note</Text>
                        <Icon name="mic" size={24} style={{color: '#15B4F1', marginRight: 8}}/>
                    </View>
                    <View style={{alignSelf: 'center', height: 0, width: Dimensions.get('window').width - 32, borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.13)'}}/>
                    <View style={{paddingTop: 16, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="email" size={24} style={{color: '#858585'}}/>
                        <Text style={{flex: 1, marginLeft: 16, paddingTop: 4, paddingBottom: 4, fontSize: 16, color: 'black'}}>alan@upguard.com</Text>
                        <Text style={{fontSize: 12, color: '#858585)', marginRight: 8}}>Business</Text>
                    </View>
                    <View style={{alignSelf: 'center', height: 0, width: Dimensions.get('window').width - 32, borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.13)'}}/>
                    <View style={{paddingTop: 16, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 24, height: 15}} source={require("../../images/flags/US.png")}/>
                        <Text style={{flex: 1, marginLeft: 16, paddingTop: 4, paddingBottom: 4, fontSize: 16, color: 'black'}}>1-(498)089-5310</Text>
                        <Text style={{fontSize: 12, color: '#858585)', marginRight: 8}}>Business</Text>
                    </View>
                    <View style={{alignSelf: 'center', height: 0, width: Dimensions.get('window').width - 32, borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.13)'}}/>
                    <View style={{paddingTop: 16, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 24, height: 24}} source={require("../../images/LinkedIn.png")}/>
                        <Text style={{flex: 1, marginLeft: 16, paddingTop: 4, paddingBottom: 4, fontSize: 16, color: 'black'}}>Alan Sharp-Paul</Text>
                        <Text style={{fontSize: 14, fontWeight: '500',color: '#2AA7DC', marginRight: 8}}>Connect</Text>
                    </View>
                    <View style={{alignSelf: 'center', height: 0, width: Dimensions.get('window').width - 32, borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.13)'}}/>
                    <View style={{paddingTop: 16, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 24, height: 24}} source={require("../../images/Facebook.png")}/>
                        <Text style={{flex: 1, marginLeft: 16, paddingTop: 4, paddingBottom: 4, fontSize: 16, color: 'black'}}>Alan Sharp-Paul</Text>
                        <Text style={{fontSize: 14, fontWeight: '500',color: '#2AA7DC', marginRight: 8}}>Connect</Text>
                    </View>

                </View>
            </View>
        </View>
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
      backgroundColor: 'transparent',
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




           
