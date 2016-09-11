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
                first_name='Kevin'
                last_name='Systrom'
                role='CEO'
                company='Instagram'
                coy_web='https://www.instagram.com'
                imgSrc={require('../../images/kevin.jpg')}
                coySrc={require('../../images/insta.jpg')}
                short_des="Instagram is a free photo sharing application that enables its users to take photos, apply filters, and share them on social networks."
                investors='Baseline Ventures, Sequoia Capital'
            />
        );
    }
}
