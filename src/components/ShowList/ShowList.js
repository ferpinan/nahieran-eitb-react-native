import React, {Component, useRef, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Platform,
    ScrollView,
    VirtualizedList,
    SafeAreaView,
} from 'react-native';

import AlphabetFlatList from 'react-native-custom-alphabetflatlist';
import SCREEN from '../../constants/Screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useFetchFavShows from '../../hooks/useFetchFavShows';
import ShowListItem from './ShowListItem/ShowListItem';
import AlphabetScrollList from './AlphabetScrollList/AlphabetScrollList';

const {height} = Dimensions.get('window');
const ROW_HEIGHT = 60;

const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

const ShowList = props => {
    const ref = useRef(null);
    const dataSourceCords = [];
    const renderItem = (item, index) => {
        let showId = item.member['@id'];
        let isFavProp = props.favShows.some(show => show === showId);
        return (
            <View
                onLayout={event => {
                    const layout = event.nativeEvent.layout;
                    dataSourceCords[showId] = layout.y;
                }}>
                <ShowListItem
                    showId={showId}
                    favShows={props.favShows}
                    navigation={props.navigation}
                    item={item}
                    isFav={isFavProp}
                />
            </View>
        );
    };

    const getItemLayout = (data, index) => ({
        length: ROW_HEIGHT + 20,
        offset: (ROW_HEIGHT + 20) * index,
        index,
    });

    const tranformedList = props.list.map((member, index) => {
        return {
            value: member.title,
            title: member.title,
            id: `list_${index}`,
            key: `list_${index}`,
            member,
        };
    });

    const indexOfLetters = {
        '*': 0,
    };

    alphabet.forEach(letter => {
        let data1 = tranformedList.findIndex(element =>
            element.title.toLowerCase().startsWith(letter),
        );
        indexOfLetters[letter] = data1;
    });

    const getItem = (data, index) => {
        return data[index];
    };

    const getItemCount = data => {
        return data.length;
    };

    let handleOnPressLetter = letter => {
        ref.current.scrollToIndex({
            index: indexOfLetters[letter],
            animated: true,
        });
    };
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <SafeAreaView style={styles.container}>
                <VirtualizedList
                    data={tranformedList}
                    initialNumToRender={20}
                    renderItem={({item}) => renderItem(item)}
                    keyExtractor={item => item.key}
                    getItemCount={getItemCount}
                    getItem={getItem}
                    getItemLayout={getItemLayout}
                    ref={ref}
                    scrollToIndex={10}
                />
            </SafeAreaView>
            <AlphabetScrollList
                indexOfLetters={indexOfLetters}
                onPressLetter={handleOnPressLetter}
            />
        </View>
    );
};

export default ShowList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '85%',
    },
    rowContainer: {
        height: ROW_HEIGHT,
        width: '90%',
        backgroundColor: 'white',
        shadowColor: '#707070',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: 'row',
        margin: 20,
        marginVertical: 10,
    },
    titleText: {
        color: '#828282',
        fontFamily: Platform.select({
            ios: 'Gill Sans',
            android: 'sans-serif',
        }),
        fontSize: height * 0.027,
    },
    titleTextContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    rowButton: {
        flex: 1,
        flexDirection: 'row',
    },
});
