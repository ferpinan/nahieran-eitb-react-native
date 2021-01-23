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
    Image,
    Dimensions
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
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
                        <View style={{align: 'center'}}>
                            <Image
                                style={{
                                    // flex: 1,
                                    alignSelf: 'stretch',
                                    width: win.width / 2 - 20,
                                    height: 150,
                                }}
                                // resizeMode={'contain'}
                                source={{
                                    uri: item.episode_image,
                                }}
                            />
                            <Text
                                style={{
                                    alignSelf: 'center'
                                }}
                                onPress={() =>
                                    navigation.navigate(
                                        'EpisodeDetails',
                                        item,
                                    )
                                }>
                                {item.title}
                            </Text>
                        </View>
                    )}
                />
            </SafeAreaView>
        </>
    );
};

export default ShowScreen;
