import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const AlphabetScrollList = props => {
    return (
        <ScrollView
            style={styles2.container}
            contentContainerStyle={styles2.content}>
            {Object.keys(props.indexOfLetters).map(letter => {
                if (props.indexOfLetters[letter] > -1) {
                    return (
                        <Text
                            key={`letter_${letter}`}
                            style={styles2.letter}
                            onPress={() => {
                                props.onPressLetter(letter);
                            }}>
                            {letter.toUpperCase()}
                        </Text>
                    );
                }
            })}
        </ScrollView>
    );
};

AlphabetScrollList.propTypes = {
    indexOfLetters: PropTypes.object,
    onPressLetter: PropTypes.func,
};

export default AlphabetScrollList;

const styles2 = StyleSheet.create({
    container: {
        backgroundColor: '#dedede',
        width: '10%',
        paddingTop: 5,
    },
    content: {
        alignItems: 'center',
    },
    letter: {
        fontSize: 25,
        borderWidth: 1,
        width: 36,
        height: 36,
        borderRadius: 18,
        textAlign: 'center',
        marginBottom: 5,
        justifyContent: 'center',
        backgroundColor: '#cb8a45',
        borderColor: '#cb8a45',
        color: '#dedede',
    },
});
