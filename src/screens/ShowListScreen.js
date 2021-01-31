import React, {useEffect, useState} from 'react';
import {SafeAreaView, TextInput, StatusBar} from 'react-native';

import ShowList from '../components/ShowList/ShowList';
import {useNavigation} from '@react-navigation/native';
import useFetchFavShows from '../hooks/useFetchFavShows';
import useFetchShowsByType from '../hooks/useFetchShowsByType';
import LoadingScreen from './LoadingScreen';

const ShowListScreen = props => {
    let shows = useFetchShowsByType(props.route, props.showList);
    const navigation = useNavigation();
    const favShows = useFetchFavShows(props.showFavs);
    const [text, setText] = useState('');

    useEffect(() => {
        if (props.route) {
            navigation.setOptions({
                title: props.route.params.title.replace('<BR/>', ''),
            });
        }
    });

    if (shows === 'LOADING') {
        return <LoadingScreen />;
    }

    let filteredList = shows.filter(item => {
        return item.title.includes(text);
    });
    if (props.showFavs) {
        filteredList = filteredList.filter(item => {
            return favShows.includes(item['@id']);
        });
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar hidden />
            <TextInput
                style={{height: 80, fontSize: 30, paddingLeft: 20}}
                placeholder="Saioa bilatu..."
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <ShowList
                list={filteredList}
                navigation={navigation}
                favShows={favShows}
            />
        </SafeAreaView>
    );
};

export default ShowListScreen;
