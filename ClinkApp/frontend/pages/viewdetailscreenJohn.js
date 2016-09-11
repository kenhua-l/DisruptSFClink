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

export default class DetailScreenJohn extends Component {
    render() {
        return (
            <DetailCard 
                first_name='John'
                last_name='Zimmer'
                role='Co-Founder and President'
                company='Lyft'
                coy_web='http://lyft.com'
                imgSrc={require('../../images/john.jpg')}
                coySrc={require('../../images/lyft.jpg')}
                short_des='Lyft is reconnecting people and communities through better transportation.'
                investors='General Motors, Rakuten'
            />
        );
    }
}
