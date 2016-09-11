import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
} from 'react-native';

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
            </View>
        );
    }
}
