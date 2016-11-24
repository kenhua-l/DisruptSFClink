import React, {
  PropTypes,
} from 'react';
import {
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIconHome = (props) => {
  return (
    <Text>
      <Image style={{
          width: 21,
          height: 30,
          resizeMode: 'contain'
      }} source={require('../images/home.png')} />
    </Text>
  );
};

const TabIconFriends = (props) => {
  return (
    <Text>
      <Image style={{
        width: 45,
        height: 31,
        resizeMode: 'contain'
     }} source={require('../images/pastEvents.png')} />
    </Text>
  );
};

const TabIconRequest = (props) => {
  return (
    <Text>
      <Image style={{
        width: 42,
        height: 32,
        resizeMode: 'contain'
     }} source={require('../images/friends.png')} />
    </Text>
  );
};

const TabIconEdit = (props) => {
  return (
    <Text>
      <Image style={{
        width: 21,
        height: 25,
        resizeMode: 'contain'
     }} source={require('../images/more.png')} />
    </Text>
  );
};
  //   style={{ color: props.selected ? 'red' : 'black' }}
  // >
  //   {props.title}
export { TabIconRequest, TabIconFriends, TabIconHome, TabIconEdit };
