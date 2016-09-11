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

export default class DetailScreenPadma extends Component {
    render() {
        return (
            <DetailCard 
                first_name='Padmasree'
                last_name='Warrior'
                role='CEO'
                company='NextEV'
                coy_web='http://www.nextev.com/'
                imgSrc={require('../../images/padma.png')}
                coySrc={require('../../images/nextev.png')}
                short_des='Shanghai-based Chinese electric vehicle maker'
                investors='Hillhouse Capital Group, Sequoia Capital, Joy Capital...'
            />
        );
    }
}
