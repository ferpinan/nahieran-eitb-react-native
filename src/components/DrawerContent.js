import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SCREEN from '../constants/Screen';

const DrawerContent = props => {
    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate(SCREEN.SHOW_LIST)}>
                <Text style={styles.text}>Saioak</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    props.navigation.navigate(SCREEN.STARTED_EPISODES)
                }>
                <Text style={styles.text}>Hasitako atalak</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DrawerContent;

const styles = StyleSheet.create({
    view: {backgroundColor: '#ddd', flex: 1},
    text: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        margin: 15,
        justifyContent: 'center',
        backgroundColor: '#4c9fed',
        borderRadius: 15,
    },
});
