
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

var style = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#000',
        width: '100%',
        alignItems: 'center'
    }
})
export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={style.header}>
                <Text style={{
                    justifyContent: 'center',
                    fontSize: 20,
                    lineHeight: 50,
                    alignItems: 'center',
                    color: '#fff',
                }}>
                    header
                </Text>
            </View>
        )
    }
}