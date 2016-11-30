import React, {Component} from 'react';
import {Animated, Easing, TouchableWithoutFeedback, Text, View, ViewPagerAndroid, Keyboard, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

let TabView = class TabView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      animatedIn: new Animated.Value(1),
      selected: this._getSelectedTab(this.props)
    };
  }

  _getSelectedTab(props) {
    let selectedArray = props.children.map((child) => {
      return child.props.selected;
    });
    return selectedArray.indexOf(true);
  }

  updateTabArea = () => {
    this.setState({hide: true});
  };

  resetTabArea = () => {
    this.setState({hide: false});
  };

  componentDidMount() {
    this._listeners = [
      Keyboard.addListener('keyboardDidShow', this.updateTabArea),
      Keyboard.addListener('keyboardDidHide', this.resetTabArea)
    ];
  }

  componentWillUnmount() {
    this._listeners.forEach(function(/** EmitterSubscription */listener) {
      listener.remove();
    });
  }

  componentWillReceiveProps(nextProps) {
    let selected = this._getSelectedTab(nextProps);
    if (this.selected !== selected) {
      this.setState({
        prevSelected: this.state.selected,
        selected
      });
      this._pager && this._pager.setPageWithoutAnimation(selected);
      this.state.animatedIn.setValue(0);
      Animated.timing(
        this.state.animatedIn,
        {
          toValue: 1,
          duration: 200,
          easing: Easing.inOut(Easing.ease)
        },
      ).start();
    }
  }
  _renderTabs = (child, index) => {
    // let width = null;
    let width = this.screenWidth / this.props.children.length > 168 ? 168 : null;
    let fontSize = (index === this.state.selected) ? this.state.animatedIn.interpolate({inputRange: [0,1], outputRange: [12,14]}) :
        (index === this.state.prevSelected) ? this.state.animatedIn.interpolate({inputRange: [0,1], outputRange: [14,12]}) : 12;
    return (
      <TouchableWithoutFeedback onPress={child.props.onPress} key={child.props.title + '_' + index}>
        <View
          style={[!width && {flex: 1}, {alignItems: 'center', justifyContent: 'center', backgroundColor: this.props.barTintColor, height: 56, width, opacity: 0.89}]}>
          <Icon size={24} style={{color: child.props.selected ? this.props.tintColor : this.props.inactiveTintColor, opacity: child.props.selected ? 1 : 0.38}} name={child.props.icon}/>
          <Animated.Text style={{fontSize, color: child.props.selected ? this.props.tintColor : this.props.inactiveTintColor, opacity: child.props.selected ? 1 : 0.38}}>
            {child.props.title}
          </Animated.Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  render() {
    let children = React.Children.map(this.props.children, (child, idx) => {
     return <View style={{flex: 1}}
       key={child.key}>
       {child}
     </View>;
   });
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ViewPagerAndroid scrollEnabled={false} onPageSelected={this.props.androidPageSelectedOnSwipe} initialPage={this._getSelectedTab(this.props)} ref={(pager) => this._pager = pager} {...this.props} style={{flex: 1}}>
          {children}
        </ViewPagerAndroid>
        {!(this.props.hideOnKeyboardShown && this.state.hide) &&
          <View style={{flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'stretch', justifyContent: 'flex-end'}}>
            <View style={{ backgroundColor: this.props.barTintColor, elevation: 8, flexDirection: 'row', height: 56, justifyContent: 'center' }}>
              {React.Children.map(this.props.children, this._renderTabs)}
            </View>
          </View>
        }
      </View>
    );
  }
};

TabView.Item = class TabViewItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}} key={this.props.title} {...this.props}>
        {React.Children.only(this.props.children)}
      </View>
    );
  }
};

export default TabView;
