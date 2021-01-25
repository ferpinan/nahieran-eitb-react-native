import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
export default class Sidebar extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#95a5a6'}}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text>Side Drawer</Text>
                </View>
            </SafeAreaView>
        );
    }
}
