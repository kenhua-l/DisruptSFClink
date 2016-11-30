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
  Styles
} from '../styles';

import {
    Card,
    CardTitle,
    CardImage,
    CardContent,
    CardAction
} from 'react-native-card-view';
import { subFunction } from '../../crunchBaseParse';

const cardTitle = { fontSize: 25, paddingTop: 15, paddingLeft:20};
const styleImage = { height: 100, width: 100, borderRadius: 50, padding: 5};
const styleSmallImage = {height:45, width:45, borderRadius: 25, zIndex:5, position:'absolute', marginLeft: -35, marginTop:55};
const styleProfile = {backgroundColor: '#E1F5FE', alignSelf:'stretch', flexDirection: 'row'};
const TempoCard = (props) => {
    return (
        <View style={styles.cardBorder}>
            <Card>
                <View style={styleProfile}>
                    <Image
                        style={styleImage}
                        source={props.imgSrc}
                    />
                    <Image
                        style={styleSmallImage}
                        source={props.coySrc}
                    />
                    <View>
                        <Text style={ cardTitle }>
                            {props.first_name} {props.last_name}
                        </Text>
                        <Text style={{paddingLeft:20}}>
                            {props.role}
                        </Text>
                        <Text style={{paddingLeft:20, fontSize:18}}>
                            {props.company}
                        </Text>
                        <Text style={{fontStyle:'italic', paddingLeft:155}}>
                            {props.feet} feet away
                        </Text>
                    </View>
                </View>
            </Card>
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
                    feet='10'
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
                    feet='13'
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
                    feet='16'
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
                    feet='21'
                />
            </Button>
            <Button onPress={Actions.detailmeg}>
                <TempoCard
                    first_name='Meg'
                    last_name='Whitman'
                    role='Presiden & CEO'
                    company='Hewlett-Packard'
                    imgSrc={require('../../images/meg.jpg')}
                    coySrc={require('../../images/hp.jpg')}
                    feet='29'
                />
            </Button>
            <Button onPress={Actions.detailjack}>
                <TempoCard 
                    first_name='Jack'
                    last_name='Dorsey'
                    role='CEO'
                    company='Twitter'
                    imgSrc={require('../../images/jack.png')}
                    coySrc={require('../../images/twitter.jpg')}
                    feet='30'
                />
            </Button>
            <Button onPress={Actions.detailkevin}>
                <TempoCard 
                    first_name='Kevin'
                    last_name='Systrom'
                    role='CEO'
                    company='Instagram'
                    imgSrc={require('../../images/kevin.jpg')}
                    coySrc={require('../../images/insta.jpg')}
                    feet='35'
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
                    feet='77'
                />
            </Button>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardBorder: {
        flex:1,
        alignSelf:'stretch',
        flexDirection:'row',
        backgroundColor: '#E1F5FE', 
        borderBottomColor: '#FEFEFE', 
        borderBottomWidth: 1, 
        left:5
    },
    title: {
        fontSize: 38
    },
    button: {
        marginRight: 10
    },
    card: {
        backgroundColor: '#E1F5FE',
        width: 300
    }
});
