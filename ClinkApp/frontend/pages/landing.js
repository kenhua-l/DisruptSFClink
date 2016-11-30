import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity
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
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.greenButton} onPress={Actions.clink}>
                    <Image style={styles.buttonImg} source={require('../../images/scan_icon.png')}/>
                    <Image style={styles.clinkImg} source={require('../../images/clink_icon.png')}/>
            </TouchableOpacity>
            <View style={styles.secondRowWrapper}>
                <TouchableOpacity style={styles.blueButton} onPress={Actions.eventPeople}>
                        <Image style={styles.blueButtonImg} source={require('../../images/search_icon.png')}/>
                        <Text style={styles.blueButtonText}>
                            Search
                        </Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.blueButton} onPress={Actions.fullDetails}>
                        <Image style={styles.blueButtonImg} source={require('../../images/note_icon.png')}/>
                        <Text style={styles.blueButtonText}>
                            Notes
                        </Text>
                </TouchableOpacity>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
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
        padding: 16,
        elevation: 2,
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
        elevation: 2,
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
});
