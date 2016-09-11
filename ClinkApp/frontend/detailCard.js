import React from 'react';

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

import Hyperlink from 'react-native-hyperlink';

const cardBorder = { borderWidth: 2, borderColor: '#e7e7e7', margin: 3, padding: 7 };
const cardTitle = { fontSize: 36, backgroundColor: 'transparent'};
const styleImage = { height: 150, width: 150 };
const styleTCImage = { height: 100, width: 100 };
const styleTC = {flex: 1, flexDirection: 'row', marginTop: 10};
const styleTCCard = {marginTop: 10, fontSize: 16, backgroundColor: 'transparent', marginLeft: 10};
const styleTCCardSub = {marginTop: 10, fontSize: 12, backgroundColor: 'transparent', marginLeft: 10};
const styleProfile = {flex: 1, flexDirection: 'row'};
const subHeadingStyle = { marginTop: 5, fontSize: 24, fontWeight: 'bold'};
const textWrap = {flexDirection: 'column', flex: 0.8}

export const DetailCard = (props) => {
    return (
        <ScrollView>
        <View style={cardBorder}>
        <Card>
            <View style={styleProfile}>
                <Image 
                    style={styleImage}
                    source={props.imgSrc}
                />
            </View>
            <View>
                <View>
                    <Text style={ cardTitle }>
                        {props.first_name} {props.last_name}<Text style={{fontSize: 24}}>, {props.role}</Text>
                    </Text>
                </View>
                <View>
                </View>
            </View>
            <View style={{margin: 20}}>
            </View>
            <View style={styleProfile}>
                <Image 
                    style={styleImage}
                    source={props.coySrc}
                />
            </View>
            <View>
                <View>
                    <Text style={subHeadingStyle}>
                         {props.company}
                    </Text>
                </View>
                <View>
                    <Text style={ {fontSize: 18}  }>
                        {props.short_des}
                    </Text>
                    <Text style={subHeadingStyle}>
                        Investors
                    </Text>
                    <Text style={ {fontSize: 18} }>
                        {props.investors}
                    </Text>
                </View>
                <View>    
                    <Text style={subHeadingStyle}>
                        News
                    </Text>
                    
                        <View style={styleTC}>
                            <Image 
                                style={styleTCImage}
                                source={props.tcSrc}
                            />
                            <View style={textWrap}>
                            
                                <Text style={ styleTCCard }>
                                    {props.title}
                                </Text>
                                <Text style={ styleTCCardSub }> {props.starting}</Text>
                            </View>
                        </View>  
                </View>
            </View>
        </Card>
        </View>
        </ScrollView>);
};