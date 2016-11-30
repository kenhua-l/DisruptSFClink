/**
 * Created by andrewhurst on 10/5/15.
 */
import React from 'react';

import {
  Keyboard,
  LayoutAnimation,
  View,
  Platform
} from 'react-native';

// From: https://medium.com/man-moon/writing-modern-react-native-ui-e317ff956f02
const animations = {
  layout: {
    spring: {
      duration: 500,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 200
      }
    },
    easeInEaseOut: {
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY
      },
      update: {
        delay: 100,
        type: LayoutAnimation.Types.easeInEaseOut
      }
    }
  }
};

class KeyboardSpacer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      keyboardSpace: this.props.defaultHeight,
      isKeyboardOpened: false
    };

    this.updateKeyboardSpace = this.updateKeyboardSpace.bind(this);
    this.resetKeyboardSpace = this.resetKeyboardSpace.bind(this);
  }

  componentWillUpdate(props, state) {
    if (state.isKeyboardOpened !== this.state.isKeyboardOpened) {
      LayoutAnimation.configureNext(animations.layout.spring);
    }
  }

  updateKeyboardSpace(frames) {
    if (!frames.endCoordinates) {
      return;
    }

    var keyboardSpace = frames.endCoordinates.height + ('topSpacing' in this.props ? this.props.topSpacing : 0);
    this.setState({
      keyboardSpace: keyboardSpace,
      isKeyboardOpened: true
    }, () => ('onToggle' in this.props ? this.props.onToggle(true, keyboardSpace) : null));
  }

  resetKeyboardSpace() {
    this.setState({
      keyboardSpace: this.props.defaultHeight,
      isKeyboardOpened: false
    }, () => ('onToggle' in this.props ? this.props.onToggle(false, 0) : null));
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      this._listeners = [
        Keyboard.addListener('keyboardDidShow', this.updateKeyboardSpace),
        Keyboard.addListener('keyboardDidHide', this.resetKeyboardSpace)
      ];
    } else {
      this._listeners = [
        Keyboard.addListener('keyboardWillShow', this.updateKeyboardSpace),
        Keyboard.addListener('keyboardWillHide', this.resetKeyboardSpace)
      ];
    }
  }

  componentWillUnmount() {
    this._listeners.forEach(function(/** EmitterSubscription */listener) {
      listener.remove();
    });
  }

  render() {
    return (<View style={[{height: this.state.keyboardSpace, left: 0, right: 0, bottom: 0}, this.props.style]}/>);
  }
}

KeyboardSpacer.defaultProps = {
  defaultHeight: 0,
};

module.exports = KeyboardSpacer;
