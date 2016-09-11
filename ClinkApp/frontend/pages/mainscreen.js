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
                        source={{uri: props.imgSrc}}
                    />
                    <Image 
                        style={styleSmallImage}
                        source={{uri: props.coySrc}}
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
                            10 feet away
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
                    imgSrc='../../images/evan.png'
                    coySrc='../../images/snapchat.png'
                />
            </Button>
            <Button onPress={Actions.detailtravis}>
                <TempoCard
                    first_name='Travis'
                    last_name='Kalanick'
                    role='CEO'
                    company='Uber'
                    imgSrc='../../images/travis.png'
                    coySrc='../../images/uber.png'
                />
            </Button>
            <Button onPress={Actions.detailelon}>
                <TempoCard 
                    first_name='Elon'
                    last_name='Musk'
                    role='Entrepreneur'
                    company='Space X'
                    imgSrc='../../images/elon.png'
                    coySrc='../../images/telsa.png'
                />
            </Button>
            <Button onPress={Actions.detailelon}>
                <TempoCard
                    first_name='Evan'
                    last_name='Spiegel'
                    role='CEO'
                    company='Snapchat'
                    imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                    coySrc='https://getmdl.io/assets/demos/image_card.jpg'
                />
            </Button>
            <Button onPress={Actions.detailelon}>
                <TempoCard
                    first_name='Travis'
                    last_name='Kalanick'
                    role='CEO'
                    company='Uber'
                    imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                    coySrc='https://getmdl.io/assets/demos/image_card.jpg'
                />
            </Button>
            <Button onPress={Actions.detailelon}>
                <TempoCard 
                    first_name='Elon'
                    last_name='Musk'
                    role='Entrepreneur'
                    company='Space X'
                    imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                    coySrc='https://getmdl.io/assets/demos/image_card.jpg'
                />
            </Button>
            <Button onPress={Actions.detailelon}>
                <TempoCard
                    first_name='Evan'
                    last_name='Spiegel'
                    role='CEO'
                    company='Snapchat'
                    imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                    coySrc='https://getmdl.io/assets/demos/image_card.jpg'
                />
            </Button>
            <Button onPress={Actions.detailelon}>
                <TempoCard
                    first_name='Travis'
                    last_name='Kalanick'
                    role='CEO'
                    company='Uber'
                    imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                    coySrc='https://getmdl.io/assets/demos/image_card.jpg'
                />
            </Button>
            <Button onPress={Actions.detailelon}>
                <TempoCard 
                    first_name='Elon'
                    last_name='Musk'
                    role='Entrepreneur'
                    company='Space X'
                    imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                    coySrc='https://getmdl.io/assets/demos/image_card.jpg'
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
