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
                first_name='Evan'
                last_name='Spiegel'
                role='CEO'
                company='Snapchat'
                coy_web='https://www.snapchat.com'
                imgSrc={require('../../images/evan.png')}
                coySrc={require('../../images/snapchat.png')}
                short_des='Snapchat is a photo messaging app that allows users to take photos, record videos, add text and drawings, and send them to recipients.'
                investors='Benchmark, Lightspeed Ventu...'
                tcSrc={require('../../images/tc_snapchat.png')}
                title='Snapchat could buy startups without raising money via new credit line'
                starting=' Buying cool is the best way for big companies to stay cool...'
                tcurl="It's been a weird few days for Tesla...."
            />
        );
    }
}
