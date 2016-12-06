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
    StatusBar
} from 'react-native';

import { connect } from 'react-redux';

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
import { subFunction } from '../../crunchBaseParse';

const cardTitle = { fontSize: 25, paddingTop: 15, paddingLeft:20};
const styleImage = { height: 100, width: 100, borderRadius: 50, padding: 5};
const styleSmallImage = {height:45, width:45, borderRadius: 25, zIndex:5, position:'absolute', marginLeft: -35, marginTop:55};
const styleProfile = {backgroundColor: '#E1F5FE', alignSelf:'stretch', flexDirection: 'row'};

class Clink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clinkFound: 0,
      clinkState: 'find', //find, clinking, done
      offset: new Animated.Value(Dimensions.get('window').height),
      clinkedAnimate: new Animated.Value(0),
    };
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onCloseModalAndOpenProfile = this.onCloseModalAndOpenProfile.bind(this);
    this.onClink = this.onClink.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    Animated.timing(this.state.offset, {
     duration: 500,
     toValue: 0,
     easing: Easing.elastic(1)
    }).start();
    setTimeout(() => {
      this.setState({clinkFound: this.state.clinkFound + 1});
    }, 3000);
  }
  reset() {
    this.setState({
      clinkFound: 0,
      clinkState: 'find', //find, clinking, done
      clinkedAnimate: new Animated.Value(0),
    });
    setTimeout(() => {
      this.setState({clinkFound: this.state.clinkFound + 1});
    }, 20000);
  }
  onCloseModal() { // you may want to do something like this if you have a button to dismiss the modal
    Animated.timing(this.state.offset, {
        duration: 250,
        toValue:  Dimensions.get('window').height
    }).start(Actions.pop);
  }
  onCloseModalAndOpenProfile() { // you may want to do something like this if you have a button to dismiss the modal
    Animated.timing(this.state.offset, {
        duration: 250,
        toValue:  Dimensions.get('window').height
    }).start(() => {
      Actions.pop();
      setTimeout(() => {
        Actions.details();
      }, 200);
    });
  }
  onClink() {
    this.setState({
      clinkState: 'clinking',
    });
    Animated.timing(this.state.clinkedAnimate, {
      duration: 500,
      toValue: 1,
      easing:  Easing.elastic(1.5)
    }).start();
    setTimeout(() => {
      Animated.timing(this.state.clinkedAnimate, {
        duration: 500,
        toValue: 0,
        easing:  Easing.out(Easing.elastic(1.5))
      }).start(() => {
        this.setState({
          clinkState: 'done'
        });
      });
    }, 2000);
  }
  render () {
      return (
        <View style={styles.wrapper}>
          <Animated.View style={{flex: 1, transform: [{translateY: this.state.offset}]}}>
              <View style={styles.blur}>
                {(this.state.clinkFound === 0) &&
                  <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.header}>Waiting for a Clink...</Text>
                    <Text style={styles.subheader}>{this.state.clinkFound} FOUND</Text>
                  </View>
                }
                {(this.state.clinkFound === 1) &&
                  <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.header}>{this.state.user === 'individual' ? "Alan Sharp-Paul" : "Alexey Matyushkin"}</Text>
                    {(this.state.clinkState !== 'find') ?
                    <Text style={styles.subheader}>CLINKED</Text>:
                    <Text style={styles.subheader}>{this.state.clinkFound} FOUND</Text>
                    }
                  </View>
                }
                  <View style={{marginTop: 32, marginBottom: 32, height: 300, alignItems: 'center', justifyContent: 'center'}}>
                    {(this.state.clinkState === 'find') &&
                      <Pulse color='#15B4F1' numPulses={5} diameter={300} top={0} speed={40} duration={1500}/>
                    }
                    {(this.state.clinkFound === 1) &&
                      <Image source={this.state.user === 'individual' ? require('../../images/alan.jpg') : require('../../images/jack.png')} style={{height: 160, width: 160, borderRadius: 80}}/>
                    }
                    {(this.state.clinkState === 'clinking') &&
                      <View style={{width: 180, marginLeft: -10, position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, left: 0, bottom: 0, right: 0}}>
                        <Animated.View style={[
                          {height: 180, width: 180, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(72, 210, 160, 0.4)', borderWidth : 10, borderColor: '#48D2A0', borderRadius: 90},
                          {transform: [{scale: this.state.clinkedAnimate}]}
                          ]}>
                          <Icon name="check" size={160} style={{color: '#48D2A0'}}/>
                        </Animated.View>
                      </View>
                    }
                  </View>
                  <View style={{marginTop: 32, marginBottom: 32, height: 60, alignItems: 'center', justifyContent: 'center'}}>
                  {(this.state.clinkState === 'find' && this.state.clinkFound === 1) &&
                    <TouchableOpacity onPress={this.onClink} style={{width: 200, alignItems: 'center', justifyContent: 'center', paddingLeft: 48, paddingRight: 48, paddingTop: 16, paddingBottom: 16, backgroundColor: '#48D2A0', borderRadius: 4}}>
                      <Text style={{color: 'white', fontWeight: '500'}}>
                        CLINK {this.state.user === 'individual' ? "ALAN" : "ALEXEY"}
                      </Text>
                    </TouchableOpacity>
                  }
                  {(this.state.clinkState === 'find') &&
                    <TouchableOpacity onPress={this.onCloseModal} style={{width: 200, alignItems: 'center', justifyContent: 'center', paddingLeft: 48, paddingRight: 48, paddingTop: 16, paddingBottom: 16, marginTop:8, backgroundColor: '#DD3217', borderRadius: 4}}>
                      <Text style={{color: 'white', fontWeight: '500'}}>
                        CANCEL
                      </Text>
                    </TouchableOpacity>
                  }
                  {(this.state.clinkState !== 'find') &&
                    <TouchableOpacity onPress={this.onCloseModalAndOpenProfile} style={{width: 200, alignItems: 'center', justifyContent: 'center', paddingLeft: 48, paddingRight: 48, paddingTop: 16, paddingBottom: 16, marginTop:8, backgroundColor: '#48D2A0', borderRadius: 4}}>
                      <Text style={{color: 'white', fontWeight: '500'}}>
                        VIEW PROFILE
                      </Text>
                    </TouchableOpacity>
                  }
                  {(this.state.clinkState !== 'find') &&
                    <TouchableOpacity onPress={this.reset} style={{width: 200, alignItems: 'center', justifyContent: 'center', paddingLeft: 48, paddingRight: 48, paddingTop: 16, paddingBottom: 16, marginTop:8, backgroundColor: '#15B4F1', borderRadius: 4}}>
                      <Text style={{color: 'white', fontWeight: '500'}}>
                        CLINK MORE
                      </Text>
                    </TouchableOpacity>
                  }
                  </View>
              </View>
          </Animated.View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    blur: {
      flex: 1,
      backgroundColor: 'rgba(53, 53, 53, 0.9)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      backgroundColor: 'transparent',
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    },
    secondRowWrapper: {
        flexDirection: 'row'
    },
    greenButton: {
        width: Dimensions.get('window').width - 32,
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        height: 128,
        borderRadius: 4,
        backgroundColor: '#48D2A0',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    blueButton: {
        width: (Dimensions.get('window').width - 48)/2,
        backgroundColor: '#15B4F1',
        marginTop: 16,
        marginLeft: 16,
        height: 128,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    blueButtonText: {
        color: 'white',
        marginTop: 10,
        fontWeight: '500',
        fontSize: 20,
    },
    blueButtonImg: {
        height: 48,
        resizeMode: 'contain'
    },
    buttonImg: {
        height: 56,
        resizeMode: 'contain'
    },
    clinkImg: {
        marginTop: 10,
        height: 24,
        resizeMode: 'contain'
    },
    header: {
      color: 'white',
      fontSize: 24,
    },
    subheader: {
      marginTop: 8,
      color: 'white',
      fontSize: 16,
      fontWeight: "200",
    }
});
export default connect(state => ({
    state: state.app,
  })
)(Clink);
