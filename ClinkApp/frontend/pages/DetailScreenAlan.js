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

export default class DetailScreenAlan extends Component {
    render() {
        return (
            <DetailCard 
                first_name='Alan'
                last_name='Sharp-Paul'
                role='Cofounder & Co-CEO'
                company='UpGuard'
                coy_web='https://www.upguard.com/'
                imgSrc={require('../../images/alan.jpg')}
                coySrc={require('../../images/upguard.png')}
                short_des="UpGuard is the company behind CSTAR, the world's only comprehensive and actionable cybersecurity preparedness score for enterprises."
                investors='500 Startups, August Capital, Scott Petry...'
                tcSrc={require('../../images/tc_scriptrock.jpg')}
                title='ScriptRock Scores $8.7M In Funding According To SEC Filing'
                starting='IT DevOps monitoring company ScriptRock has recently received 8.7 million...'
                tcurl='http://techcrunch.com/2014/08/14/scriptrock-scores-8-7m-in-funding-according-to-sec-filing/'
            />
        );
    }
}
