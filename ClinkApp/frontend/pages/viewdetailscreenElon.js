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
                first_name='Elon'
                last_name='Musk'
                role='CEO'
                company='Telsa Motors, SpaceX, So..'
                coy_web='www.tesla.com'
                imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                coySrc='https://getmdl.io/assets/demos/image_card.jpg'
                short_des='Tesla Motors was started by a group of Silicon Valley entrepreneurs and strives to create a revolution.'
                investors='Benchmark, Lightspeed Ventu...'
            />
        );
    }
}
