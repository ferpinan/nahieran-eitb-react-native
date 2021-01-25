import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import SCREEN from '../constants/Screen';

const EpisodeList = ({navigation, list}) => {
    const windowDimensions = Dimensions.get('window');
    const customStyles = styles(windowDimensions);
    return (
        <SafeAreaView>
            <FlatGrid
                itemDimension={130}
                data={list}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={customStyles.button}
                        onPress={() =>
                            navigation.navigate(SCREEN.EPISODE_DETAILS, item)
                        }>
                        <Image
                            style={customStyles.image}
                            source={{
                                uri: item.episode_image,
                            }}
                        />
                        <Text style={customStyles.text}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

const styles = win => {
    return StyleSheet.create({
        button: {alignSelf: 'center'},
        image: {
            alignSelf: 'stretch',
            width: win.width / 2 - 20,
            height: 150,
        },
        text: {
            alignSelf: 'center',
        },
    });
};

export default EpisodeList;
