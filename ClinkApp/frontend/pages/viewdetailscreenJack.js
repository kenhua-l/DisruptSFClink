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

import { DetailCard } from '../detailCard';

export default class DetailScreenJack extends Component {
    render() {
        return (
            <DetailCard 
                first_name='Jack'
                last_name='Dorsey'
                role='CEO'
                company='Twitter'
                coy_web='www.twitter.com'
                imgSrc={require('../../images/jack.png')}
                coySrc={require('../../images/twitter.jpg')}
                short_des="Twitter is a global social networking platform that allows its users to send and read 140-character messages known as 'tweets.'"
                investors='Union Squares, Benchmark, ...'
            />
        );
    }
}
