import React, {useEffect} from 'react';
import {LOADING} from '../constants/Constants';
import LoadingScreen from './LoadingScreen';
import useFetchShowTypes from '../hooks/useFetchShowTypes';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import SCREEN from '../constants/Screen';

const ShowTypeScreen = ({navigation}) => {
    let showTypes = useFetchShowTypes();
    useEffect(() => {
        if (showTypes === LOADING) {
            navigation.setOptions({headerShown: false});
        }
        navigation.setOptions({headerShown: true});
    });

    if (showTypes === LOADING) {
        return <LoadingScreen />;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar hidden />
            {showTypes.map((showType, index) => (
                <TouchableOpacity
                    style={styles.item}
                    key={`showType_${index}`}
                    onPress={() =>
                        navigation.navigate(SCREEN.SHOW_LIST_BY_TYPE, showType)
                    }>
                    <Text style={styles.text}>
                        {showType.title.replace('<BR/>', '')}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default ShowTypeScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
    },
    item: {
        width: '46%', // is 50% of container width
        backgroundColor: '#5591d7',
        padding: 5,
        margin: '2%',
        height: 100,
    },
    text: {
        color: '#dedede',
        fontSize: 20,
    },
});
