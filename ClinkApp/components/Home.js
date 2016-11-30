import React, {Component} from 'react';
import {View, Keyboard, Platform} from 'react-native';
import {DefaultRenderer, Actions} from 'react-native-router-flux';

import TabView from './TabView';

export default class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hide: false
      };
    }
    updateTabArea = () => {
      this.setState({hide: true});
    };

    resetTabArea = () => {
      this.setState({hide: false});
    };

    componentDidMount() {
      if (Platform.OS === 'android') {
        this._listeners = [
          Keyboard.addListener('keyboardDidShow', this.updateTabArea),
          Keyboard.addListener('keyboardDidHide', this.resetTabArea)
        ];
      } else {
        this._listeners = [
          Keyboard.addListener('keyboardWillShow', this.updateTabArea),
          Keyboard.addListener('keyboardWillHide', this.resetTabArea)
        ];
      }
    }

    componentWillUnmount() {
      this._listeners.forEach(function(/** EmitterSubscription */listener) {
        listener.remove();
      });
    }


    onSelect(el){
        if (!Actions[el.sceneKey]){
            throw new Error('No action is defined for name=' + el.name + ' actions:' + JSON.stringify(Object.keys(Actions)));
        }
        Actions[el.sceneKey]();
    }

    androidPageSelectedOnSwipe = (ev) => {
      const state = this.props.navigationState;
      const position = (ev.nativeEvent.position);
      Actions[state.children[position].name]();
    };

    _renderScene(props) {
      return <DefaultRenderer onNavigate={this.props.onNavigate} key={props.key} navigationState={props} />;
    }

    render(){
        const state = this.props.navigationState;
        const selected = state.children[state.index];
        // const hideTabBar = state.hideTabBar || selected.hideTabBar || this.state.hide;
        return (
          <View style={{flex:1}}>
            <TabView testID="TABS"
            hideOnKeyboardShown
            androidPageSelectedOnSwipe={this.androidPageSelectedOnSwipe}
            tintColor={state.tintColor}
            barTintColor={state.barTintColor}>
              {
                state.children.map((child, index) =>
                  <TabView.Item testID={String(index)} {...child} key={child.key}
                  icon={child.icon}
                  selected={state.index === index}
                  title={child.title}
                  onPress={this.onSelect.bind(this, child)}
                  >
                    {this._renderScene(child)}
                  </TabView.Item>
                )
              }
            </TabView>

          </View>
        );
    }
}
