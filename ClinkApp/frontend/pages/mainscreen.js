import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';

import Button from 'react-native-button';

import { Actions } from 'react-native-router-flux';

import {
    Card,
    CardTitle,
    CardImage,
    CardContent,
    CardAction
} from 'react-native-card-view';
import { subFunction } from '../../crunchBaseParse';

const cardBorder = { borderWidth: 2, borderColor: '#e7e7e7', margin: 3, padding: 7 };
const cardTitle = { fontSize: 36, backgroundColor: 'transparent'};
const styleImage = { height: 150, width: 150 };
const styleProfile = {flex: 1, flexDirection: 'row'};
const TempoCard = (props) => {
    return (
        <View style={cardBorder}>
        <Card>
            <View style={styleProfile}>
                <Image 
                    style={styleImage}
                    source={props.imgSrc}
                />
                <Image 
                    style={styleImage}
                    source={props.coySrc}
                />
            </View>
        </Card>
            <View>
                <View>
                <Text style={ cardTitle }>
                    {props.first_name} {props.last_name}
                </Text>
                </View>
                <View>
                <Text>
                    Role: {props.role}
                </Text>
                <Text>
                    Company: {props.company}
                </Text>
                </View>
            </View>
        </View>);
};
export default class CardExample extends Component {
    render () {
        return (
            <ScrollView>
            <Button onPress={Actions.detailevan}>
                <TempoCard
                    first_name='Evan'
                    last_name='Spiegel'
                    role='CEO'
                    company='Snapchat'
                    imgSrc={require('../../images/evan.png')}
                    coySrc={require('../../images/snapchat.png')}
                />
            </Button>
            <Button onPress={Actions.detailtravis}>
                <TempoCard
                    first_name='Travis'
                    last_name='Kalanick'
                    role='CEO'
                    company='Uber'
                    imgSrc={require('../../images/travis.png')}
                    coySrc={require('../../images/uber.png')}
                />
            </Button>
            <Button onPress={Actions.detailpadma}>
                <TempoCard
                    first_name='Padmasree'
                    last_name='Warrior'
                    role='CEO'
                    company='NextEV'
                    imgSrc={require('../../images/padma.png')}
                    coySrc={require('../../images/nextev.png')}
                />
            </Button>
            <Button onPress={Actions.detailelon}>
                <TempoCard 
                    first_name='Elon'
                    last_name='Musk'
                    role='Entrepreneur'
                    company='Space X'
                    imgSrc={require('../../images/elon.png')}
                    coySrc={require('../../images/telsa.png')}
                />
            </Button>
            <Button onPress={Actions.detailmeg}>
                <TempoCard
                    first_name='Meg'
                    last_name='Hendricks'
                    role='Presiden & CEO'
                    company='Hewlett-Packard'
                    imgSrc={require('../../images/meg.jpg')}
                    coySrc={require('../../images/hp.jpg')}
                />
            </Button>
            <Button onPress={Actions.detailrichard}>
                <TempoCard
                    first_name='Richard'
                    last_name='Hendricks'
                    role='CEO'
                    company='Pied Piper'
                    imgSrc={require('../../images/richard.png')}
                    coySrc={require('../../images/piedpiper.png')}
                />
            </Button>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardBorder: {
        borderWidth: 10,
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent'
    },
    button: {
        marginRight: 10
    },
    card: {
        width: 300
    }
});
