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
          width: 24,
          height: 24
      }} source={require('../images/home.png')} />
    </Text>
  );
};

const TabIconFriends = (props) => {
  return (
    <Text>
      <Image style={{
          width: 24,
          height: 24
     }} source={require('../images/friends.png')} />
    </Text>
  );
};

const TabIconRequest = (props) => {
  return (
    <Text>
      <Image style={{
          width: 24,
          height: 24
     }} source={require('../images/request.png')} />
    </Text>
  );
};
  //   style={{ color: props.selected ? 'red' : 'black' }}
  // >
  //   {props.title}
export { TabIconRequest, TabIconFriends, TabIconHome };
