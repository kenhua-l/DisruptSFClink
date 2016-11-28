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

export default class DetailScreenJackMa extends Component {
    render() {
        return (
            <DetailCard 
                first_name='Jack'
                last_name='Ma'
                role='Founder / Executive Chairman'
                company='Alibaba'
                coy_web='http://www.alibaba.com'
                imgSrc={require('../../images/jackma.png')}
                coySrc={require('../../images/alibaba.png')}
                short_des='Alibaba is a Chinese e-commerce company operating online marketplaces for both international and domestic China trade.'
                investors='Azia Funds, Goldman Sachs...'
            />
        );
    }
}
