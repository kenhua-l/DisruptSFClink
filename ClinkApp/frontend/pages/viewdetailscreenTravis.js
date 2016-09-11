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

export default class DetailScreenTravis extends Component {
    render() {
        return (
            <DetailCard 
                first_name='Travis'
                last_name='Kalanick'
                role='CEO'
                company='Uber'
                coy_web='www.uber.com'
                imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                coySrc='https://getmdl.io/assets/demos/image_card.jpg'
                short_des='Snapchat is a photo messaging app that allows users to take photos, record videos, add text and drawings, and send them to recipients.'
                investors='Benchmark, Lightspeed Ventu...'
            />
        );
    }
}
