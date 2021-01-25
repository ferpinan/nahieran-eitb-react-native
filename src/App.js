/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './screens/Main';
import ShowScreen from './screens/ShowScreen';
import EpisodeDetails from './screens/VideoPlayer';
import ShowList from './screens/ShowListScreen';
import {createDrawerNavigator, useIsDrawerOpen} from '@react-navigation/drawer';
import {Button, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import useFetchPrograms from './hooks/useFetchPrograms';
import SplashScreen from './screens/SplashScreen';
import StartedEpisodesScreen from './screens/StartedEpisodesScreen';
import {useNavigation} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ShowListStack(props) {
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ShowLists"
                options={{
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.openDrawer()}
                            title="Menu"
                            color="#000"
                        />
                    ),
                    title: '',
                }}>
                {() => <ShowList showList={props.showList} />}
            </Stack.Screen>
            <Stack.Screen
                name="Home"
                component={Main}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Details"
                component={ShowScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="EpisodeDetails"
                component={EpisodeDetails}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="StartedEpisodesScreen"
                component={StartedEpisodesScreen}
            />
        </Stack.Navigator>
    );
}

const DrawerContent = props => {
    const drawerOpen = useIsDrawerOpen();
    return (
        <View style={{backgroundColor: 'cream', flex: 1}}>
            <Text style={styles.text}>I am a Drawer</Text>
            {drawerOpen ? <Text>OPEN</Text> : <Text>CLOSED</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('ShowLists')}>
                <Text style={styles.text}>ShowLists</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    props.navigation.navigate('StartedEpisodesScreen')
                }>
                <Text style={styles.text}>StartedEpisodesScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('pageThree')}>
                <Text style={styles.text}>PageThree</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    props.navigation.closeDrawer();
                }}>
                <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const App: () => React$Node = () => {
    const showList = useFetchPrograms();
    if (showList === 'LOADING') {
        return <SplashScreen />;
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeDrawer"
                backBehavior="none"
                drawerContent={({navigation}) => (
                    <DrawerContent navigation={navigation} />
                )}>
                <Drawer.Screen
                    name="HomeDrawer"
                    options={({route, navigation}) => {
                        const routeName = getFocusedRouteNameFromRoute(route);
                        if (routeName === 'EpisodeDetails') {
                            return {
                                swipeEnabled: false,
                            };
                        }
                        return {};
                    }}>
                    {() => <ShowListStack showList={showList} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    text: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        margin: 15,
        justifyContent: 'center',
        backgroundColor: '#4c9fed',
        borderRadius: 15,
    },
});

export default App;
