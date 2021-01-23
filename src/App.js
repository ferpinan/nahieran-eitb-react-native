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

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ShowLists" component={ShowList}
                              options={{headerShown: false}} />
                <Stack.Screen
                    name="Home"
                    component={Main}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Details" component={ShowScreen}
                              options={{headerShown: false}} />
                <Stack.Screen name="EpisodeDetails" component={EpisodeDetails}
                              options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
