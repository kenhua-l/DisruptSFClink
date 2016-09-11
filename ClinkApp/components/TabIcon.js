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

const TabIcon = (props) => (
    <Image style={{
        width: 200,
        height: 200
    }} source={require(`../images/${props.imgSrc}`)} />
);

  //   style={{ color: props.selected ? 'red' : 'black' }}
  // >
  //   {props.title}
export default TabIcon;
