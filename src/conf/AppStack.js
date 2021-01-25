import {useNavigation} from '@react-navigation/native';
import ShowList from '../screens/ShowListScreen';
import ShowScreen from '../screens/ShowScreen';
import EpisodeDetails from '../screens/VideoPlayer';
import StartedEpisodesScreen from '../screens/StartedEpisodesScreen';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SCREEN from '../constants/Screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();

function ShowListStack(props) {
    const navigation = useNavigation();
    let headerLeft = () => (
        <FontAwesome5
            name="bars"
            size={26}
            style={{paddingLeft: 20}}
            onPress={() => navigation.openDrawer()}
        />
    );
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SCREEN.SHOW_LIST}
                options={{
                    headerLeft: headerLeft,
                    title: '',
                }}>
                {() => <ShowList showList={props.showList} />}
            </Stack.Screen>
            <Stack.Screen
                name={SCREEN.SHOW_DETAILS}
                component={ShowScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={SCREEN.EPISODE_DETAILS}
                component={EpisodeDetails}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={SCREEN.STARTED_EPISODES}
                component={StartedEpisodesScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

export default ShowListStack;
