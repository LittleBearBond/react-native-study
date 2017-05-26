
import React, { Component } from 'react';
import TouchableTest from './components/TouchableTest';
import ImageTest from './components/imageTest';

import Header from './components/header';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
               {/* <TouchableTest />*/}
                <ImageTest />
            </View>
        );
    }
}
