import React from 'react';
import {SafeAreaView, StatusBar, View, Image, StyleSheet} from 'react-native';

const LoadingScreen = () => {
    return (
        <SafeAreaView>
            <StatusBar hidden />
            <View style={styles.container}>
                <Image
                    source={require('../images/loading.gif')}
                    style={styles.backgroundImage}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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

export default LoadingScreen;
