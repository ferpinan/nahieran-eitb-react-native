import React from 'react';

import useFetchProgramDetail from '../hooks/useFetchProgramDetail';
import {LOADING} from '../constants/Constants';
import LoadingScreen from './LoadingScreen';
import EpisodeList from '../components/EpisodeList';

const ShowScreen = props => {
    let routeElement = props.route.params['@id'];
    let episodeList = useFetchProgramDetail(routeElement);
    if (episodeList === LOADING) {
        return <LoadingScreen />;
    }

    return (
        <EpisodeList
            list={episodeList.member.reverse()}
            navigation={props.navigation}
        />
    );
};

export default ShowScreen;
