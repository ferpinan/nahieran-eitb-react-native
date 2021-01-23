/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ShowList from '../components/ShowList';
import useFetchPrograms from '../hooks/useFetchPrograms';

const Main: () => React$Node = () => {
    const list = useFetchPrograms();

    if (list === 'LOADING') {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Image source={require('../images/splash.png')} style={styles.backgroundImage}/>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={styles.body}>
                    <ShowList list={list}/>
                </View>
            </ScrollView>
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
