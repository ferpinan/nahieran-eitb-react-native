import {useNavigation} from '@react-navigation/native';
import ShowListScreen from '../screens/ShowListScreen';
import ShowScreen from '../screens/ShowScreen';
import EpisodeDetails from '../screens/VideoPlayer';
import StartedEpisodesScreen from '../screens/StartedEpisodesScreen';
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SCREEN from '../constants/Screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ShowTypeScreen from '../screens/ShowTypeScreen';

const Stack = createStackNavigator();

function ShowListStack(props) {
    const [showFavs, setShowFavs] = useState(false);
    const navigation = useNavigation();

    let headerOptions = {
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
    };
    return (
        <Stack.Navigator initialRouteName={SCREEN.SHOW_TYPES}>
            <Stack.Screen name={SCREEN.SHOW_LIST} options={headerOptions}>
                {() => (
                    <ShowListScreen
                        showList={props.showList}
                        showFavs={showFavs}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name={SCREEN.SHOW_LIST_BY_TYPE}
                options={headerOptions}>
                {({route}) => {
                    return (
                        <ShowListScreen
                            showList={props.showList}
                            showFavs={showFavs}
                            route={route}
                        />
                    );
                }}
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
            <Stack.Screen
                name={SCREEN.SHOW_TYPES}
                component={ShowTypeScreen}
                options={{
                    headerLeft: () => (
                        <FontAwesome5
                            name="bars"
                            size={26}
                            style={{paddingLeft: 20}}
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                    title: 'Saio motak',
                }}
            />
        </Stack.Navigator>
    );
}

export default ShowListStack;
