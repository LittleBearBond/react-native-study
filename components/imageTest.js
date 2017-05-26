
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';

var style = StyleSheet.create({

})
export default class ImageTest extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Image source={require('../imgs/temp_01.jpg')} style={{
                    borderRadius: 10
                }} resizeMode={'stretch'} />
            </View>
        )
    }
}