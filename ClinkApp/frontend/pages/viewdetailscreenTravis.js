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

export default class DetailScreenTravis extends Component {
    render() {
        return (
            <DetailCard 
                first_name='Travis'
                last_name='Kalanick'
                role='CEO'
                company='Uber'
                coy_web='www.uber.com'
                imgSrc={require('../../images/travis.png')}
                coySrc={require('../../images/uber.png')}
                short_des='Uber, a San Francisco-based technology startup, is innovating at the intersection of lifestyle and logistics. Uber connects riders with safe, reliable, convenient transportation providers at a variety of price-points in cities around the world.'
                investors='Benchmark, Lightspeed Ventu...'
            />
        );
    }
}
