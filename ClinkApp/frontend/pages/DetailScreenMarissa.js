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

export default class DetailScreenMarissa extends Component {
    render() {
        return (
            <DetailCard 
                first_name='Marissa'
                last_name='Mayer'
                role='CEO & President'
                company='Yahoo!'
                coy_web='http://www.yahoo.com'
                imgSrc={require('../../images/marissa.png')}
                coySrc={require('../../images/yahoo.jpg')}
                short_des='Yahoo! is a technology company that is known for its web services and applications.'
                investors='Reuters, Sequoia Capital, SoftBank Capital'
            />
        );
    }
}
