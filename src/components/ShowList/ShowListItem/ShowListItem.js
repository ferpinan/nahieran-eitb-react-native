import React, {Component, useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Platform,
} from 'react-native';

import SCREEN from '../../../constants/Screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {toggleFavShowOnStorage} from '../../../utils/LocalStorage';

const {height} = Dimensions.get('window');
const ROW_HEIGHT = 60;
const APP_FONT_FAMILY = Platform.select({
    ios: 'Gill Sans',
    android: 'sans-serif',
});

const ShowListItem = props => {
    const [isFav, setIsFav] = useState(props.isFav);
    useEffect(() => {
        setIsFav(props.isFav);
    }, [props.isFav]);
    // setIsFav(isFavProp);
    const onClickFavButton = show => {
        setIsFav(!isFav);
        toggleFavShowOnStorage(props.showId);
    };

    return (
        <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.rowButton}>
                <View style={styles.titleTextContainer}>
                    <FontAwesome5
                        name="star"
                        size={26}
                        style={{paddingRight: 5, paddingLeft: 5}}
                        solid={isFav}
                        onPress={onClickFavButton}
                    />
                    <Text
                        style={styles.titleText}
                        onPress={() =>
                            props.navigation.navigate(
                                SCREEN.SHOW_DETAILS,
                                props.item.member,
                            )
                        }>
                        {props.item.value}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ShowListItem;

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
        fontSize: 20,
        width: '90%',
        padding: 5,
    },
    titleTextContainer: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'stretch',
    },
    rowButton: {
        flex: 1,
        flexDirection: 'row',
        // paddingTop: '5%',
        // paddingBottom: '5%'
    },
});
