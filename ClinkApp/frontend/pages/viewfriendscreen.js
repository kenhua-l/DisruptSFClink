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
                        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
	                        <Button 
		                        containerStyle={{padding:10, width: 100, overflow:'hidden', borderRadius:4, backgroundColor: 'silver', marginRight: 5, marginLeft:10 }}
		                        style={{fontSize: 10, color: 'lime'}}>
		                                ✔
	                   		</Button>
                   			<Button
		                        containerStyle={{padding:10, width: 100, overflow:'hidden', borderRadius:4, backgroundColor: 'silver', marginLeft: 5}}
		                        style={{fontSize: 10, color: 'red'}}>
		                        	✖
                   			</Button>
                        </View>
                    </View>
                </View>
            </Card>
        </View>);
};

export default class ViewFriendScreenComponent extends Component {
    render () {
        return (
            <ScrollView>
            <Button onPress={Actions.detailjohn}>
                <TempoCard
                    first_name='John'
                    last_name='Zimmer'
                    role='Co-Founder and President'
                    company='Lyft'
                    imgSrc={require('../../images/john.jpg')}
                    coySrc={require('../../images/lyft.jpg')}
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
