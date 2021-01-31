import {useNavigation} from '@react-navigation/native';
import ShowList from '../screens/ShowListScreen';
import ShowScreen from '../screens/ShowScreen';
import EpisodeDetails from '../screens/VideoPlayer';
import StartedEpisodesScreen from '../screens/StartedEpisodesScreen';
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SCREEN from '../constants/Screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();

function ShowListStack(props) {
    const [showFavs, setShowFavs] = useState(false);
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SCREEN.SHOW_LIST}
                options={{
                    headerLeft: () => (
                        <FontAwesome5
                            name="bars"
                            size={26}
                            style={{paddingLeft: 20}}
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <FontAwesome5
                            name="star"
                            size={26}
                            style={{paddingRight: 20}}
                            onPress={() => {
                                setShowFavs(!showFavs);
                            }}
                            solid={showFavs}
                        />
                    ),
                    title: '',
                }}>
                {() => (
                    <ShowList showList={props.showList} showFavs={showFavs} />
                )}
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
