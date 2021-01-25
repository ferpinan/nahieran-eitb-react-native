import React, {useState} from 'react';
import {SafeAreaView, TextInput, StatusBar} from 'react-native';

import ShowList from '../components/ShowList';
import {useNavigation} from '@react-navigation/native';

const Main = props => {
    const navigation = useNavigation();
    const [text, setText] = useState('');

    const filteredList = props.showList.filter(item => {
        return item.title.includes(text);
    });
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar hidden />
            <TextInput
                style={{height: 80, fontSize: 30, paddingLeft: 20}}
                placeholder="Saioa bilatu..."
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <ShowList list={filteredList} navigation={navigation} />
        </SafeAreaView>
    );
};

export default Main;
