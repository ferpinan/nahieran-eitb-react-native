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
    Image
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import useFetchProgramDetail from '../hooks/useFetchProgramDetail';

const ShowScreen: () => React$Node = ({navigation, route}) => {
    let routeElement = route.params['@id'];
    let useFetchProgramDetail1 = useFetchProgramDetail(routeElement);
    if (useFetchProgramDetail1 === 'LOADING') {
        return (
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>LOADING</Text>
                </View>
            </View>
        );
    }

    return (
        <>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <Text style={styles.sectionTitle}>
                            {route.params.title}
                        </Text>
                        <View style={styles.sectionContainer}>
                            {useFetchProgramDetail1.member.map(
                                (member, index) => (
                                    <>
                                        <Text
                                            key={`list_${index}`}
                                            onPress={() =>
                                                navigation.navigate(
                                                    'EpisodeDetails',
                                                    member,
                                                )
                                            }>
                                            {member.title}
                                        </Text>
                                    </>
                                ),
                            )}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
        flex: 1,
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
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        flex: 1,
        width: '50%',
        height: '50%',
    },
    logo: {
        width: 66,
        height: 58,
    }
});

export default ShowScreen;
