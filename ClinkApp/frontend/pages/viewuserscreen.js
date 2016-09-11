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
                        <Text style={{fontStyle:'italic', paddingLeft:100}}>
                            Met at {props.met}
                        </Text>
                    </View>
                </View>
            </Card>
        </View>);
};

export default class ViewUserScreenComponent extends Component {
    render () {
        return (
            <ScrollView>
            <Button onPress={Actions.detailjackma}>
                <TempoCard
                    first_name='Jack'
                    last_name='Ma'
                    role='Founder / Executive Chairman'
                    company='Alibaba'
                    imgSrc={require('../../images/jackma.png')}
                    coySrc={require('../../images/alibaba.png')}
                    met='Stanford'
                />
            </Button>
            <Button onPress={Actions.detailmarissa}>
                <TempoCard
                    first_name='Marissa'
                    last_name='Mayer'
                    role='CEO & President'
                    company='Yahoo!'
                    imgSrc={require('../../images/marissa.png')}
                    coySrc={require('../../images/yahoo.jpg')}
                    met='DLD11 Munich'
                />
            </Button>
            <Button onPress={Actions.detailalan}>
                <TempoCard
                    first_name='Alan'
                    last_name='Sharp-Paul'
                    role='Cofounder & Co-CEO'
                    company='UpGuard'
                    imgSrc={require('../../images/alan.jpg')}
                    coySrc={require('../../images/upguard.png')}
                    met='Startmate'
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
