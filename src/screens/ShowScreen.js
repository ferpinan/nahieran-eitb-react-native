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
    TouchableOpacity,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import useFetchProgramDetail from '../hooks/useFetchProgramDetail';

const ShowScreen: () => React$Node = ({navigation, route}) => {
    let routeElement = route.params['@id'];
    let useFetchProgramDetail1 = useFetchProgramDetail(routeElement);
    if (useFetchProgramDetail1 === 'LOADING') {
        return (
            <View>
                <View>
                    <Text>LOADING</Text>
                </View>
            </View>
        );
    }

    const win = Dimensions.get('window');
    return (
        <>
            <SafeAreaView>
                <FlatGrid
                    itemDimension={130}
                    data={useFetchProgramDetail1.member.reverse()}
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

export default ShowScreen;
