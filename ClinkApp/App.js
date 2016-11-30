import React, {
    Component,
} from 'react';
import {
    Modal,
    Reducer,
    Router,
    Scene,
    Actions,
} from 'react-native-router-flux';

import {
    Login,
    Landing,
    Clink,
    MainScreen,
    User,
    Friend,
    DetailScreenTravis,
    DetailScreenEvan,
    DetailScreenElon,
    DetailScreenRichard,
    DetailScreenPadma,
    DetailScreenMeg,
    DetailScreenJackMa,
    DetailScreenAlan,
    DetailScreenMarissa,
    DetailScreenJack,
    DetailScreenKevin,
    EditScreen,
    DetailScreenJohn,
    FullDetailScreenAlan,
    EventPeopleScreen
} from './frontend/pages';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationDrawer from './components/NavigationDrawer';
import TabView from './components/TabView';
import {
    TabIconHome,
    TabIconFriends,
    TabIconRequest,
    TabIconEdit,
} from './components/TabIcon';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NavBarBig from './components/NavBarBig';
import NavBarHome from './components/NavBarHome';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: 'white',
        elevation: 8,
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
    rightButton: {
        position: 'absolute',
        top: 0,
        right:16,
        height: 56,
        marginTop: StatusBar.currentHeight,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 16,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    clinkButton: {
        height: 32,
        width: 32,
        borderRadius: 16,
        elevation: 4,
        backgroundColor: '#48D2A0',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

class App extends Component {
    renderClinkButton() {
        return (
            <View style={styles.rightButton}>
                <TouchableOpacity style={styles.clinkButton} onPress={Actions.clink}>
                    <Icon name="tap-and-play" size={20} style={{color: 'white'}}/>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        return (
            <Router createReducer={reducerCreate}>
                <Scene key="modal" component={Modal} >
                    <Scene key="root" navBar={NavBar}>
                        <Scene key="login" component={Login} hideNavBar initial/>
                        <Scene key="main" navBar={NavBar} component={Home} tabs={true} barTintColor={'#ffffff'} tintColor={'#15B4F1'} inactiveTintColor={'#000000'}>
                            <Scene navBar={NavBarHome} title="Home" key="landing" component={Landing} icon={'home'} sceneStyle={{paddingTop: 136}} initial/>
                            <Scene navBar={NavBar} key="viewfriend" title="Your Clinks" component={Friend} hideNavBar={false} icon={'people'} sceneStyle={{paddingTop: 80}}/>
                            <Scene navBar={NavBar} key="editprofile" title="Your Profile" component={EditScreen} hideNavBar icon={'more-horiz'} hideNavBar={false} sceneStyle={{paddingTop: 80}} />
                        </Scene>
                        <Scene animation='fade' hideNavBar={false} navBar={NavBarBig} key="fullDetails" component={FullDetailScreenAlan} sceneStyle={{paddingTop: 136}} />
                        <Scene hideNavBar={false} navBar={NavBar} title="TechCrunch SF" key="eventPeople" component={EventPeopleScreen} sceneStyle={{paddingTop: 80}} renderRightButton={this.renderClinkButton}/>
                        <Scene key="detailtravis" component={DetailScreenTravis} hideNavBar/>
                        <Scene key="detailjack" component={DetailScreenJack} hideNavBar/>
                        <Scene key="detailkevin" component={DetailScreenKevin} hideNavBar/>
                        <Scene key="detailelon" component={DetailScreenElon} hideNavBar/>
                        <Scene key="detailrichard" component={DetailScreenRichard} hideNavBar/>
                        <Scene key="detailpadma" component={DetailScreenPadma} hideNavBar/>
                        <Scene key="detailmeg" component={DetailScreenMeg} hideNavBar/>
                        <Scene key="detailjackma" component={DetailScreenJackMa} hideNavBar/>
                        <Scene key="detailalan" component={DetailScreenAlan} hideNavBar/>
                        <Scene key="detailjohn" component={DetailScreenJohn} hideNavBar/>
                        <Scene key="detailmarissa" component={DetailScreenMarissa} hideNavBar/>
                    </Scene>
                    <Scene key="clink" component={Clink} hideNavBar/>
                    <Scene key="details" component={DetailScreenAlan} hideNavBar/>

                </Scene>
            </Router>
        );
    }
}

export default App;
