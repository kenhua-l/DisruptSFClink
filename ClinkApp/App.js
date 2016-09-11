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
} from './frontend/pages';
import {
    Text,
    StyleSheet,
} from 'react-native';

import NavigationDrawer from './components/NavigationDrawer';
import TabView from './components/TabView';
import TabIcon from './components/TabIcon';

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
                    <Scene key="tabbar" component={NavigationDrawer}>
                        <Scene
                        key="main"
                        tabs
                        tabBarStyle={styles.tabBarStyle}
                        tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                        >
                            <Scene key="mainscreen" component={MainScreenView} title="facebook" hideNavBar icon={TabIcon} initial />
                            <Scene key="viewuser" component={ViewUserView} title="rocket" hideNavBar icon={TabIcon} />
                            <Scene key="viewfriend" component={ViewFriendView} title="twitter" hideNavBar icon={TabIcon} />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
/*
<Scene key="tabbar" tabs component={TabView}>
    <Scene key="mainscreen" component={MainScreenView} type="replace" />
    <Scene key="viewuser" component={ViewUserView} />
    <Scene key="viewfriend" component={ViewFriendView} />
</Scene>
*/
export default App;
