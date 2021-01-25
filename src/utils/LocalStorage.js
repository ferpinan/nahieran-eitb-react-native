import AsyncStorage from '@react-native-async-storage/async-storage';

const storeEpisodeTime = async (episodeId, time) => {
    try {
        await AsyncStorage.setItem(episodeId, time.toString());
    } catch (e) {
        // saving error
    }
};

const getEpisodeTime = async episodeId => {
    try {
        const value = await AsyncStorage.getItem(episodeId);
        if (value) {
            return parseInt(value);
        }
        return 0;
    } catch (e) {
        // error reading value
    }
};

const getStartedEpisodes = async () => {
    try {
        const value = await AsyncStorage.getItem('startedEpisodesArray');
        if (value) {
            return JSON.parse(value);
        }
        return [];
    } catch (e) {
        // error reading value
    }
};

const addStartedEpisode = async episode => {
    try {
        getStartedEpisodes().then(async episodes => {
            if (
                !episodes.some(
                    arrayEpisode => arrayEpisode['@id'] === episode['@id'],
                )
            ) {
                episodes.push(episode);
                await AsyncStorage.setItem(
                    'startedEpisodesArray',
                    JSON.stringify(episodes),
                );
            }
        });
    } catch (e) {
        // error reading value
    }
};

export {
    storeEpisodeTime,
    getEpisodeTime,
    getStartedEpisodes,
    addStartedEpisode,
};
