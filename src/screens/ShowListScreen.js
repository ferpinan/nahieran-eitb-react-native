/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Image, SafeAreaView, TextInput, StyleSheet, View, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ShowList from '../components/ShowList';
import useFetchPrograms from '../hooks/useFetchPrograms';
import {useNavigation} from '@react-navigation/native';

const Main: () => React$Node = () => {
    const list = useFetchPrograms();
    const navigation = useNavigation();
    const [text, setText] = useState('');

    if (list === 'LOADING') {
        return (
            <SafeAreaView>
                <StatusBar hidden />
                <View style={styles.container}>
                    <Image
                        source={require('../images/splash.png')}
                        style={styles.backgroundImage}
                    />
                </View>
            </SafeAreaView>
        );
    }

    const filteredList = list.filter(item => {
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
            <ShowList
                list={filteredList}
                navigation={navigation}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
});

export default Main;
