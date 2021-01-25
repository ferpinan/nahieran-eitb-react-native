import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import useFetchStartedEpisodes from '../hooks/useFetchStartedEpisodes';
import EpisodeList from '../components/EpisodeList';
import {LOADING} from '../constants/Constants';
import LoadingScreen from './LoadingScreen';

const StartedEpisodesScreen = ({navigation}) => {
    let startedEpisodes = useFetchStartedEpisodes();
    if (startedEpisodes === LOADING) {
        return <LoadingScreen />;
    }
    if (startedEpisodes.length === 0) {
        return (
            <SafeAreaView>
                <Text style={styles.notFound}>Ez duzu atalik hasi</Text>
            </SafeAreaView>
        );
    }
    return <EpisodeList list={startedEpisodes} navigation={navigation} />;
};

const styles = StyleSheet.create({
    notFound: {alignSelf: 'center', fontSize: 30, paddingTop: 50},
});

export default StartedEpisodesScreen;
