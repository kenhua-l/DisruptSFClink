import React from 'react';
import PropTypes from 'prop-types';
import {Animated, Dimensions, PixelRatio, Image, StyleSheet, Text, TouchableOpacity, View, StatusBar, ProgressBarAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgWidth: null,
            loading: true
        };
    }
    componentDidMount() {
        setTimeout(()=>{this.setState({loading: false})}, 2000);
    }
    componentWillMount(){
        const state = this.props.navigationState;
        this._renderRightButton = this._renderRightButton.bind(this);
        this._renderBackButton = this._renderBackButton.bind(this);
        this._renderLeftButton = this._renderLeftButton.bind(this);
        this._renderTitle = this._renderTitle.bind(this);
    }
    relayout = (s) => {
        // this.setState({imgWidth: s.nativeEvent.layout.width});
    };

    render() {
        const state = this.props.navigationState;
        const child = state.children[state.index];
        let selected = state.children[state.index];
        while (selected.hasOwnProperty('children')) {
            selected = selected.children[selected.index];
        }
        if (selected.component && selected.component.renderNavigationBar){
            return selected.component.renderNavigationBar({...this.props,...selected});
        }
        if (state.hideNavBar || child.hideNavBar || selected.hideNavBar){
            console.log(`SKIPPING renderHeader because ${child.key} hideNavBar === true`);
            return null;
        }

        let renderLeftButton = selected.renderLeftButton && selected.renderLeftButton.bind(this, selected) || this._renderLeftButton;
        let renderRightButton = selected.renderRightButton && selected.renderRightButton.bind(this, selected) || this._renderRightButton;
        let renderBackButton = selected.renderBackButton && selected.renderBackButton.bind(this, selected) || this._renderBackButton;
        return (
            // <Image source={require('../Assets/img/bg.png')} style={styles.bgImg}/>
            <View onLayout={this.relayout} style={[styles.wrapper, this.props.navigationBarStyle]}>
                <StatusBar
                  translucent
                  backgroundColor="transparent"
                />
                <Image source={require('../images/bg.png')} style={[styles.bgImg, {width: this.state.imgWidth}]}/>
                <Animated.View
                    style={[styles.header, this.props.navigationBarStyle, state.navigationBarStyle, selected.navigationBarStyle]}>
                    {state.children.map(this._renderTitle, this)}
                    {renderBackButton() || renderLeftButton()}
                    {renderRightButton()}
                </Animated.View>
            </View>
        );
    }

    _renderBackButton() {
        const drawer = this.context.drawer;
        const state = this.props.navigationState;
        const childState = state.children[state.index];
        let buttonIcon = childState.backbuttonIconStyle || state.backbuttonIconStyle || this.props.backbuttonIconStyle || 'arrow-back';
        let onPress = Actions.pop;

        if (state.index === 0) {
            if (!!drawer && typeof drawer.toggle === 'function') {
                buttonIcon = state.drawerImage || 'menu';
                onPress = drawer.toggle;
            } else {
                return null;
            }
        }

        let text = childState.backTitle ? <Text style={[styles.barBackButtonText, this.props.backButtonTextStyle, state.backButtonTextStyle, childState.backButtonTextStyle]}>
            {childState.backTitle}
        </Text> : null;

        return (
            <TouchableOpacity style={[styles.backButton, state.leftButtonStyle]} onPress={onPress}>
                <Icon size={24} name={buttonIcon} style={[styles.backbuttonIconStyle, this.props.leftButtonIconStyle, state.barButtonIconStyle, state.leftButtonIconStyle, childState.leftButtonIconStyle]}/>
                {text}
            </TouchableOpacity>
        );
    }

    /* eslint-disable no-bitwise */
    _renderRightButton() {
        // function tryRender(state) {
        //     if (state.onRight && (state.rightTitle || state.rightButtonImage)) {
        //         return (
        //             <TouchableOpacity style={[styles.rightButton, state.rightButtonStyle]}
        //                               onPress={state.onRight.bind(null, state)}>
        //                 {state.rightTitle && <Text style={[styles.barRightButtonText, state.rightButtonTextStyle]}>{state.rightTitle}</Text>}
        //                 {state.rightButtonImage && <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}><Image source={state.rightButtonImage} style={state.rightButtonIconStyle}/></View>}
        //             </TouchableOpacity>
        //         );
        //     }
        //     if ((!!state.onRight ^ !!(state.rightTitle || state.rightButtonImage))) {
        //         console.warn('Both onRight and rightTitle/rightButtonImage must be specified for the scene: ' + state.name);
        //     }
        // }
        const state = this.props.navigationState;
        return (
            <View style={[styles.rightButton, state.rightButtonStyle]}>
            {this.state.loading &&
                <ProgressBarAndroid styleAttr="Inverse" style={{height: 24, width: 24, color: 'white'}}/>
                }
            {!this.state.loading &&
            <TouchableOpacity style={styles.rightright} onPress={Actions.eventPeople}>
                <View>
                    <Text style={styles.topRight}>
                    Total Clinkers
                    </Text>
                    <Text style={styles.bottomRight}>
                    45 persons
                    </Text>
                </View>
                <View style={styles.chevWrapper}>
                    <Image source={require("../images/forward.png")} style={styles.rightChevron}/>
                </View>
            </TouchableOpacity>
            }
            </View>
        );
    }

    /* eslint-disable no-bitwise */
    _renderLeftButton() {
        // function tryRender(state) {
        //     if (state.onLeft && (state.leftTitle || state.leftButtonImage)){
        //         return (
        //             // <TouchableOpacity style={[styles.leftButton, state.leftButtonStyle]} onPress={state.onLeft.bind(null, state)}>
        //             //     {state.leftTitle && <Text style={[styles.barLeftButtonText, state.leftButtonTextStyle]}>{state.leftTitle}</Text>}
        //             //     {state.leftButtonImage && <View style={{flex:1, justifyContent:'center', alignItems:'flex-start'}}><Image source={state.leftButtonImage} style={state.leftButtonIconStyle}/></View>}
        //             // </TouchableOpacity>
        //         );
        //     }
        //     if ((!!state.onLeft ^ !!(state.leftTitle || state.leftButtonImage))) {
        //         console.warn('Both onLeft and leftTitle/leftButtonImage must be specified for the scene: ' + state.name);
        //     }
        // }
        const state = this.props.navigationState;
        return (
            <View style={[styles.leftButton, state.leftButtonStyle]}>
                {this.state.loading &&
                 <View>
                    <Text style={styles.toptop}>
                    You are not at an event.
                    </Text>
                    <Text style={styles.toptop}>
                    Finding nearby events.
                    </Text>
                </View>
                }
                {!this.state.loading &&
                    <View>
                <Text style={styles.topLeft}>
                You are at
                </Text>
                <Text style={styles.bottomLeft}>
                TechCrunch SF
                </Text>
                </View>
                }
            </View>
        );
    }

    _renderTitle(childState, index:number) {
        const title = childState.renderTitle ?
            childState.renderTitle() : this.props.getTitle ? this.props.getTitle(childState) : childState.title;
        return (
            <View/>
        );
    }

}


NavBar.contextTypes = {
  drawer: PropTypes.object
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: -4,
        left: -4,
        marginLeft: 4,
        marginRight: 4,
        elevation: 4,
        height: 136,
    },
    bgImg: {
        position: 'absolute',
        justifyContent: 'center',
        right: -10,
        left: -10,
        marginLeft: 10,
        marginRight: 10,
        bottom: 0,
        top: 0,
        resizeMode: 'cover',
        height: 136,
        width: 0
    },
    title: {
        position: 'absolute',
        justifyContent: 'center',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'transparent',
    },
    titleText: {
        marginTop: StatusBar.currentHeight,
        marginLeft: 72,
        textAlign: 'left',
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        color: 'rgba(255, 255, 255, 1)',
    },
    header: {
        height: 112,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },
    backButton: {
        height: 112,
        width: 72,
        marginTop: StatusBar.currentHeight,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    rightButton: {
        position: 'absolute',
        flex: 1,
        top: StatusBar.currentHeight + 16,
        right: 16,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    rightright: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'rgba(24, 92, 164, 0.14)',
        borderRadius: 4,
        paddingTop: 16,
        paddingLeft: 24 ,
        paddingBottom: 16,
        paddingRight: 16,
    },
    leftButton: {
        height: 112,
        marginTop: StatusBar.currentHeight,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        justifyContent: 'center',
    },
    barRightButtonText: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'right',
        fontSize: 17,
    },
    barBackButtonText: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'left',
        fontSize: 17,
        paddingLeft: 6,
    },
    barLeftButtonText: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'left',
        fontSize: 17,
    },
    backbuttonIconStyle: {
        height: 24,
        fontSize: 24,
        color: 'rgba(255, 255, 255, 1)',
    },
    rightButtonIconStyle: {
        color: 'rgba(255, 255, 255, 1)',
    },
    topLeft: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
        paddingBottom: 4,
    },
    toptop: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
    },
    bottomLeft: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 22
    },
    topRight: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
        paddingBottom: 4,
    },
    bottomRight: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 16,
    },
    chevWrapper: {
        paddingLeft: 32,
        alignItems: 'flex-end',
    },
    rightChevron: {
        height: 14,
        marginTop: 24,
    }
});
