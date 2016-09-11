import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import {
    Card,
    CardTitle,
    CardImage,
    CardContent,
    CardAction
} from 'react-native-card-view';

import { DetailCard } from '../detailCard'

export default class DetailScreenRichard extends Component {
    render() {
        return (
            <DetailCard 
                first_name='Richard'
                last_name='Hendricks'
                role='CEO'
                company='Pied Piper'
                coy_web='http://www.piedpiper.com'
                imgSrc={require('../../images/richard.png')}
                coySrc={require('../../images/piedpiper.png')}
                short_des='A Middle-Out Compression Solution Making Data Storage Problems Smaller'
                investors='Peter Gregory, Russ Haneman'
            />
        );
    }
}
