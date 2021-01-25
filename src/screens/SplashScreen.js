import React from 'react';
import {SafeAreaView, StatusBar, View, Image, StyleSheet} from 'react-native';

const SplashScreen = () => {
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

export default SplashScreen;
