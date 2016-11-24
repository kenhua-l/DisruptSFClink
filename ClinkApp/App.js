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
    LoginView,
    MainScreenView,
    ViewUserView,
    ViewFriendView,
    DetailScreenViewTravis,
    DetailScreenViewEvan,
    DetailScreenViewElon,
    DetailScreenViewRichard,
    DetailScreenViewPadma,
    DetailScreenViewMeg,
    DetailScreenViewJackMa,
    DetailScreenViewAlan,
    DetailScreenViewMarissa,
    DetailScreenViewJack,
    DetailScreenViewKevin,
    EditScreenView,
    DetailScreenViewJohn
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
                    <Scene key="login" component={LoginView} initial/>
                    <Scene key="tabbar" >
                        <Scene
                        key="main"
                        tabs
                        tabBarStyle={styles.tabBarStyle}
                        tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                        >
                            <Scene key="mainscreen" component={MainScreenView} imgSrc="C.png" hideNavBar icon={TabIconHome} initial/>
                            <Scene key="detailevan" component={DetailScreenViewEvan} hideNavBar/>
                            <Scene key="detailtravis" component={DetailScreenViewTravis} hideNavBar/>
                            <Scene key="detailjack" component={DetailScreenViewJack} hideNavBar/>
                            <Scene key="detailkevin" component={DetailScreenViewKevin} hideNavBar/>
                            <Scene key="detailelon" component={DetailScreenViewElon} hideNavBar/>
                            <Scene key="detailrichard" component={DetailScreenViewRichard} hideNavBar/>
                            <Scene key="detailpadma" component={DetailScreenViewPadma} hideNavBar/>
                            <Scene key="detailmeg" component={DetailScreenViewMeg} hideNavBar/>
                            <Scene key="detailjackma" component={DetailScreenViewJackMa} hideNavBar/>
                            <Scene key="detailalan" component={DetailScreenViewAlan} hideNavBar/>
                            <Scene key="detailjohn" component={DetailScreenViewJohn} hideNavBar/>
                            <Scene key="detailmarissa" component={DetailScreenViewMarissa} hideNavBar/>
                            <Scene key="viewuser" component={ViewUserView} imgSrc="C.png" hideNavBar icon={TabIconFriends} />
                            <Scene key="viewfriend" component={ViewFriendView} imgSrc="C.png" hideNavBar icon={TabIconRequest} />
                            <Scene key="editprofile" component={EditScreenView} imgSrc="C.png" hideNavBar icon={TabIconEdit} />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
export default App;
