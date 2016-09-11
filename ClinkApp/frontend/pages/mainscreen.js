import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';

import Button from 'react-native-button';

import {
    Card,
    CardTitle,
    CardImage,
    CardContent,
    CardAction
} from 'react-native-card-view';

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
                    source={{uri: props.imgSrc}}
                />
                <Image 
                    style={styleImage}
                    source={{uri: props.coySrc}}
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
                <TempoCard
                    first_name='Evan'
                    last_name='Spiegel'
                    role='CEO'
                    company='Snapchat'
                    imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                    coySrc='https://getmdl.io/assets/demos/image_card.jpg'
                />
                <TempoCard
                    first_name='Travis'
                    last_name='Kalanick'
                    role='CEO'
                    company='Uber'
                    imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                    coySrc='https://getmdl.io/assets/demos/image_card.jpg'
                />
                <TempoCard 
                    first_name='Elon'
                    last_name='Musk'
                    role='Entrepreneur'
                    company='Space X'
                    imgSrc='https://getmdl.io/assets/demos/image_card.jpg'
                    coySrc='https://getmdl.io/assets/demos/image_card.jpg'
                />
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
