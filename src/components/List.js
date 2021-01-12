/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useFetchPrograms from '../hooks/useFetchPrograms';
import {useNavigation} from '@react-navigation/native';

const List: () => React$Node = () => {
    const navigation = useNavigation();
    const list = useFetchPrograms();

    if (list === 'LOADING') {
        return (
            <View>
                <Text>LOADING...</Text>
            </View>
        );
    }
    const styles = StyleSheet.create({
        text: {
            fontSize: 26,
            borderBottomWidth: 1,
            margin: 10
        },
    });

    return (
        <View>
            {list.map((member, index) => (
                <Text
                    style={styles.text}
                    key={`list_${index}`}
                    onPress={() => {
                        navigation.navigate('Details', member);
                    }}>
                    {member.title}
                </Text>
            ))}
        </View>
    );
};

export default List;
