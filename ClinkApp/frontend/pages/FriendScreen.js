import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pulse from '../../components/Pulse';
import ModalBox from '../../components/ModalBox';
import { subFunction } from '../../crunchBaseParse';

import { DetailCard } from '../detailCard';
const cardTitle = { fontSize: 25, paddingTop: 15, paddingLeft:20};
const styleImage = { height: 100, width: 100, borderRadius: 50, padding: 5};
const styleSmallImage = {height:45, width:45, borderRadius: 25, zIndex:5, position:'absolute', marginLeft: -35, marginTop:55};
const styleProfile = {backgroundColor: '#E1F5FE', alignSelf:'stretch', flexDirection: 'row'};

export default class Clink extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  onExpandModalAndOpenFullProfile() {
  }
  render () {
      return (
        <ScrollView style={{flex:1 }}>
          <TouchableWithoutFeedback onPress={Actions.details}>
            <View style={styles.wrapper}>
              <Image style={{ width: Dimensions.get('window').width, resizeMode: 'contain'}} source={require("../../images/YourClinks.png")}/>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: 'white',
      flex: 1,
      height: Dimensions.get('window').height - 120 ,
      justifyContent: 'center',
    },
});


