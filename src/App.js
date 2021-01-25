import React from 'react';
import {
    getFocusedRouteNameFromRoute,
    NavigationContainer,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import useFetchPrograms from './hooks/useFetchPrograms';
import SplashScreen from './screens/SplashScreen';
import DrawerContent from './components/DrawerContent';
import AppStack from './conf/AppStack';
import SCREEN from './constants/Screen';
import {LOADING} from './constants/Constants';

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
    const showList = useFetchPrograms();
    if (showList === LOADING) {
        return <SplashScreen />;
    }

    let drawerOption = ({route}) => {
        // if we are on the video player drawer wont be opened
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === SCREEN.EPISODE_DETAILS) {
            return {
                swipeEnabled: false,
            };
        }
        return {};
    };
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName={SCREEN.HOME_DRAWER}
                backBehavior="none"
                drawerContent={({navigation}) => (
                    <DrawerContent navigation={navigation} />
                )}>
                <Drawer.Screen name={SCREEN.HOME_DRAWER} options={drawerOption}>
                    {() => <AppStack showList={showList} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
