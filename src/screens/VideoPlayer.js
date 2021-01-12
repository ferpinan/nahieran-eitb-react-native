/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Video from 'react-native-video';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import useFetchEpisodeDetail from '../hooks/useFetchEpisodeDetail';

const Details: () => React$Node = ({route}) => {
    let routeElement = route.params['@id'];
    let useFetchProgramDetail1 = useFetchEpisodeDetail(routeElement);
    if (useFetchProgramDetail1 === 'LOADING') {
        return (
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>LOADING</Text>
                </View>
            </View>
        );
    }
    let data = useFetchProgramDetail1.formats
        .filter((format) => format.ext === 'mp4')
        .reduce((prev, current) =>
            prev.height > current.height ? prev : current,
        );
    let data1 = data.url;
    console.log(data1);
    return (
        <>
            {/*<SafeAreaView>*/}
            {/*    <ScrollView*/}
            {/*        contentInsetAdjustmentBehavior="automatic"*/}
            {/*        style={styles.scrollView}>*/}
                    <Video
                        source={{uri: data1.replace("http://", "https://")}} // Can be a URL or a local file.
                        // ref={(ref) => {
                        //     this.player = ref;
                        // }} // Store reference
                        // onBuffer={this.onBuffer} // Callback when remote video is buffering
                        // onError={this.videoError} // Callback when video cannot be loaded
                        style={styles.backgroundVideo}
                        controls={true}
                        resizeMode={"contain"}
                    />
                {/*</ScrollView>*/}
            {/*</SafeAreaView>*/}
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default Details;
