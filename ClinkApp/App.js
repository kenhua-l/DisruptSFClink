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
    DetailScreenViewKevin
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
} from './components/TabIcon';

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
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

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

class App extends Component {
    render() {
        return (
            <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                <Scene key="root">
                    <Scene key="login" component={LoginView} initial/>
                    <Scene key="tabbar" >
                        <Scene
                        key="main"
                        tabs
                        tabBarStyle={styles.tabBarStyle}
                        tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                        >
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
                            <Scene key="detailmarissa" component={DetailScreenViewMarissa} hideNavBar/>
                            <Scene key="mainscreen" component={MainScreenView} imgSrc="C.png" hideNavBar icon={TabIconHome} initial />
                            <Scene key="viewuser" component={ViewUserView} imgSrc="C.png" hideNavBar icon={TabIconFriends} />
                            <Scene key="viewfriend" component={ViewFriendView} imgSrc="C.png" hideNavBar icon={TabIconRequest} />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
export default App;
