import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import useFetchStartedEpisodes from '../hooks/useFetchStartedEpisodes';

const StartedEpisodesScreen: () => React$Node = ({navigation, route}) => {
    let useFetchProgramDetail1 = useFetchStartedEpisodes();
    if (useFetchProgramDetail1.length == 0) {
        return (
            <SafeAreaView>
                <Text>Hello</Text>
            </SafeAreaView>
        );
    }
    const win = Dimensions.get('window');
    return (
        <>
            <SafeAreaView>
                <FlatGrid
                    itemDimension={130}
                    data={useFetchProgramDetail1}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={{align: 'center'}}
                            onPress={() =>
                                navigation.navigate('EpisodeDetails', item)
                            }>
                            <Image
                                style={{
                                    alignSelf: 'stretch',
                                    width: win.width / 2 - 20,
                                    height: 150,
                                }}
                                source={{
                                    uri: item.episode_image,
                                }}
                            />
                            <Text
                                style={{
                                    alignSelf: 'center',
                                }}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        </>
    );
};

export default StartedEpisodesScreen;
