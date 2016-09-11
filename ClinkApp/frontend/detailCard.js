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
import Button from 'react-native-button';

const cardBorder = { borderWidth: 2, borderColor: '#e7e7e7', margin: 3, padding: 7 };
const cardTitle = { fontSize: 36, backgroundColor: 'transparent'};
const styleImage = { height: 150, width: 150 };
const styleProfile = {flex: 1, flexDirection: 'row'};
const subHeadingStyle = { marginTop: 5, fontSize: 24, fontWeight: 'bold'};

export class DetailCard extends React.Component {
    constructor(props){
        super (props);

        this.state = {
            clicked: false
        };
    }
    chnState() {
        this.setState({clicked: true});
    }
    render() {
        const statusText = this.state.clicked ? 'Sending...' : 'Request';
        const props = this.props;
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
                    <Text style={ cardTitle }>
                        TC Article
                    </Text>
                </View>
            </View>
            <View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Button 
                        onPress={this.chnState.bind(this)}
                        containerStyle={{padding:3, width: 200, overflow:'hidden', borderRadius:4, backgroundColor: '#eee', marginRight: 5}}
                        style={{fontSize: 24, color: '#333333'}}>
                            {statusText}
                    </Button>
                </View>
            </View>
        </Card>
        </View>
        </ScrollView>);
    }
};