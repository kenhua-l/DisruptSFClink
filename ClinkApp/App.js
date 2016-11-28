import React, {
    Component,
} from 'react';
import {
    Modal,
    Reducer,
    Router,
    Scene,
} from 'react-native-router-flux';

import {
    Login,
    Landing,
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
    DetailScreenJohn
} from './frontend/pages';
import {
    Text,
    StyleSheet,
} from 'react-native';

import NavigationDrawer from './components/NavigationDrawer';
import TabView from './components/TabView';
import {
    TabIconHome,
    TabIconFriends,
    TabIconRequest,
    TabIconEdit,
} from './components/TabIcon';
import NavBar from './components/NavBar';
import NavBarBig from './components/NavBarBig';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

class App extends Component {
    render() {
        return (
            <Router createReducer={reducerCreate}>
                <Scene key="root">
                    <Scene key="login" component={Login} hideNavBar initial/>
                    <Scene key="tabbar" >
                        <Scene
                        key="main"
                        navBar={NavBar}
                        tabs
                        tabBarStyle={styles.tabBarStyle}
                        tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                        >
                            <Scene navBar={NavBarBig} key="landing" component={Landing} icon={TabIconHome} initial/>
                            <Scene navBar={NavBar} key="mainscreens" component={MainScreen} hideNavBar icon={TabIconFriends}/>
                            <Scene navBar={NavBar} key="detailevan" component={DetailScreenEvan} hideNavBar/>
                            <Scene navBar={NavBar} key="detailtravis" component={DetailScreenTravis} hideNavBar/>
                            <Scene navBar={NavBar} key="detailjack" component={DetailScreenJack} hideNavBar/>
                            <Scene navBar={NavBar} key="detailkevin" component={DetailScreenKevin} hideNavBar/>
                            <Scene navBar={NavBar} key="detailelon" component={DetailScreenElon} hideNavBar/>
                            <Scene navBar={NavBar} key="detailrichard" component={DetailScreenRichard} hideNavBar/>
                            <Scene navBar={NavBar} key="detailpadma" component={DetailScreenPadma} hideNavBar/>
                            <Scene navBar={NavBar} key="detailmeg" component={DetailScreenMeg} hideNavBar/>
                            <Scene navBar={NavBar} key="detailjackma" component={DetailScreenJackMa} hideNavBar/>
                            <Scene navBar={NavBar} key="detailalan" component={DetailScreenAlan} hideNavBar/>
                            <Scene navBar={NavBar} key="detailjohn" component={DetailScreenJohn} hideNavBar/>
                            <Scene navBar={NavBar} key="detailmarissa" component={DetailScreenMarissa} hideNavBar/>
                            <Scene navBar={NavBar} key="viewfriend" component={Friend} imgSrc="C.png" hideNavBar icon={TabIconRequest} />
                            <Scene navBar={NavBar} key="editprofile" component={EditScreen} hideNavBar icon={TabIconEdit} />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
export default App;
