import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Platform,
} from 'react-native';

import AlphabetFlatList from 'react-native-custom-alphabetflatlist';
import SCREEN from '../constants/Screen';

const {height} = Dimensions.get('window');
const ROW_HEIGHT = 60;
const HEADER_HEIGHT = 100;
const APP_FONT_FAMILY = Platform.select({
    ios: 'Gill Sans',
    android: 'sans-serif',
});

export default class ShowList extends Component {
    constructor(props) {
        super(props);
        this.viewabilityConfig = {
            itemVisiblePercentThreshold: 50,
        };
    }

    renderItem = ({item, index}) => {
        return (
            <View style={styles.rowContainer}>
                <TouchableOpacity style={styles.rowButton}>
                    <View style={styles.titleTextContainer}>
                        <Text
                            style={styles.titleText}
                            onPress={() =>
                                this.props.navigation.navigate(
                                    SCREEN.SHOW_DETAILS,
                                    item.member,
                                )
                            }>
                            {item.value}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    getItemLayout = (data, index) => ({
        length: ROW_HEIGHT + 20,
        offset: (ROW_HEIGHT + 20) * index + HEADER_HEIGHT,
        index,
    });

    render() {
        const tranformedList = this.props.list.map((member, index) => {
            return {
                value: member.title,
                key: `list_${index}`,
                member,
            };
        });

        return (
            <View style={styles.container}>
                <AlphabetFlatList
                    renderItem={this.renderItem}
                    // ListHeaderComponent={this.renderHeader}
                    // ListFooterComponent={this.renderFooter}
                    data={tranformedList}
                    matchFieldName={'value'}
                    getItemLayout={this.getItemLayout}
                    mainFlatListContainerStyle={{flex: 1}}
                    alphabetListProps={{
                        selectedAlphabetTextStyle: {
                            color: '#fff',
                        },
                        selectedAlphabetButtonStyle: {
                            backgroundColor: 'orange',
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            shadowOpacity: 0.5,
                            shadowOffset: {width: 2, height: 2},
                            elevation: 4,
                        },
                        alphabetButtonStyle: {
                            backgroundColor: '#fff',
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            shadowOpacity: 0.5,
                            shadowOffset: {width: 2, height: 2},
                            elevation: 4,
                        },
                        alphabetListContainerStyle: {
                            flex: 0.2,
                        },
                        showsVerticalScrollIndicator: false,
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    rowContainer: {
        // flex: 1,
        height: ROW_HEIGHT,
        width: '90%',
        backgroundColor: 'white',
        shadowColor: '#707070',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: 'row',
        margin: 20,
        marginVertical: 10,
    },
    titleText: {
        color: '#828282',
        fontFamily: APP_FONT_FAMILY,
        fontSize: height * 0.027,
    },
    titleTextContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowButton: {
        flex: 1,
        flexDirection: 'row',
        // paddingTop: '5%',
        // paddingBottom: '5%'
    },
});
