import React, {useRef} from 'react';
import {AppState, BackHandler, StyleSheet, Text, View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import * as LocalStorage from '../utils/LocalStorage';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import useFetchEpisodeDetail from '../hooks/useFetchEpisodeDetail';
import {useNavigation} from '@react-navigation/native';

const Details = ({route}) => {
    useNavigation();
    let episodePrevData = route.params;
    let routeElement = episodePrevData['@id'];
    const myRef = React.createRef();
    const myRefRef = useRef(myRef);

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

    const backAction = () => {
        if (myRefRef.current) {
            LocalStorage.storeEpisodeTime(
                useFetchProgramDetail1['@id'],
                myRefRef.current.state.currentTime,
            );
        }
    };
    const _handleAppStateChange = nextAppState => {
        if (nextAppState.match(/inactive|background/)) {
            backAction();
        }
    };
    AppState.addEventListener('change', _handleAppStateChange);
    BackHandler.addEventListener('hardwareBackPress', backAction);

    let data = useFetchProgramDetail1.formats
        .filter(format => format.ext === 'mp4')
        .reduce((prev, current) =>
            prev.height > current.height ? prev : current,
        );
    let data1 = data.url;
    let onLoad = () => {
        let id = useFetchProgramDetail1['@id'];
        LocalStorage.getEpisodeTime(id).done(episodeTime => {
            myRefRef.current.player.ref.seek(episodeTime);
        });
    };

    LocalStorage.addStartedEpisode(episodePrevData);

    return (
        <>
            <VideoPlayer
                ref={myRefRef}
                source={{uri: data1.replace('http://', 'https://')}}
                disableFullscreen={true}
                onLoad={onLoad}
            />
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
