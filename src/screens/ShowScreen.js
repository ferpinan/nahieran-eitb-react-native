import React from 'react';

import useFetchProgramDetail from '../hooks/useFetchProgramDetail';
import {LOADING} from '../constants/Constants';
import LoadingScreen from './LoadingScreen';
import EpisodeList from '../components/EpisodeList';

const ShowScreen = ({navigation, route}) => {
    let routeElement = route.params['@id'];
    let episodeList = useFetchProgramDetail(routeElement);
    if (episodeList === LOADING) {
        return <LoadingScreen />;
    }

    return (
        <EpisodeList
            list={episodeList.member.reverse()}
            navigation={navigation}
        />
    );
};

export default ShowScreen;
