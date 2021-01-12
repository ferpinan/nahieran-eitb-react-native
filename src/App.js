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
import Show from './screens/Show';
import EpisodeDetails from './screens/VideoPlayer';
import ShowList from './screens/ShowList';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Main}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="ShowLists" component={ShowList}
                              options={{headerShown: false}} />
                <Stack.Screen name="Details" component={Show}
                              options={{headerShown: false}} />
                <Stack.Screen name="EpisodeDetails" component={EpisodeDetails}
                              options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
