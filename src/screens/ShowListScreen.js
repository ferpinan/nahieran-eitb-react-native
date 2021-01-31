import React, {useState} from 'react';
import {SafeAreaView, TextInput, StatusBar} from 'react-native';

import ShowList from '../components/ShowList/ShowList';
import {useNavigation} from '@react-navigation/native';
import useFetchFavShows from '../hooks/useFetchFavShows';

const Main = props => {
    const navigation = useNavigation();
    const favShows = useFetchFavShows(props.showFavs);
    const [text, setText] = useState('');

    let filteredList = props.showList.filter(item => {
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

export default Main;
