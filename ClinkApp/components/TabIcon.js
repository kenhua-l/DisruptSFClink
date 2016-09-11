import React, {
  PropTypes,
} from 'react';
import {
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => (
    <Image style={styles.mark} source={require('../../images/C.png')} />
);

  //   style={{ color: props.selected ? 'red' : 'black' }}
  // >
  //   {props.title}
export default TabIcon;
