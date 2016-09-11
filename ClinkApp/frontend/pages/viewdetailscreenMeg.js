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

export default class DetailScreenMeg extends Component {
    render() {
        return (
            <DetailCard 
                first_name='Meg'
                last_name='Whitman'
                role='President & CEO'
                company='Hewlett-Packard'
                coy_web='http://www.hp.com'
                imgSrc={require('../../images/meg.jpg')}
                coySrc={require('../../images/hp.jpg')}
                short_des='Hewlett-Packard provides products, technologies, software, solutions, and services to individual consumers and SMBs.'
                investors='Keen IO, Mimeo, Cassatt...'
            />
        );
    }
}
