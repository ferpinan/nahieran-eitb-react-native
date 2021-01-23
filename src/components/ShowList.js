/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ShowList: () => React$Node = (props) => {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        text: {
            fontSize: 26,
            borderBottomWidth: 1,
            margin: 10
        }
    });

    return (
        <View>
            {props.list.map((member, index) => (
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

export default ShowList;
